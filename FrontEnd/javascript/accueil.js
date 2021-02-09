//console.log("ceci est un test");

/*let homeProduit = document.getElementById("containerProduct");
console.log(homeProduit);*/

/*let nomProd =  document.querySelector("#containerProduct");
nomProd.innerHTML = "petit ourson";
console.log (nomProd);*/
/*let nomOurs = document.querySelector("#containerProduct h4 > a");
nomOurs.innerHTML = "petite pelluche";
console.log(nomOurs)*/
                         
fetch ('http://localhost:3000/api/teddies')
.then (response => response.json ())
.then (
  products => 
  {
    console.log (products);
    let premierOurson = products[0];
    let deuxiemeOurson = products[1];
    let thirdOurson = products[2];
    let quatreOurson = products[3];
    let cinqOurson = products[4];
    //console.log(premierOurson);
    //console.log(premierOurson.name);
    //console.log(cinqOurson.name);
    for ( let product of products) {
      console.log(product.name);
      /*let produitAccueil = document.getElementsByClassName('card-title');
      produitAccueil.innerHTML = product.name;
      //produitAccueil.innerHTML += product.name;
      console.log(produitAccueil);*/
      let homeProduit = document.querySelector("#containerProduct");
      homeProduit.innerHTML += ` <div class="col-lg-4 col-md-6 mb-4">
                            <div class="card h-100">
                              <a href="#"><img class="card-img-top" src="" alt=""></a>
                              <div class="card-body">
                                <h4 class="card-title">
                                  <a href="#"> `+product.name+ `</a>
                                </h4>
                                <p class="card-text"></p>
                              </div>
                            </div>
                          </div>`;
      console.log(homeProduit);
      /*let productHome = document.querySelector("#containerProduct h4 > a");
      productHome.innerHTML += product.name ;*/
      //productHome.innerHTML += '<li>'+ product.name+ '<li>';
      //console.log(productHome);
    }
  }
);

/*exercice entrainement jour de la semaine

let dayTab = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'] ;
for ( let day of dayTab) {
  console.log(day);
};
for (let i = 0; i < dayTab.length; i++) {
console.log(dayTab[i]);
};*/

//exercice entrainement saisons

/*let saisonOne = {
  name:'Hiver',
  nameOfMonth:['Décembre','Janvier','Février']
};
//console.log(saisonOne);
let saisonTwo = {
  name:'Printemps',
  nameOfMonth:['Mars','Avril','Mai']
};
//console.log(saisonTwo);
let saisonThree = {
  name:'Eté',
  nameOfMonth:['Juin','Juillet','Aout']
};
//console.log(saisonThree);
let saisonFor = {
  name:'Automne',
  nameOfMonth:['Septembre','Octobre','Novembre']
};
//console.log(saisonFor);
let tabSaisons = [saisonOne, saisonTwo, saisonThree, saisonFor];
for(let saison of tabSaisons) {
  console.log(saison.name);
  for( let month of saison.nameOfMonth){
    console.log(month);
  }
}*/

//autre essai 2
/*let saisons = [
  {
    name:'Hiver',
    month:['Décembre','Janvier','Février'],
  },
  {
    name:'Printemps',
    month:['Mars','Avril','Mai'],
  
  },
  {
    name:'Eté',
    month:['Juin','Juillet','Aout'],
  },
  {
    name:'Automne',
    month:['Septembre','Octobre','Novembre'],
  },
];
console.log(saisons);
for (let saison of saisons){
  console.log(saison.name + saison.month);
};
for ( let i=0; i<saisons.length; i++){
  console.log(saisons[i]);
};
for ( saison of saisons){
  console.log(saison.name + saison.nameOfMonth);
}
;

/*let saisonName = saisons.name;
console.log(saisonName);
let saisonMonth = saisons.month;
console.log(saisonMonth);*/

//autre essai3
































    /*let nameProduct = ;
    console.log(nameProduct);

    for (let nameProduct of listeProduits) {
      console.log("Pelluche " + nameProduct);*/

    /*for (let i in listeProduits) {
      console.log("Ourson disponible" + listeProduits[i]);
    }
    */
    /*console.log (json);
    let productTab = json;
    for (let i=0; i < productTab.length; i++){
      console.log ("Produits ourson");
    }*/


/*let produitOurson = ['Teddie1', 'Teddie2','Teddie3','Teddie4','Teddie5'];
console.log(produitOurson);*/

/*let produitOurson = 5;
while(produitOurson<5) {
  console.log("+produitOurson+");
}*/

/* test 
let ourson = 5;
do{
  console.log("Teddie "+ourson+"");
} while(ourson<5); */


/* premier test Avec la boucle for..of et les templates litterals
let nameProduct = ['http://localhost:3000/api/teddies'];
let container = document.querySelector('#containerProduct');*/

/*for(const nameProduct of container){
	container.innerHTML += `<li>${nameProduct}</li>`
};*/
/*for (let i = '0'; i < nameProduct.length; i++);
console.log("nameProduct[i]");
container.innerHTML += '<li>'+"nameProduct"[i]+'</li>';*/

/*let imageProduct = ['http://localhost:3000/images'];
let container = document.querySelector('#containerProduct');*/
/*for(const nameProduct of container){
	container.innerHTML += `<li>${nameProduct}</li>`
};*/
/*for (let i = '0'; i < imageProduct.length; i++);
console.log("imageProduct[i]");
container.innerHTML += '<li>'+"imageProduct"[i]+'</li>';*/


/*deuxieme test avec fetch
const myImage = document.querySelector("img");
fetch('http://localhost:3000/images/teddy_1.jpg')
.then(function(response) {
  return response.blob();
})
.then(function(myBlob) {
  const objectURL = URL.createObjectURL(myBlob);
  myImage.src = objectURL;
});
console.log("myImage");*/

/*// Déclaration de mon tableau de la semaine
let tabJours = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
let container = document.querySelector('#container');

//Boucle sur les jours de la semaine
// i : notre compteur dans la boucle, initialisé à 0 car un tableau commence à l'index 0
// On boucle avec i égal à 0 au départ, on incrémente de 1 à chaque tour, TANT QUE i est inférieure à la longueur du tableau (ici 7)
for (let i = 0; i < tabJours.length; i++) {
  //console.log(tabJours[i])
  container.innerHTML += '<li>'+tabJours[i]+'</li>';
	// Ce qui équivaut à 
	// container.innerHTML = container.innerHTML + '<li>'+tabJours[i]+'</li>';
	// innerHTML peut à la fois récupérer le code HTML dans un container mais peut aussi remplacer le code

}


// Autre boucle possible
let tabMois = ['Janvier', 'Février', 'Mars', 'Avril', '...', '..', '.'];
let containerMois = document.querySelector('#containerMois');

tabMois.forEach ( 
	function (mois){
		containerMois.innerHTML += '<li>'+mois+'</li>';
	}
)

// Encore mieux ++
// Avec la boucle for..of et les templates litterals
let tabSaisons = ['Hiver', 'Printemps', 'Été', 'Automne'];
let containerSaisons = document.querySelector('#containerSaisons');

for(const saison of tabSaisons){
	containerSaisons.innerHTML += `<li>${saison}</li>`
}*/

/*fetch("http://localhost:3000/api/teddies")
.then(response => response.json())
.then(response => alert(JSON.stringify(response)))
.catch(error => alert("Erreur : " + error));*/



/*méthode fetch2 test

const myImage = document.querySelector('img');
fetch('http://localhost:3000/api/teddies')
.then(function(response) {
  return response.blob();
})
.then(function(myBlob) {
  const objectURL = URL.createObjectURL(myBlob);
  myImage.src = objectURL;
});
console.log(myImage);
*/




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
