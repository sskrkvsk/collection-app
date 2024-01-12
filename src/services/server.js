const express = require("express");
const bodyParser = require("body-parser");
const pg = require("pg");
const cors = require("cors");
require('dotenv').config();

const app = express();
app.use(express.json());
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const db = new pg.Pool({
  user: process.env.POSTGRES_USER || 'default',
  host: process.env.POSTGRES_HOST || 'ep-quiet-frog-84894977-pooler.us-east-1.postgres.vercel-storage.com',
  database: process.env.POSTGRES_DATABASE || 'verceldb',
  password: process.env.POSTGRES_PASSWORD || 'OzBWbY39eNpr',
  port: 3001,
});

app.get("/getTableNames", async (req, res) => {
  try {
      const result = await db.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_name != 'user' ORDER BY table_name");
      const collections = result.rows;
      const tableNames = collections.map(table => {
        return table.table_name.charAt(0).toUpperCase() + table.table_name.slice(1);
      });
      const tablesToFilter = ['Anime', 'Books', 'Movies', 'Series'];
      const filteredArray = tableNames.filter(word => !tablesToFilter.includes(word));
      const finalArray = tablesToFilter.concat(filteredArray);
      console.log('Table Names:', finalArray);
      res.setHeader('Cache-Control', 'no-store');
      res.json({ finalArray });
    } catch (error) {
      console.error("Error retrieving items from the database:", error);
      res.status(500).send("Internal Server Error");
    }
  });

  app.post("/getTableData/:table", async (req, res) => {
    const {status, button} = req.body
    const { table } = req.params;
    let sort = 'DESC'
    try {
      if (button) {
        if (button === 'date'){
          !status ? sort = 'ASC' : sort = 'DESC'
          const result = await db.query(`SELECT *, LEFT(note, 900) AS note FROM ${table} ORDER BY id ${sort}`);
          const tableData = result.rows;
          res.json({ tableData });
        } else if (button === 'rating'){
          !status ? sort = 'ASC' : sort = 'DESC'
          const result = await db.query(`SELECT *, LEFT(note, 900) AS note FROM ${table} ORDER BY rating ${sort}`);
          const tableData = result.rows;
          res.json({ tableData });
        }
      } else {
        const result = await db.query(`SELECT *, LEFT(note, 900) AS note FROM ${table} ORDER BY id ${sort}`);
        const tableData = result.rows;
        res.json({ tableData });
      }
    } catch (error) {
      console.error(`Error retrieving data for table ${table}:`, error);
      res.status(500).send("Internal Server Error");
    }
  });

   app.get("/getItemData/:table/:item", async (req, res) => {
    const { table, item } = req.params;
    const formattedItem = decodeURIComponent(item).toLowerCase();
    try {
      const result = await db.query(`SELECT * FROM ${table} WHERE title = '${formattedItem}'`);
      const itemData = result.rows;
      res.json({ itemData });
    } catch (error) {
      console.error(`Error retrieving data for table ${table}:`, error);
      res.status(500).send("Internal Server Error");
    }
  });
  
app.post("/addNewCollection", async (req, res) => {
  try {
    const category = req.body.key;
    const sanitizedCategory = category.replace(/\s+/g, '_');
    const result = await db.query(`CREATE TABLE ${sanitizedCategory} (
	id SERIAL PRIMARY KEY,
	title TEXT UNIQUE,
	author TEXT,
	rating INT,
	image TEXT,
	heading TEXT,
	note TEXT,
	date DATE
)`);
const table = result.rows;
res.json({ table });
  } catch (error) {
    console.error("Error adding table to the database:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/addCustom", async (req, res) => {
  try {
    const {image, title, date, rating, table} = req.body.data;
    const lowerTittle = title.toLowerCase();
    await db.query(`INSERT INTO ${table} (title, image, date, rating) VALUES ($1, $2, $3, $4)`, [lowerTittle, image, date, rating]);
  } catch (error) {
    console.error("Error editing category in the database:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/addApiItem", async (req, res) => {
  try {
    const {title, author, image} = req.body.dataForDB;
    const {category} = req.body;
    const lowerTittle = title.toLowerCase(); 
    if (category === "Books") {
      await db.query(`INSERT INTO ${category} (title, author, image) VALUES ($1, $2, $3)`, [lowerTittle, author, image]);
    } else {
      await db.query(`INSERT INTO ${category} (title, image) VALUES ($1, $2)`, [lowerTittle, image]);
    }
  } catch (error) {
    console.error("Error editing category in the database:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/editCategory", async (req, res) => {
  try {
    const {oldName, editedName} = req.body;
    const sanitizedCategory = editedName.replace(/\s+/g, '_');
    await db.query(`ALTER TABLE ${oldName} RENAME TO ${sanitizedCategory}`);
  } catch (error) {
    console.error("Error editing category in the database:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/editNotes", async (req, res) => {
  try {
    const { category, title, heading, paragraph, date, rating, image, author } = req.body.editedData;
    const prevTitle = req.body.prevTitle;
    if (category === 'Books') {
      await db.query(
        `UPDATE ${category} SET heading = $1, note = $2, date = $3::date, rating = $4, image = $5, author = $6, title = $7 WHERE title = $8`,
        [heading, paragraph, date, rating, image, author, title, prevTitle]);
    } else {
      await db.query(`UPDATE ${category} SET heading = $1, note = $2, date = $3::date, rating = $4, image = $5, title = $6 WHERE title = $7`,
      [heading, paragraph, date, rating, image, title, prevTitle]);
    }
    res.status(200).send("Successfully updated data.");
  } catch (error) {
    console.error("Error editing category in the database:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/deleteCategory", async (req, res) => {
  try {
    const {category} = req.body;
    await db.query(`DROP TABLE ${category}`);
  } catch (error) {
    console.error("Error deleting category from the database:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/deleteItem", async (req, res) => {
  try {
    const {category, itemId} = req.body;
    await db.query(`DELETE FROM ${category} WHERE id = $1`, [itemId]);
  } catch (error) {
    console.error("Error deleting category from the database:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});