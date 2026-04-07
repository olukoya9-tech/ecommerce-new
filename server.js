const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const app = express();

app.use(express.json());
app.use(cors());

// This creates a physical file named store.db in your folder
const db = new sqlite3.Database('./store.db');

db.serialize(() => {
  // Create the products table
  db.run(`CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    category TEXT,
    price REAL
  )`);

  // Fill it with the original 5 categories + 1 extra
  db.get("SELECT count(*) as count FROM products", (err, row) => {
    if (row.count === 0) {
      const stmt = db.prepare("INSERT INTO products (name, category, price) VALUES (?, ?, ?)");
      stmt.run("Smart Watch", "Electronics", 250);
      stmt.run("Leather Wallet", "Accessories", 50);
      stmt.run("Coffee Maker", "Home", 80);
      stmt.run("Denim Jacket", "Fashion", 120);
      stmt.run("Mini Drone", "Gadgets", 300);
      stmt.finalize();
      console.log("Database seeded with products!");
    }
  });
});

app.get('/api/products', (req, res) => {
  db.all("SELECT * FROM products", [], (err, rows) => {
    res.json(rows);
  });
});

app.listen(3000, () => console.log('Backend live at http://localhost:3000'));