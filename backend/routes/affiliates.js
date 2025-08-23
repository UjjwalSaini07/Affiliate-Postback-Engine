const express = require('express');
const router = express.Router();
const db = require('../db/db');

function validateId(id) {
  const num = Number(id);
  return Number.isInteger(num) && num > 0;
}

// GET /affiliates -> list affiliates
router.get('/', async (req, res, next) => {
  try {
    const result = await db.query(
      'SELECT id, name FROM affiliates ORDER BY id'
    );
    res.json({ data: result.rows });
  } catch (err) {
    next(err);
  }
});

// GET /affiliates/:id/clicks
router.get('/:id/clicks', async (req, res, next) => {
  const { id } = req.params;
  if (!validateId(id)) {
    return res.status(400).json({ error: 'Invalid affiliate ID' });
  }

  const limit = parseInt(req.query.limit) || 50;
  const offset = parseInt(req.query.offset) || 0;

  try {
    const result = await db.query(
      `SELECT clicks.id, clicks.click_id, clicks.timestamp, 
              campaigns.name AS campaign_name
       FROM clicks
       LEFT JOIN campaigns ON campaigns.id = clicks.campaign_id
       WHERE clicks.affiliate_id = $1
       ORDER BY clicks.timestamp DESC
       LIMIT $2 OFFSET $3`,
      [id, limit, offset]
    );
    res.json({ data: result.rows, count: result.rowCount });
  } catch (err) {
    next(err);
  }
});

// GET /affiliates/:id/conversions
router.get('/:id/conversions', async (req, res, next) => {
  const { id } = req.params;
  if (!validateId(id)) {
    return res.status(400).json({ error: 'Invalid affiliate ID' });
  }

  const limit = parseInt(req.query.limit) || 50;
  const offset = parseInt(req.query.offset) || 0;

  try {
    const result = await db.query(
      `SELECT conversions.id, conversions.amount, conversions.currency, conversions.timestamp,
              clicks.click_id, campaigns.name AS campaign_name
       FROM conversions
       JOIN clicks ON conversions.click_ref = clicks.id
       LEFT JOIN campaigns ON campaigns.id = clicks.campaign_id
       WHERE clicks.affiliate_id = $1
       ORDER BY conversions.timestamp DESC
       LIMIT $2 OFFSET $3`,
      [id, limit, offset]
    );
    res.json({ data: result.rows, count: result.rowCount });
  } catch (err) {
    next(err);
  }
});

module.exports = router;