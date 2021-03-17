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

                                  <form class="form-inline">
                                    <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Couleurs</label>
                                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                    </select>
                                    <button id="boutonPanier" type="button" class="btn btn-primary">Ajouter au panier</button>
                                  </form>

                                </div>

                              </div>`;
      // boucle permettant d'afficher les différentes couleurs dans le tableau product
      for (let color of product.colors) {
        let colorList = document.querySelector("#inlineFormCustomSelectPref");
        colorList.innerHTML += ` <option value="${color}">${color}</option>`;
      }
      let tabProduct = [];
      if(localStorage.getItem('monTableau') !==null){tabProduct = JSON.parse(localStorage.getItem('monTableau'));} else {
        tabProduct = [];
      }
      const boutonAjout = document.querySelector('#boutonPanier');
      boutonAjout.addEventListener('click', function () { 
        //recuperer la valeur de loption au click "ajouter au panier" pour recuperer la couleur selectionnée
        let optionCouleur = document.getElementById("inlineFormCustomSelectPref");
        let couleurChoisi = optionCouleur.options[optionCouleur.selectedIndex].value;
        boutonAjout.innerHTML = "Produit ajouté au panier!";
        //stocker tous les produits en localStorage le produit et sa valeur couleur selectionné + ajout panier
        let newProduct = {
          produit :idProduct, 
          couleur : couleurChoisi
        }
        tabProduct.push(newProduct);
        localStorage.setItem('monTableau', JSON.stringify(tabProduct));
        console.log(localStorage);
        //ajouter plusieurs produits-> ajouter les selections dans tableau (si tab existant à compléter)

      });
      //return optionCouleur.options[optionCouleur.selectedIndex].value;
    }
  );

//let listProduct = localStorage.get