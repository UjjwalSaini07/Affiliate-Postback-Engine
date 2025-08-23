const express = require('express');
const router = express.Router();
const db = require('../db/db');

// Utility: validate integers
function isPositiveInt(value) {
  const n = Number(value);
  return Number.isInteger(n) && n > 0;
}

router.get('/', async (req, res, next) => {
  const { affiliate_id, campaign_id, click_id } = req.query;

  // Validate input
  if (!isPositiveInt(affiliate_id) || !isPositiveInt(campaign_id) || !click_id) {
    return res.status(400).json({
      status: 'error',
      message: 'Invalid or missing parameters: affiliate_id, campaign_id, click_id are required'
    });
  }

  try {
    // Try insert, fallback if exists
    const insertResult = await db.query(
      `INSERT INTO clicks (affiliate_id, campaign_id, click_id)
       VALUES ($1, $2, $3)
       ON CONFLICT (affiliate_id, campaign_id, click_id) DO NOTHING
       RETURNING *`,
      [affiliate_id, campaign_id, click_id]
    );

    const click =
      insertResult.rows[0] ||
      (
        await db.query(
          `SELECT c.*, a.name AS affiliate_name, camp.name AS campaign_name
           FROM clicks c
           JOIN affiliates a ON a.id = c.affiliate_id
           JOIN campaigns camp ON camp.id = c.campaign_id
           WHERE c.affiliate_id = $1 AND c.campaign_id = $2 AND c.click_id = $3`,
          [affiliate_id, campaign_id, click_id]
        )
      ).rows[0];

    res.json({
      status: 'success',
      message: insertResult.rows[0] ? 'Click recorded' : 'Click already exists',
      data: click
    });
  } catch (err) {
    console.error('Error in /click route:', err);
    next(err); // handled by centralized error handler in server.js
  }
});

module.exports = router;
