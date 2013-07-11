var fs = require('fs');
var r = require('restler');

var f = fs.readFileSync("index.html");

function onSuccess(data, response) {
	console.log(response.rawEncoded.toString());
}

r.get("http://obscure-gorge-5935.herokuapp.com").on("success", onSuccess);

console.log("Read: " + f);