import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';


const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3000;
const date = new Date();
const day = date.getDay();

app.get("/", (req, res) => {
  if (day === 6 || day === 0) {
    res.render(__dirname + "/views/index.ejs", {
      time: "Weekend",
      action: "Take a break"
    });
  } else {
    res.render(__dirname + "/views/index.ejs", {
      time: "Weekday",
      action: "Work hard"
    });
  }
  
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

