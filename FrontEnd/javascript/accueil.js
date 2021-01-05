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
