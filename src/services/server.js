const express = require("express");
const bodyParser = require("body-parser");
const pg = require("pg");
const cors = require("cors");
require('dotenv').config();

const app = express();
app.use(express.json());
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


// GET Table Names
app.get("/getTableNames", async (req, res) => {
  try {
      const result = await db.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_name != 'user' ORDER BY table_name");
      const collections = result.rows;
      
      const tableNames = collections.map(table => {
        return table.table_name.charAt(0).toUpperCase() + table.table_name.slice(1);
      })
      
      res.json({ tableNames });
    } catch (error) {
      console.error("Error retrieving items from the database:", error);
      res.status(500).send("Internal Server Error");
    }
  });

  // Get Table Data from exact table
  app.get("/getTableData/:table", async (req, res) => {
    const { table } = req.params;
    try {
      const result = await db.query(`SELECT *, LEFT(note, 900) AS note FROM ${table} ORDER BY id DESC`);
      const tableData = result.rows;
      // console.log(tableData);
      res.json({ tableData });
    } catch (error) {
      console.error(`Error retrieving data for table ${table}:`, error);
      res.status(500).send("Internal Server Error");
    }
  });

  // Get exact item data from exact table
   app.get("/getItemData/:table/:item", async (req, res) => {
    const { table, item } = req.params;
    const formattedItem = item.replace(/-/g, ' ').toLowerCase();
        // console.log(lowercaseTable + " + " + formattedItem);
    
    try {
      const result = await db.query(`SELECT * FROM ${table} WHERE title = '${formattedItem}'`);
      const itemData = result.rows;
      // console.log(data);
      res.json({ itemData });
    } catch (error) {
      console.error(`Error retrieving data for table ${table}:`, error);
      res.status(500).send("Internal Server Error");
    }
  });
  

// ADD 
app.post("/addNewCollection", async (req, res) => {
  try {
    const category = req.body.key;
    const sanitizedCategory = category.replace(/\s+/g, '_');
    const result = await db.query(`CREATE TABLE ${sanitizedCategory} (
	id SERIAL PRIMARY KEY,
	title TEXT,
	author TEXT,
	rating INT,
	image TEXT,
	heading TEXT,
	note TEXT,
	date TEXT
)`);
  
const table = result.rows;
res.json({ table });

  } catch (error) {
    console.error("Error adding table to the database:", error);
    res.status(500).send("Internal Server Error");
  }
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