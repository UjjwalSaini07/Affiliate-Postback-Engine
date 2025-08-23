const express = require('express');
const router = express.Router();
const db = require('../db/db');

router.get('/', async (req, res) => {
  const { affiliate_id, campaign_id, click_id } = req.query;
  if (!affiliate_id || !campaign_id || !click_id) {
    return res.status(400).json({ status: 'error', message: 'Missing params' });
  }

  try {
    const result = await db.query(
      `INSERT INTO clicks (affiliate_id, campaign_id, click_id)
       VALUES ($1, $2, $3)
       ON CONFLICT (affiliate_id, campaign_id, click_id) DO NOTHING
       RETURNING *`,
      [affiliate_id, campaign_id, click_id]
    );

    // If already existed, fetch it
    const click = result.rows[0] || (await db.query(
      `SELECT * FROM clicks WHERE affiliate_id = $1 AND campaign_id = $2 AND click_id = $3`,
      [affiliate_id, campaign_id, click_id]
    )).rows[0];

    res.json({ status: 'success', click });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 'error', message: 'Server error' });
  }
});

module.exports = router;
