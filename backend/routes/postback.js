// routes/postback.js
const express = require('express');
const router = express.Router();
const db = require('../db/db');

// Utility: validate integer
function isPositiveInt(value) {
  const n = Number(value);
  return Number.isInteger(n) && n > 0;
}

router.get('/', async (req, res, next) => {
  try {
    const { affiliate_id, click_id, amount, currency } = req.query;

    // Validate input
    if (!isPositiveInt(affiliate_id) || !click_id || !amount || !currency) {
      return res.status(400).json({
        status: 'error',
        message: 'Missing or invalid parameters: affiliate_id, click_id, amount, currency are required'
      });
    }

    const amt = parseFloat(amount);
    if (isNaN(amt) || amt < 0) {
      return res.status(400).json({
        status: 'error',
        message: 'Amount must be a valid non-negative number'
      });
    }

    const curr = currency.trim().toUpperCase();
    if (curr.length !== 3) {
      return res.status(400).json({
        status: 'error',
        message: 'Currency must be a 3-letter ISO code (e.g., USD, EUR)'
      });
    }

    // Find the click for this affiliate
    const clickRes = await db.query(
      `SELECT id FROM clicks WHERE affiliate_id = $1 AND click_id = $2`,
      [affiliate_id, click_id]
    );

    if (clickRes.rowCount === 0) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid click_id for this affiliate'
      });
    }

    const clickRow = clickRes.rows[0];

    // Prevent duplicate conversions
    const convCheck = await db.query(
      `SELECT id FROM conversions WHERE click_id = $1`,
      [clickRow.id]
    );

    if (convCheck.rowCount > 0) {
      return res.status(409).json({
        status: 'error',
        message: 'Conversion already recorded for this click'
      });
    }

    // Insert conversion
    const insertRes = await db.query(
      `INSERT INTO conversions (click_id, amount, currency)
       VALUES ($1, $2, $3)
       RETURNING id, amount, currency, timestamp`,
      [clickRow.id, amt, curr]
    );

    res.json({
      status: 'success',
      message: 'Conversion tracked',
      data: insertRes.rows[0]
    });
  } catch (err) {
    console.error('Error in /postback route:', err);
    res.status(500).json({ status: 'error', message: 'Something went wrong!', details: err.message });
  }
});

module.exports = router;
