-- Seed affiliates
INSERT INTO affiliates (id, name) VALUES
  (1, 'Affiliate Alpha'),
  (2, 'Affiliate Beta');

-- Seed campaigns
INSERT INTO campaigns (id, name) VALUES
  (1, 'Summer Promo'),
  (2, 'Winter Sale');

-- Seed clicks with timestamps
INSERT INTO clicks (affiliate_id, campaign_id, click_id, timestamp) VALUES
  (1, 1, 'click_abc123', NOW()),
  (1, 1, 'click_def456', NOW()),
  (2, 2, 'click_xyz999', NOW());
