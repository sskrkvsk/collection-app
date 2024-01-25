const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require('./db');

const app = express();
app.use(express.json());
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/getTableNames", (req, res) => {
    db.all("SELECT name FROM sqlite_master WHERE type='table' AND name != 'sqlite_sequence' ORDER BY name", (err, rows) => {
      if (err) {
        console.error("Error retrieving items from the database:", err);
        if (err.code === 'SQLITE_ERROR') {
          res.status(500).json({ error: "Internal Server Error", details: "SQLite Error", message: err.message });
        } else {
          res.status(500).json({ error: "Internal Server Error", details: err.message });
        }
      } else {
        const collections = rows.map(table => {
          return table.name.charAt(0).toUpperCase() + table.name.slice(1);
        });
        const tablesToFilter = ['Anime', 'Books', 'Movies', 'Series'];
        const filteredArray = collections.filter(word => !tablesToFilter.includes(word));
        const finalArray = tablesToFilter.concat(filteredArray);
  
        res.json({ finalArray });
      }
    });});

  app.post("/getTableData/:table", (req, res) => {
    const { status, button } = req.body;
    const { table } = req.params;
    let sort = 'DESC';
    const handleSuccess = (result) => {
      res.json({ tableData: result });
    };
    const handleFailure = (error) => {
      console.error(`Error retrieving data for table ${table}:`, error);
      if (error.code === 'SQLITE_ERROR') {
        res.status(500).json({ error: "Internal Server Error", details: "SQLite Error", message: error.message });
      } else {
        res.status(500).json({ error: "Internal Server Error", details: error.message });
      }
    };
    try {
      let orderByClause = 'id';
      if (button) {
        orderByClause = button === 'date' ? 'date' : 'rating';
        sort = !status ? 'ASC' : 'DESC';
      }
      db.all(`SELECT *, SUBSTR(note, 1, 900) AS note FROM ${table} ORDER BY ${orderByClause} ${sort}`, (err, result) => {
        if (err) {
          handleFailure(err);
        } else {
          handleSuccess(result);
        }
      });
    } catch (error) {
      handleFailure(error);
    }
  });
  
  app.get("/getItemData/:table/:item", (req, res) => {
    const { table, item } = req.params;
    const formattedItem = decodeURIComponent(item).toLowerCase();
  
    const handleSuccess = (result) => {
      res.json({ itemData: result });
    };
    const handleFailure = (error) => {
      console.error(`Error retrieving data for table ${table}:`, error);
      res.status(500).send("Internal Server Error");
    };
    try {
      db.all(`SELECT * FROM ${table} WHERE title = ?`, [formattedItem], (err, result) => {
        if (err) {
          handleFailure(err);
        } else {
          handleSuccess(result);
        }
      });
    } catch (error) {
      handleFailure(error);
    }
  });
  
  app.post("/addNewCollection", (req, res) => {
    try {
      const category = req.body.key;
      const sanitizedCategory = category.replace(/\s+/g, '_');
      const handleSuccess = (result) => {
        res.json({ table: result });
      };
      const handleFailure = (error) => {
        console.error("Error adding table to the database:", error);
        res.status(500).send("Internal Server Error");
      };
      db.run(`CREATE TABLE IF NOT EXISTS ${sanitizedCategory} (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT UNIQUE,
        author TEXT,
        rating INTEGER,
        image TEXT,
        heading TEXT,
        note TEXT,
        date DATE
      )`, (err, result) => {
        if (err) {
          handleFailure(err);
        } else {
          handleSuccess(result);
        }
      });
    } catch (error) {
      console.error("Error adding table to the database:", error);
      res.status(500).send("Internal Server Error");
    }
  });
  
  app.post("/addCustom", (req, res) => {
    try {
      const { image, title, date, rating, table } = req.body.data;
      const lowerTitle = title.toLowerCase();
  
      const handleSuccess = (result) => {
        res.json({ table: result });
      };
      const handleFailure = (error) => {
        console.error("Error adding custom item to the database:", error);
        res.status(500).send("Internal Server Error");
      };
      db.run(`INSERT INTO ${table} (title, image, date, rating) VALUES (?, ?, ?, ?)`, [lowerTitle, image, date, rating], (err, result) => {
        if (err) {
          handleFailure(err);
        } else {
          handleSuccess(result);
        }
      });
    } catch (error) {
      console.error("Error adding custom item to the database:", error);
      res.status(500).send("Internal Server Error");
    }
  });
  
  app.post("/addApiItem", (req, res) => {
    try {
      const { title, author, image } = req.body.dataForDB;
      const { category } = req.body;
      const lowerTitle = title.toLowerCase();
      const handleSuccess = () => {
        res.json({ category, title });
      };
      const handleFailure = (error) => {
        console.error("Error adding API item to the database:", error);
        res.status(500).send("Internal Server Error");
      };
      const currentDate = new Date().toISOString().split('T')[0];
  
      if (category === "Books") {
        db.run(
          `INSERT INTO ${category} (title, author, image, date) VALUES (?, ?, ?, ?)`,
          [lowerTitle, author, image, currentDate],
          (err) => {
            if (err) {
              handleFailure(err);
            } else {
              handleSuccess();
            }
          }
        );
      } else {
        db.run(
          `INSERT INTO ${category} (title, image, date) VALUES (?, ?, ?)`,
          [lowerTitle, image, currentDate],
          (err) => {
            if (err) {
              handleFailure(err);
            } else {
              handleSuccess();
            }
          }
        );
      }
    } catch (error) {
      console.error("Error adding API item to the database:", error);
      res.status(500).send("Internal Server Error");
    }
  });
  
  app.post("/editCategory", (req, res) => {
    try {
      const { oldName, editedName } = req.body;
      const sanitizedCategory = editedName.replace(/\s+/g, '_');
  
      const handleSuccess = () => {
        res.status(200).send("Successfully edited category name.");
      };
      const handleFailure = (error) => {
        console.error("Error editing category in the database:", error);
        res.status(500).send("Internal Server Error");
      };
      db.run(`ALTER TABLE ${oldName} RENAME TO ${sanitizedCategory}`, (err) => {
        if (err) {
          handleFailure(err);
        } else {
          handleSuccess();
        }
      });
    } catch (error) {
      console.error("Error editing category in the database:", error);
      res.status(500).send("Internal Server Error");
    }
  });
  
  app.post("/editNotes", (req, res) => {
    try {
      const { category, title, heading, paragraph, date, rating, image, author } = req.body.editedData;
      const prevTitle = req.body.prevTitle;
  
      const handleSuccess = () => {
        res.status(200).send("Successfully updated data.");
      };
      const handleFailure = (error) => {
        console.error("Error editing category in the database:", error);
        res.status(500).send("Internal Server Error");
      };
  
      if (category === 'Books') {
        db.run(
          `UPDATE ${category} SET heading = ?, note = ?, date = ?, rating = ?, image = ?, author = ?, title = ? WHERE title = ?`,
          [heading, paragraph, date, rating, image, author, title, prevTitle],
          (err) => {
            if (err) {
              handleFailure(err);
            } else {
              handleSuccess();
            }
          }
        );
      } else {
        db.run(`UPDATE ${category} SET heading = ?, note = ?, date = ?, rating = ?, image = ?, title = ? WHERE title = ?`,
          [heading, paragraph, date, rating, image, title, prevTitle], (err) => {
            if (err) {
              handleFailure(err);
            } else {
              handleSuccess();
            }
          });
      }
    } catch (error) {
      console.error("Error editing category in the database:", error);
      res.status(500).send("Internal Server Error");
    }
  });
  
  app.post("/deleteCategory", (req, res) => {
    try {
      const { category } = req.body;
  
      const handleSuccess = () => {
        res.status(200).send("Successfully deleted category.");
      };
  
      const handleFailure = (error) => {
        console.error("Error deleting category from the database:", error);
        res.status(500).send("Internal Server Error");
      };
  
      db.run(`DROP TABLE IF EXISTS ${category}`, (err) => {
        if (err) {
          handleFailure(err);
        } else {
          handleSuccess();
        }
      });
    } catch (error) {
      console.error("Error deleting category from the database:", error);
      res.status(500).send("Internal Server Error");
    }
  });
  
  app.post("/deleteItem", (req, res) => {
    try {
      const { category, itemId } = req.body;
  
      const handleSuccess = () => {
        res.status(200).send("Successfully deleted item.");
      };
  
      const handleFailure = (error) => {
        console.error("Error deleting item from the database:", error);
        res.status(500).send("Internal Server Error");
      };
  
      db.run(`DELETE FROM ${category} WHERE id = ?`, [itemId], (err) => {
        if (err) {
          handleFailure(err);
        } else {
          handleSuccess();
        }
      });
    } catch (error) {
      console.error("Error deleting item from the database:", error);
      res.status(500).send("Internal Server Error");
    }
  });
  

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
