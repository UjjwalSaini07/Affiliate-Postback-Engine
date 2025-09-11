const fs = require('fs');
const path = require('path');
const { pool } = require('../db/db');

async function runSQL(file) {
  const sql = fs.readFileSync(path.join(__dirname, file)).toString();
  return pool.query(sql);
}

(async () => {
  try {
    await runSQL('schema.sql');
    console.log('✅ Schema created');
    await runSQL('seed.sql');
    console.log('✅ Seed data inserted');
  } catch (err) {
    console.error('❌ Error running SQL:', err);
  } finally {
    pool.end();
  }
})();
