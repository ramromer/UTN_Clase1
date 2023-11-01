const fs = require('fs')
const express = require("express");
const app = express();
const logger = require("./logger.js");
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/form.html");
});
app.post("/registro", (req, res) => {
    console.log(req.body);
    let salida = req.body + " /n"
    fs.writeFileSync('log.txt',salida,(err)=>{
        if (err) throw err;
    });

  res.sendFile(__dirname + "/registro.html");
});

app.listen(3000, function () {
  console.log("Corriendo en localhost:3000");
});
