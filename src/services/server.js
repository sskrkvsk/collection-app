const express = require("express");
const bodyParser = require("body-parser");
const pg = require("pg");
const cors = require("cors");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// DB Connection
const db = new pg.Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
});

// No need for explicit connection here

// GET
app.get("/getTableNames", async (req, res) => {
  try {
      const result = await db.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_name != 'user'");
      const collections = result.rows;
      const tableNames = collections.map(table => {
        return table.table_name
      })
      
      res.json({ tableNames });
    } catch (error) {
      console.error("Error retrieving items from the database:", error);
      res.status(500).send("Internal Server Error");
    }
  });



// ADD
app.post("/add", async (req, res) => {
//   try {
//     const item = req.body.newItem;
//     const result = await db.query("INSERT INTO items (title) VALUES ($1) RETURNING *", [item]);
//     // console.log(result.rows);

//     res.redirect("/");
//   } catch (error) {
//     console.error("Error adding item to the database:", error);
//     res.status(500).send("Internal Server Error");
//   }
});

//EDIT
app.post("/edit", async (req, res) => {
//   try {
//     const itemId = req.body.updatedItemId;
//     const newValue = req.body.updatedItemTitle;

//     const result = await db.query("UPDATE items SET title = $1 WHERE id = $2 RETURNING *", [newValue, itemId]);
//     // console.log(result.rows);
//     res.redirect("/");
//   } catch (error) {
//     console.error("Error updating item in the database:", error);
//     res.status(500).send("Internal Server Error");
//   }
});

//DELETE
app.post("/delete", async (req, res) => {
//   try {
//     const deleteId = req.body.deleteItemId;

//     const result = await db.query("DELETE FROM items WHERE id = $1 RETURNING *", [deleteId]);
//     // console.log(result.rows);
//     res.redirect("/");
//   } catch (error) {
//     console.error("Error deleting item from the database:", error);
//     res.status(500).send("Internal Server Error");
//   }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});