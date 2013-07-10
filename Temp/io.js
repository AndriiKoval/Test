var fs = require('fs');

var f = fs.readFileSync("index.html");

console.log("Read: " + f);