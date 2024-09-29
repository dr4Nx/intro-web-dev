import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/submit", (req, res) => {
  res.send(`<h1>Your Band Name Is:</h1><h2> ${req.body["street"]}${req.body["pet"]}</h2>`);
}); 

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


// alternatively, create a middleman function to handle the form submission

// import express from "express";
// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import bodyParser from "body-parser";
//
// const app = express();
// const port = 3000;
// const __dirname = dirname(fileURLToPath(import.meta.url));
//
// app.use(bodyParser.urlencoded({ extended: true }));
//
// function bandName(req, res, next) {
//   res.send(`<h1>Your Band Name Is:</h1><h2> ${req.body["street"]}${req.body["pet"]}</h2>`);
// });
//
// app.post("/submit", bandName);
//
// app.get("/", (req, res) => {