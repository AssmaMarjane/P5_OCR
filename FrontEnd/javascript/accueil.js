console.log("ceci est un test");

var request = new XMLHttpRequest();
request.open("GET", "http://localhost:3000/api/teddies ");
request.send();
//première requête

//https://github.com/OpenClassrooms-Student-Center/JWDP5.git

//méthode fetch
/* fetch("mon url")
.then(response => response.json())
.then(response => alert(JSON.stringify(response)))
.catch(error => alert("Erreur : " + error));*/