const fs = require('fs')
const express = require("express");
const app = express();
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/form.html");
});

app.post("/registro", (req, res) => {
    console.log(req.body);
    let salida = req.body
    console.log(salida)
    const jsonData = JSON.stringify(salida, null, 2); // Convert the object to a formatted JSON string
    fs.appendFileSync('log.txt', jsonData +'\n');
  res.sendFile(__dirname + "/registro.html");
});

app.listen(3000, function () {
  console.log("Corriendo en localhost:3000");
});
