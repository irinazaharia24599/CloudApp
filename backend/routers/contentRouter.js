const connection = require("../database.js");
const mysql = require("mysql");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  connection.query("SELECT * FROM messages", (err, results) => {
    if (err) {
      return res.send(err);
    }

    return res.json({
      messages: results,
    });
  });
});

router.post("/messages", (req, res) => {
    const {
      owner,
      textContent
    } = req.body;
  
    if (!owner || !textContent ) {
      return res.status(400).send("Bad request. Missing parameters.");
    }
  
    const queryString = `INSERT INTO messages (owner, textContent) VALUES (${mysql.escape(owner)},  ${mysql.escape(textContent)})`;
  
    connection.query(queryString, (err, results) => {
      if (err) {
        return res.send(err);
      }
  
      return res.json({
        data: results,
      });
    });
  });


  router.get("/:id", (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).send("Bad request. Missing parameters.");
    }
    const queryString = `SELECT * FROM messages WHERE entryID = ${mysql.escape(id)}`;
    connection.query(queryString, (err, results) => {
        if (err) {
            return res.send(err);
        }
        if (results.length === 0) {
            return res.status(404).send("Message not found.");
        }
        return res.json({
            messages: results,
        });
    }
    );
}
);

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).send("Bad request. Missing parametres.");
    }
    const queryString = `DELETE FROM messages WHERE entryID = ${mysql.escape(id)}`;
    connection.query(queryString, (err, results) => {
        if (err) {
            return res.send(err);
        }
        if (results.length === 0) {
            return res.status(404).send("Message not found.");
        }
        return res.json({
            results,
        });
    }
    );
}
);

router.put("/:id", (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).send("Bad request. Missing parameters.");
    }
    const { owner, textContent } = req.body;
    if (!owner || !textContent) {
        return res.status(400).send("Bad request. Missing parameters.");
    }
    const queryString = `UPDATE messages SET owner = ${mysql.escape(owner)}, messageContent = ${mysql.escape(messageContent)} WHERE entryID = ${mysql.escape(id)}`;
    connection.query(queryString, (err, results) => {
        if (err) {
            return res.send(err);
        }
        if (results.length === 0) {
            return res.status(404).send("Message not found.");
        }
        return res.json({
            results,
        });
    }
    );
}
);


module.exports = router;