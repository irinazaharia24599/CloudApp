// const express = require('express')
// const cors = require('cors')
// const connection = require('./database.js')
// const app = express();
// app.use(cors())

// const port = process.env.PORT || 8080;

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}!`)
// });

// const express = require("express");
// const connection = require("./database.js");
// const bodyParser = require("body-parser");

// const app = express();
// const port = process.env.PORT || 8080;

// app.use(bodyParser.json()); 
// app.use(bodyParser.urlencoded({ extended: true }));

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}!`);
// });

// app.get("/messages", (req, res) => {
//   connection.query("SELECT * FROM messages", (err, results) => {
//     if (err) {
//       return res.send(err);
//     }

//     return res.json({
//       data: results,
//     });
//   });
// });

const express = require("express");
const contentRouter = require("./routers/contentRouter.js"); 
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();

app.use(cors())
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', contentRouter); 

const port = 8080;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});