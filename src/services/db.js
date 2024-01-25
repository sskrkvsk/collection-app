/* eslint-disable no-multi-str */
var sqlite3 = require('sqlite3');
var mkdirp = require('mkdirp');

mkdirp.sync('var/db');

var db = new sqlite3.Database('var/db/collection.db');
db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS anime ( \
      id INTEGER PRIMARY KEY AUTOINCREMENT, \
      title TEXT UNIQUE, \
      rating INTEGER, \
      image TEXT, \
      heading TEXT, \
      note TEXT, \
      date DATE \
    )");
    
    db.run("CREATE TABLE IF NOT EXISTS books ( \
      id INTEGER PRIMARY KEY AUTOINCREMENT, \
      title TEXT UNIQUE, \
      author TEXT, \
      rating INTEGER, \
      image TEXT, \
      heading TEXT, \
      note TEXT, \
      date DATE \
    )");
    
    db.run("CREATE TABLE IF NOT EXISTS movies ( \
      id INTEGER PRIMARY KEY AUTOINCREMENT, \
      title TEXT UNIQUE, \
      rating INTEGER, \
      image TEXT, \
      heading TEXT, \
      note TEXT, \
      date DATE \
    )");

    db.run("CREATE TABLE IF NOT EXISTS series ( \
      id INTEGER PRIMARY KEY AUTOINCREMENT, \
      title TEXT UNIQUE, \
      rating INTEGER, \
      image TEXT, \
      heading TEXT, \
      note TEXT, \
      date DATE \
    )");
  });

  module.exports = db;