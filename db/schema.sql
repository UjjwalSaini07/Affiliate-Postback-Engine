-- schema.sql
CREATE TABLE affiliates (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE campaigns (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE clicks (
  id SERIAL PRIMARY KEY,
  affiliate_id INTEGER NOT NULL REFERENCES affiliates(id) ON DELETE CASCADE,
  campaign_id INTEGER NOT NULL REFERENCES campaigns(id) ON DELETE CASCADE,
  click_id TEXT NOT NULL,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE (affiliate_id, campaign_id, click_id)
);

CREATE TABLE conversions (
  id SERIAL PRIMARY KEY,
  click_id INTEGER NOT NULL REFERENCES clicks(id) ON DELETE CASCADE,
  amount DOUBLE PRECISION NOT NULL,
  currency VARCHAR(10) NOT NULL,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE (click_id) -- optional: ensures one conversion per click
);
