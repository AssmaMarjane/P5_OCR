//récupérer l'id du produit via parametre Url depuis la page d'accueil
const urlProduct = window.location.search;
const urlParams = new URLSearchParams(urlProduct);
const idProduct = urlParams.get('id');

//récupérer données API et id du/des produit(s) séléctionné(s)
fetch('http://localhost:3000/api/teddies/' + idProduct)
  .then(response => response.json())
  .then(
    product => {
      displayProducts(product);
    }
  );


function displayProducts(product) {
  //afficher en HTML objet récupéré en json 
  let myProduct = document.querySelector("#produitSelection");
  myProduct.innerHTML += `<div class="col-lg-12 col-md-6 mb-4">
                             <div class="card h-100">
                                <a href="#"><img class="card-img-top" src="${product.imageUrl}" alt=""></a>
                                <div class="card-body">
                                  <h4 class="card-title">${product.name}</h4>
                                  <p class="card-text">${product.description}</p>
                                  <p class="card-text">${dividedPrice(product.price)}€</p>
                                </div>
                                <form class="form-inline">
                                  <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Couleurs</label>
                                  <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                  </select>
                                  <button id="boutonPanier" type="button" class="btn btn-secondary btn-lg">Ajouter au panier</button>
                                </form>
                              </div>
                            </div>`;

  //parcourir l'objet couleur 
  for (let color of product.colors) {
    let colorList = document.querySelector("#inlineFormCustomSelectPref");
    //afficher couleur séléctionnée
    colorList.innerHTML += ` <option value="${color}">${color}</option>`;
  }
  //créer tableau pour stocker produit(s) et couleur(s) séléctionné(s) dans le localStorage 
  let tabProduct = [];
  //créer condition pour que si le tableau est plein il se charge dans le localStorage sinon laisser tableau vide
  if (localStorage.getItem('monTableau') !== null) {
    tabProduct = JSON.parse(localStorage.getItem('monTableau'));
  }
  //buttonConfirm(buttonAdd);
  //créer événement au clique sur le bouton "ajouter au panier"
  const boutonAjout = document.querySelector('#boutonPanier');
  boutonAjout.addEventListener('click', e=>{
    buttonConfirm(tabProduct)
  }
  );


}

//fonction évenement sur bouton valider
function buttonConfirm(tab) {
  //récupérer la valeur de loption, au clique "ajouter au panier", pour récuperer la couleur selectionnée
  let optionCouleur = document.getElementById("inlineFormCustomSelectPref");
  let couleurChoisi = optionCouleur.options[optionCouleur.selectedIndex].value;
  //afficher message de confirmaion d'ajout par boite de dialogue 
  alert("Produit ajouté au panier!");
  //stocker dans objet le produit et sa valeur (=couleur selectionnée) 
  let newProduct = {
    produit: idProduct,
    couleur: couleurChoisi
  }
  //si il y a de nouveaux produits ajouter avec push
  tab.push(newProduct);
  //ajoter mon tableau au localStorage
  localStorage.setItem('monTableau', JSON.stringify(tab));
}


