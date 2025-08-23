# Affiliate-Postback-Engine



Quick Check
```
psql -U postgres -h localhost -p 5433 -d affiliate_dev -c "
SELECT c.id, c.amount, c.currency, cl.click_id, cl.affiliate_id
FROM conversions c
JOIN clicks cl ON c.click_id = cl.id
ORDER BY cl.affiliate_id;
"
```

Indivisual Check:
- Check that the click actually exists
```
psql -U postgres -h localhost -p 5433 -d affiliate_dev -c "
SELECT * FROM clicks WHERE affiliate_id = 3 AND click_id = 'abc999';
"
```

- If this returns 0 rows → you need to insert a click first.
- Insert the click if missing:
```
psql -U postgres -h localhost -p 5433 -d affiliate_dev -c "
INSERT INTO clicks (affiliate_id, campaign_id, click_id)
VALUES (3, 2, 'abc999')
ON CONFLICT (affiliate_id, campaign_id, click_id) DO NOTHING;
"
```
- Adjust campaign_id to a valid campaign for that affiliate.
- Then insert the conversion safely:
```
psql -U postgres -h localhost -p 5433 -d affiliate_dev -c "
INSERT INTO conversions (click_id, amount, currency)
VALUES ((SELECT id FROM clicks WHERE affiliate_id = 3 AND click_id = 'abc999'), 200, 'USD')
ON CONFLICT (click_id) DO NOTHING;
"
```

```
# Affiliate 1 clicks and conversions
psql -U postgres -h localhost -p 5433 -d affiliate_dev -c "
INSERT INTO clicks (affiliate_id, campaign_id, click_id)
VALUES 
  (1, 1, 'abc123'),
  (1, 1, 'def456')
ON CONFLICT (affiliate_id, campaign_id, click_id) DO NOTHING;
"

psql -U postgres -h localhost -p 5433 -d affiliate_dev -c "
INSERT INTO conversions (click_id, amount, currency)
VALUES
  ((SELECT id FROM clicks WHERE affiliate_id = 1 AND click_id = 'abc123'), 100, 'USD'),
  ((SELECT id FROM clicks WHERE affiliate_id = 1 AND click_id = 'def456'), 150, 'USD')
ON CONFLICT (click_id) DO NOTHING;
"

# Affiliate 2 clicks and conversions
psql -U postgres -h localhost -p 5433 -d affiliate_dev -c "
INSERT INTO clicks (affiliate_id, campaign_id, click_id)
VALUES 
  (2, 2, 'xyz999'),
  (2, 2, 'uvw111')
ON CONFLICT (affiliate_id, campaign_id, click_id) DO NOTHING;
"

psql -U postgres -h localhost -p 5433 -d affiliate_dev -c "
INSERT INTO conversions (click_id, amount, currency)
VALUES
  ((SELECT id FROM clicks WHERE affiliate_id = 2 AND click_id = 'xyz999'), 50, 'USD'),
  ((SELECT id FROM clicks WHERE affiliate_id = 2 AND click_id = 'uvw111'), 75, 'USD')
ON CONFLICT (click_id) DO NOTHING;
"

# Affiliate 3 clicks and conversions
psql -U postgres -h localhost -p 5433 -d affiliate_dev -c "
INSERT INTO clicks (affiliate_id, campaign_id, click_id)
VALUES 
  (3, 1, 'lmn123'),
  (3, 1, 'opq456')
ON CONFLICT (affiliate_id, campaign_id, click_id) DO NOTHING;
"

psql -U postgres -h localhost -p 5433 -d affiliate_dev -c "
INSERT INTO conversions (click_id, amount, currency)
VALUES
  ((SELECT id FROM clicks WHERE affiliate_id = 3 AND click_id = 'lmn123'), 120, 'USD'),
  ((SELECT id FROM clicks WHERE affiliate_id = 3 AND click_id = 'opq456'), 90, 'USD')
ON CONFLICT (click_id) DO NOTHING;
"
```
