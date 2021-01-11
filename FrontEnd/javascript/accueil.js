console.log("ceci est un test");

/*let homeProduit = document.getElementById("containerProduct");
console.log(homeProduit);*/
let homeProduit = document.querySelector("#containerProduct");
homeProduit.innerHTML = ` <div class="col-lg-4 col-md-6 mb-4">
                            <div class="card h-100">
                              <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
                              <div class="card-body">
                                <h4 class="card-title">
                                  <a href="#">Teddie </a>
                                </h4>
                                <p class="card-text">description</p>
                              </div>
                            </div>
                          </div>`;


fetch("http://localhost:3000/api/teddies")
.then(response => response.json())
.then(response => alert(JSON.stringify(response)))
.catch(error => alert("Erreur : " + error));

fetch ('http://localhost:3000/api/teddies')
.then (response => response.json ())
.then (json => console.log (json));

//*méthode fetch2 test

const myImage = document.querySelector('img');
fetch('teddie.jpg')
.then(function(response) {
  return response.blob();
})
.then(function(myBlob) {
  const objectURL = URL.createObjectURL(myBlob);
  myImage.src = objectURL;
});


/*
var myHeaders = new Headers();

var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };

fetch('flowers.jpg',myInit)
.then(function(response) {
  return response.blob();
})
.then(function(myBlob) {
  var objectURL = URL.createObjectURL(myBlob);
  myImage.src = objectURL;
});

*/












/*var request = new XMLHttpRequest();
request.open("GET", "http://localhost:3000/api/teddies ");
request.send();*/

//première requête

//https://github.com/OpenClassrooms-Student-Center/JWDP5.git

//méthode fetch  http://localhost:3000/api/teddies

/* fetch("http://localhost:3000/api/teddies")
.then(response => response.json())
.then(response => alert(JSON.stringify(response)))
.catch(error => alert("Erreur : " + error));*/

/* fetch ('http://localhost:3000/api/teddies')
.then (response => response.json ())
.then (json => console.log (json));*/

/*méthode fetch2
const myImage = document.querySelector('img');
fetch('flowers.jpg')
.then(function(response) {
  return response.blob();
})
.then(function(myBlob) {
  const objectURL = URL.createObjectURL(myBlob);
  myImage.src = objectURL;
});
var myHeaders = new Headers();

var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };

fetch('flowers.jpg',myInit)
.then(function(response) {
  return response.blob();
})
.then(function(myBlob) {
  var objectURL = URL.createObjectURL(myBlob);
  myImage.src = objectURL;
});

*/

/*méthode axios
install Axios.
$ nœud -v
v11.5.0
utilis la version 11.5 de Node.js.
$ npm init -y
lance une nouvelle application Node.js.
$ npm i axios
install Axios avec la npm i axioscommande.*/

/*requéte axios à api githubgithub.js
const axios = require ('axios');
fonction asynchrone getNumberOfFollowers () {

  laissez res = attendre axios.get ('https://api.github.com/users/janbodnar');

  laissez nOfFollowers = res.data.followers;
  let location = res.data.location;

  console.log (`Nombre d'abonnés: $ {nOfFollowers}`)
  console.log (`Emplacement: $ {location}`)
}
getNumberOfFollowers ();*/

/*requete axios ddl img
get_image.js
const axios = require ('axios');
const fs = require ('fs');

var config = {
    responseType: 'stream'
};
fonction asynchrone getImage () {

    let resp = attendre axios.get (url, config);
    resp.data.pipe (fs.createWriteStream ('image.jpg'));
}
getImage ();*/
