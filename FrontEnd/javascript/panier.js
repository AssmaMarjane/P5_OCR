// récuperer depuis le localStorage le tableau contenant l'id et les couleurs des produits séléctionnés
let tabPanier = localStorage.getItem('monTableau');
// créer totalProduits à zero pour ensuite obtenir le total des produits dynamiquement dans la boucle
let totalProduits = 0;
//créer  tableau product pour contenir l'id des produits et object contact pour contenir info form
let products = [];
let contact = {};
if (tabPanier != null) {
  //boucle pour parcourir tableau tabPanier
  for (let produits of JSON.parse(tabPanier)) {
    let idOfProduct = produits.produit;
    let colorOfProduct = produits.couleur;
    //récupérer données API et id_product
    fetch('http://localhost:3000/api/teddies/' + idOfProduct)
      .then(response => response.json())
      .then(
        product => {
          //données récupérer en json passer en HTML
          let myProduct = document.querySelector("#listPanier");
          myProduct.innerHTML += `<!--Section: Block Content-->
                              <section>
                              
                                <!--Grid row-->
                                <div class="row">
                              
                                  <!--Grid column-->
                                  <div class="col-lg-8">
                              
                                    <!-- Card -->
                                    <div class="mb-3">
                                      <div class="pt-4 wish-list">
                                        <div class="row mb-4">
                                          <div class="col-md-5 col-lg-3 col-xl-3">
                                            <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                                              <img class="img-fluid w-100"
                                                src="${product.imageUrl}" alt="Sample">
                                            </div>
                                          </div>
                                          <div class="col-md-7 col-lg-9 col-xl-9">
                                            <div>
                                              <div class="d-flex justify-content-between">
                                                <div>
                                                  <h5>${product.name}</h5>
                                                  <p class="mb-2 text-muted text-uppercase small">Color: ${colorOfProduct} </p>
                                                  <p class="mb-3 text-muted text-uppercase small">Price: ${product.price}$</p>
                                                </div>
                                                <div>
                                              </div>
                                              <div class="d-flex justify-content-between align-items-center">
                                                <div>
                                                  <a href="#!" type="button" class="card-link-secondary small text-uppercase mr-3"><i
                                                      class="fas fa-trash-alt mr-1"></i> Remove item </a>
                                                </div>
                                                <p class="mb-0"><span><strong id="summary">${product.price}$</strong></span></p class="mb-0">
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <hr class="mb-4">
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <!-- Card -->
                                  </div>
                                  <!--Grid column-->
                              
                                  <!--Grid column-->
                                  <div class="col-lg-4">
                                  </div>
                                  <!--Grid column-->
                                </div>
                                <!-- Grid row -->
                                
                              
                              </section>
                              <!--Section: Block Content-->`;
          //calculer somme prix produits séléctionnés
          totalProduits += product.price;
          //afficher somme en html
          let mySum = document.querySelector("#prixTotal");
          mySum.innerHTML = `<strong>${totalProduits}$</strong>`;
          //récuperer et stocker montant total dans localStorage
          localStorage.setItem('prixTotal', JSON.stringify(totalProduits));
        }
      );
    //ajouter id des produits au tableau products
    products.push(idOfProduct);
  };
}
//cibler bouton validation
const boutonValidation = document.querySelector('#boutonCommande');
//créer évenement sur le button commande  
boutonValidation.addEventListener('click', function () {
  let firstName = document.querySelector('#firstname');
  let lastName = document.querySelector('#lastname');
  let address = document.querySelector('#address');
  let city = document.querySelector('#city');
  let email = document.querySelector('#email');
  //créer condition pour vérifier données formulaire valides avant envoi API
  if ((firstName.value.trim() != "") &&
    (lastName.value.trim() != "") &&
    (address.value.trim() != "") &&
    (city.value.trim() != "") &&
    (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value) == true)
  ) {
    //créer contact et récupérer données formulaires
    contact = {
      firstName: firstName.value,
      lastName: lastName.value,
      address: address.value,
      city: city.value,
      email: email.value
    };
    //envoyer objet contact et tableau products à API
    fetch('http://localhost:3000/api/teddies/order', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contact: contact,
          products: products
        })
      })
      //récupérer réponse API 
      .then(response => response.json())
      .then(
        order => {
          //récupérer numéro de commande = orderId
          let orderId = order.orderId;
          //stocker le numéro de commande (orderId) dans localStorage
          localStorage.setItem('myOrder', JSON.stringify(orderId));
        }
      );
      localStorage.clear('monTableau');
  } else {
    //afficher pop up si un des champs du fomulaire n'est pas valide
    alert("Veuillez remplir tous les champs");
  };
});;