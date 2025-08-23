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

    // 1) Validate input
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

    // 2) Find the click for this affiliate
    const clickRes = await db.query(
      `SELECT c.id, c.click_id, camp.name AS campaign_name, a.name AS affiliate_name
       FROM clicks c
       JOIN affiliates a ON a.id = c.affiliate_id
       JOIN campaigns camp ON camp.id = c.campaign_id
       WHERE c.affiliate_id = $1 AND c.click_id = $2`,
      [affiliate_id, click_id]
    );

    if (clickRes.rowCount === 0) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid click_id for this affiliate'
      });
    }

    const clickRow = clickRes.rows[0];

    // 3) Check idempotency (prevent duplicate conversions)
    const convCheck = await db.query(
      `SELECT id FROM conversions WHERE click_ref = $1`,
      [clickRow.id]
    );

    if (convCheck.rowCount > 0) {
      return res.status(409).json({
        status: 'error',
        message: 'Conversion already recorded for this click'
      });
    }

    // 4) Insert conversion
    const insertRes = await db.query(
      `INSERT INTO conversions (click_ref, amount, currency)
       VALUES ($1, $2, $3)
       RETURNING id, amount, currency, timestamp`,
      [clickRow.id, amt, curr]
    );

    const conversion = insertRes.rows[0];

    // 5) Respond
    res.json({
      status: 'success',
      message: 'Conversion tracked',
      data: {
        conversion,
        click: clickRow
      }
    });
  } catch (err) {
    console.error('Error in /postback route:', err);
    next(err);
  }
});

module.exports = router;
