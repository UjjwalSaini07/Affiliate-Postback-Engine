const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const clicksRouter = require('./routes/clicks');
const postbackRouter = require('./routes/postback');
const affiliatesRouter = require('./routes/affiliates');
const { pool } = require('./db/db');

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/click', clicksRouter);         // GET /click?affiliate_id=...&campaign_id=...&click_id=...
app.use('/postback', postbackRouter);   // GET /postback?affiliate_id=...&click_id=...&amount=...&currency=...
app.use('/affiliates', affiliatesRouter);

// Health check
app.get('/health', async (req, res) => {
  const health = {
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  };

  try {
    await pool.query('SELECT 1');
    health.database = 'connected';
  } catch (err) {
    console.error('Health check DB error:', err);
    health.database = 'disconnected';
    health.status = 'error';
    return res.status(500).json(health);
  }

  res.json(health);
});


// Error handler (for async route errors)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () =>
  console.log(`✅ Backend listening on port ${PORT}`)
);

// Graceful shutdown
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

function shutdown() {
  console.log('Shutting down server...');
  server.close(() => {
    pool.end(() => {
      console.log('Database pool closed.');
      process.exit(0);
    });
  });
}
