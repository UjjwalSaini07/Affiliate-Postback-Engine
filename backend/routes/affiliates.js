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
router.get('/:id/clicks', async (req, res) => {
  const id = req.params.id;
  const r = await db.query(
    `SELECT clicks.*, campaigns.name AS campaign_name
     FROM clicks
     LEFT JOIN campaigns ON campaigns.id = clicks.campaign_id
     WHERE affiliate_id = $1
     ORDER BY timestamp DESC`,
    [id]
  );
  res.json(r.rows);
});


// GET /affiliates/:id/conversions
router.get('/:id/conversions', async (req, res) => {
  try {
    const id = req.params.id;
    const r = await db.query(
      `SELECT conversions.*, clicks.click_id, campaigns.name AS campaign_name
       FROM conversions
       JOIN clicks ON conversions.click_id = clicks.id
       LEFT JOIN campaigns ON campaigns.id = clicks.campaign_id
       WHERE clicks.affiliate_id = $1
       ORDER BY conversions.timestamp DESC`,
      [id]
    );
    res.json(r.rows);
  } catch (err) {
    console.error("Error fetching conversions:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;