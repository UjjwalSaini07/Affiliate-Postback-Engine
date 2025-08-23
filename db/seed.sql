INSERT INTO affiliates (name) VALUES ('Affiliate A'), ('Affiliate B');

INSERT INTO campaigns (name) VALUES ('Campaign 1'), ('Campaign 2');

-- sample clicks:
INSERT INTO clicks (affiliate_id, campaign_id, click_id)
VALUES
 (1, 1, 'abc123'),
 (1, 1, 'def456'),
 (2, 2, 'xyz999');
