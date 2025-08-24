const express = require("express");
const router = express.Router();
const db = require("../db/db");
const { Parser } = require("json2csv");

function validateId(id) {
  const num = Number(id);
  return Number.isInteger(num) && num > 0;
}

// GET /affiliates -> list affiliates
router.get("/", async (req, res, next) => {
  try {
    const result = await db.query(
      "SELECT id, name FROM affiliates ORDER BY id"
    );
    res.json({ data: result.rows });
  } catch (err) {
    next(err);
  }
});

// GET /affiliates/:id/clicks
router.get("/:id/clicks", async (req, res) => {
  const id = req.params.id;
  const format = req.query.format;

  try {
    const r = await db.query(
      `SELECT clicks.*, campaigns.name AS campaign_name
       FROM clicks
       LEFT JOIN campaigns ON campaigns.id = clicks.campaign_id
       WHERE affiliate_id = $1
       ORDER BY timestamp DESC`,
      [id]
    );

    const rows = r.rows;

    if (format === "csv") {
      const headers = Object.keys(rows[0] || {});
      const csv = [
        headers.join(","), // header row
        ...rows.map((row) => headers.map((h) => row[h]).join(",")), // data rows
      ].join("\n");

      res.header("Content-Type", "text/csv");
      res.attachment(`affiliate_${id}_clicks.csv`);
      return res.send(csv);
    }

    // Default JSON response
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET /affiliates/:id/conversions
router.get("/:id/conversions", async (req, res) => {
  const id = req.params.id;
  const format = req.query.format;

  try {
    const r = await db.query(
      `SELECT conversions.*, clicks.click_id, campaigns.name AS campaign_name
       FROM conversions
       JOIN clicks ON conversions.click_id = clicks.id
       LEFT JOIN campaigns ON campaigns.id = clicks.campaign_id
       WHERE clicks.affiliate_id = $1
       ORDER BY conversions.timestamp DESC`,
      [id]
    );

    const rows = r.rows;

    if (format === "csv") {
      const headers = Object.keys(rows[0] || {});
      const csv = [
        headers.join(","),
        ...rows.map((row) => headers.map((h) => row[h]).join(",")),
      ].join("\n");

      res.header("Content-Type", "text/csv");
      res.attachment(`affiliate_${id}_conversions.csv`);
      return res.send(csv);
    }

    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;