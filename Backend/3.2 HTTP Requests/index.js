import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/about", (req, res) => {
  res.send("WOw, this is the about page");
});

app.get("/contact", (req, res) => {
  res.send("Contact me at: ");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});