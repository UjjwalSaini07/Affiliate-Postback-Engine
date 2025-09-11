-- Seed affiliates
INSERT INTO affiliates (id, name) VALUES
  (1, 'Affiliate Alpha'),
  (2, 'Affiliate Beta'),
  (3, 'Affiliate Gamma'),
  (4, 'Affiliate Delta');

-- Seed campaigns
INSERT INTO campaigns (id, name) VALUES
  (1, 'Summer Promo'),
  (2, 'Winter Sale'),
  (3, 'Spring Launch'),
  (4, 'Black Friday Blast');

-- Seed clicks with timestamps
INSERT INTO clicks (affiliate_id, campaign_id, click_id, timestamp) VALUES
  (1, 1, 'click_abc123', NOW() - INTERVAL '2 days'),
  (1, 1, 'click_def456', NOW() - INTERVAL '1 day'),
  (2, 2, 'click_xyz999', NOW() - INTERVAL '3 hours'),
  (3, 3, 'click_lmn222', NOW() - INTERVAL '5 hours'),
  (3, 3, 'click_opq333', NOW() - INTERVAL '10 minutes'),
  (4, 4, 'click_rst444', NOW());

-- Seed conversions (linked to clicks by their IDs)
INSERT INTO conversions (click_ref, amount, currency, timestamp) VALUES
  (1, 19.99, 'USD', NOW() - INTERVAL '1 day'),
  (2, 49.50, 'USD', NOW() - INTERVAL '20 hours'),
  (3, 75.00, 'EUR', NOW() - INTERVAL '2 hours'),
  (4, 10.00, 'GBP', NOW() - INTERVAL '1 hour'),
  (5, 150.00, 'USD', NOW() - INTERVAL '30 minutes'),
  (6, 200.00, 'USD', NOW());
