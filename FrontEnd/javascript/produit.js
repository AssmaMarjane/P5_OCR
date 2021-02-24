
//a tester pour recuperer requete page produit
//http://localhost:3000/api/teddies/5be9c8541c9d440000665243 requete Url avec -id récupéré



//recupérer l'id du produit via parametre Url cf cours
let ourson = window.location.search;
console.log(ourson);
/*function $_GET(param) {
	let produit = {};
	window.location.href. 
		}
	);*/
//recupérer info produit pr page via API fetch voir fetch
/*fetch ('http://localhost:3000/api/teddies/?id')
.then (response => response.json ())
.then (
  products => 
  {
    //données recup en json passer en HTML
    for ( let product of products) {
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
      console.log(myProduct);
    }
  }
);
*/
//puis option ajout produit panier "localstorage"
/*let ourson = { `product _id` };
localStorage.setItem('ourson', JSON.stringify(ourson));
*/
//let listProduct = localStorage.get

