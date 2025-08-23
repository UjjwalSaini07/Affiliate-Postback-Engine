const express = require('express');
const router = express.Router();
const db = require('../db/db');

router.get('/', async (req, res) => {
  const { affiliate_id, click_id, amount, currency } = req.query;
  if (!affiliate_id || !click_id || !amount || !currency) {
    return res.status(400).json({ status: 'error', message: 'Missing params' });
  }

  try {
    // 1) Find the click for this affiliate
    const clickRes = await db.query(
      `SELECT id FROM clicks WHERE affiliate_id = $1 AND click_id = $2`,
      [affiliate_id, click_id]
    );

    if (clickRes.rowCount === 0) {
      return res.status(400).json({ status: 'error', message: 'Invalid click_id for affiliate' });
    }

    const clickRow = clickRes.rows[0];

    // 2) Check idempotency (optional): prevent duplicate conversions for same click
    const convCheck = await db.query(
      `SELECT id FROM conversions WHERE click_id = $1`,
      [clickRow.id]
    );

    if (convCheck.rowCount > 0) {
      return res.status(409).json({ status: 'error', message: 'Conversion already recorded for this click' });
    }

    // 3) Insert conversion
    const insertRes = await db.query(
      `INSERT INTO conversions (click_id, amount, currency) VALUES ($1, $2, $3) RETURNING *`,
      [clickRow.id, parseFloat(amount), currency]
    );

    res.json({ status: 'success', message: 'Conversion tracked', conversion: insertRes.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 'error', message: 'Server error' });
  }
});

module.exports = router;
