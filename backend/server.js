const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const clicksRouter = require('./routes/clicks');
const postbackRouter = require('./routes/postback');
const affiliatesRouter = require('./routes/affiliates');

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/click', clicksRouter);         // GET /click?affiliate_id=...&campaign_id=...&click_id=...
app.use('/postback', postbackRouter);   // GET /postback?affiliate_id=...&click_id=...&amount=...&currency=...
app.use('/affiliates', affiliatesRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend listening on ${PORT}`));
