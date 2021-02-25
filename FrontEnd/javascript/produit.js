
//a tester pour recuperer requete page produit
//http://localhost:3000/api/teddies/5be9c8541c9d440000665243 requete Url avec -id récupéré



//recupérer l'id du produit via parametre Url cf cours
const urlProduct = window.location.search;
const urlParams = new URLSearchParams(urlProduct);
const idProduct = urlParams.get('id');

//recupérer info produit pr page via API fetch voir fetch

fetch('http://localhost:3000/api/teddies/' + idProduct)
  .then(response => response.json())
  .then(
    product => {
      //données recup en json passer en HTML

      let myProduct = document.querySelector("#produitSelection");
      myProduct.innerHTML += `<div class="col-lg-12 col-md-6 mb-4">
                               <div class="card h-100">
                                  <a href="#"><img class="card-img-top" src="${product.imageUrl}" alt=""></a>
                                  <div class="card-body">
                                    <h4 class="card-title"> ${product.name}</h4>
                                    <p class="card-text">${product.description}</p>
                                    <p class="card-text">${product.price}</p>
                                  </div>
                                </div>
                             </div>`;
      let colorOurson = product.colors ;
      for (let colors of colorOurson) {
        console.log(colors);
      }
    }

  );
/*
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Choix Couleur
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Couleur</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
*/

//puis option ajout produit panier "localstorage"

/*let ourson = { `product _id` };
localStorage.setItem('ourson', JSON.stringify(ourson));
*/
//let listProduct = localStorage.get

