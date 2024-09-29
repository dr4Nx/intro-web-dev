/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import fs from "fs";
import qr from "qr-image";

inquirer
  .prompt([
    {
    message: "Hello! Welcome to the QR Code Generator. Please enter the URL you would like to convert to a QR code.",
    name: "URL",
    }
  ])
  .then((answers) => {
    const url = answers.URL;
    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
    var qr_png = qr.image(url, { type: "png" });
    qr_png.pipe(fs.createWriteStream('i_love_qr.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      console.error("Something went wrong with the QR Code Generator. Please try again later.");
    }
  });