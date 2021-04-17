// recuperer le tableau localStorage
let tabPanier = localStorage.getItem('monTableau');
//console.log(tabPanier);
//boucler les produits puis récupérer les infos pour chaque produits
let totalProduits = 0 ;
let products = [] ;
for ( let produits of JSON.parse(tabPanier)){

  //console.log (produits)
  let idOfProduct = produits.produit ; 
  let colorOfProduct = produits.couleur;
  //console.log(idOfProduct + colorOfProduct);
  fetch('http://localhost:3000/api/teddies/' + idOfProduct ) 
  .then(response => response.json())
  .then(
    product => {
      //données recup en json passer en HTML
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
    totalProduits +=  product.price ;
    //console.log(totalProduits);
    let mySum = document.querySelector("#prixTotal");
    mySum.innerHTML = `<strong>${totalProduits}$</strong>`;
    }
    
  );
  products.push(idOfProduct);
} ;
console.log (products);
let monFormulaire = document.querySelector('#formContact');
monFormulaire.innerHTML = `
                        <form class="needs-validation" novalidate>
                          <div class="form-row">
                            <div class="col-md-4 mb-3">
                              <label for="validationTooltip01">Nom</label>
                              <input type="text" class="form-control" id="firstname"  value="" required>
                            </div>
                            <div class="col-md-4 mb-3">
                              <label for="validationTooltip02">Prénom</label>
                              <input type="text" class="form-control" id="lastname" value="" required>
                            </div>
                          </div>
                          <div class="form-row">
                              <div class="col-md-6 mb-3">
                                <label for="validationTooltip03">Adresse</label>
                                <input type="text" class="form-control" id="address"  required>
                              </div>
                              <div class="col-md-3 mb-3">
                                <label for="validationTooltip04">Ville</label>
                                <input type="text" class="form-control" id="city"  required>
                              </div>
                          </div>
                          <div class="col-md-4 mb-3">
                            <label for="validationTooltipUsername">Email</label>
                            <div class="input-group">
                              <input type="text" class="form-control" id="email"  aria-describedby="validationTooltipUsernamePrepend" required>
                            </div>
                          </div>
                        </form>`;
const boutonValidation = document.querySelector('#boutonCommande'); 
// creer fonction puis lappeler pr le button commande,   
boutonValidation.addEventListener('click', function () { 
  let firstName = document.querySelector ('#firstname');
  let lastName = document.querySelector ('#lastname');
  let address = document.querySelector ('#address');
  let city = document.querySelector ('#city');
  let email = document.querySelector ('#email');

  let contact = {
    firstName: firstName.value,
    lastName: lastName.value,
    address: address.value,
    city: city.value,
    email: email.value
  };
  console.log(contact);
  
//boutonValidation.innerHTML = ``
});
//console.log(boutonValidation);
;

















//creer une variable pr stocker le tableau des produits avant la boucle 
//paramtrer le tableau dans la boucle
//console log en dessous de la boucle

/*fetch('http://localhost:3000/api/teddies/',{
  method: "POST", body* contact et product
} )
  .then(response => response.json())
  -> 
  -> spécifications renvoyer tableau avec id produits à API: body doit contenir les 2 éléments du contain contact et product
/**
 *
 * Expects request to contain:
 * contact: {
 *   firstName: string,
 *   lastName: string,
 *   address: string,
 *   city: string,
 *   email: string
 * }
 * products: [string] <-- array of product _id
 *
 * au click  qui recp donnée form objet contact 
 * et creer tableau product qui recupere uniqmt id des produits
 * test console
 *  puis preparer le fetche et methode post 
 * et voir les données retournées contenant info voir surtout orderid
 */

//voir la methode fetch pr envoi de la comande et revoir la doc