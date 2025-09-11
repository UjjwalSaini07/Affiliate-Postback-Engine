-- Drop existing tables (reset database each run)
DROP TABLE IF EXISTS conversions CASCADE;
DROP TABLE IF EXISTS clicks CASCADE;
DROP TABLE IF EXISTS campaigns CASCADE;
DROP TABLE IF EXISTS affiliates CASCADE;

-- Affiliates table
CREATE TABLE affiliates (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

-- Campaigns table
CREATE TABLE campaigns (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

-- Clicks table
CREATE TABLE clicks (
  id SERIAL PRIMARY KEY,
  affiliate_id INTEGER NOT NULL REFERENCES affiliates(id) ON DELETE CASCADE,
  campaign_id INTEGER NOT NULL REFERENCES campaigns(id) ON DELETE CASCADE,
  click_id TEXT NOT NULL,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE (affiliate_id, campaign_id, click_id)
);

-- Conversions table
CREATE TABLE conversions (
  id SERIAL PRIMARY KEY,
  click_id INTEGER NOT NULL REFERENCES clicks(id) ON DELETE CASCADE,
  amount DOUBLE PRECISION NOT NULL CHECK (amount >= 0),
  currency VARCHAR(3) NOT NULL,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Indexes for faster lookups
CREATE INDEX idx_clicks_affiliate ON clicks(affiliate_id);
CREATE INDEX idx_clicks_clickid   ON clicks(click_id);
CREATE INDEX idx_conversions_clickid ON conversions(click_id);
CREATE INDEX idx_conversions_timestamp ON conversions(timestamp);
