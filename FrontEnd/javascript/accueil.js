console.log("ceci est un test");

var request = new XMLHttpRequest();
request.open("GET", "http://localhost:3000/api/teddies ");
request.send();