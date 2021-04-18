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
                              <input type="text" class="form-control" name ="firstname" id="firstname" required value="">
                            </div>
                            <div class="col-md-4 mb-3">
                              <label for="validationTooltip02">Prénom</label>
                              <input type="text" class="form-control" id="lastname" required value="">
                            </div>
                          </div>
                          <div class="form-row">
                              <div class="col-md-6 mb-3">
                                <label for="validationTooltip03">Adresse</label>
                                <input type="text" class="form-control" id="address"  required value="">
                              </div>
                              <div class="col-md-3 mb-3">
                                <label for="validationTooltip04">Ville</label>
                                <input type="text" class="form-control" id="city" required value="">
                              </div>
                          </div>
                          <div class="col-md-4 mb-3">
                            <label for="validationTooltipUsername">Email</label>
                            <div class="input-group">
                              <input type="text" class="form-control" id="email"  value="" required>
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

  if(firstName.value == "") {
    alert("Saisissez votre nom");
  }
  else {
    console.log("ok");
  }
  if(lastName.value == "") {
    alert("Saisissez votre prénom");
  }
  else {
    console.log("ok");
  }
  if(address.value == "") {
    alert("Saisissez votre adresse");
  }
  else {
    console.log("ok");
  }
  if(city.value == "") {
    alert("Saisissez la ville");
  }
  else {
    console.log("ok");
  }
  if(email.value == "") {
    alert("Saisissez votre email");
  }
  else {
    console.log("ok");
  }

  let contact = {
    firstName: firstName.value,
    lastName: lastName.value,
    address: address.value,
    city: city.value,
    email: email.value
  };
  console.log(contact);
  
//boutonValidation.innerHTML = ``
//alert ("Commande validée avec succés!")
/*fetch('http://localhost:3000/api/teddies/' + products + contact , {
  method: "POST", 
  body : JSON.stringify (products , contact)
} )
  //.then(response => response.json())
  .then(console.log, console.error)
  ;
*/
});
;


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
 *  puis preparer le fetche et methode post 
 * et voir les données retournées contenant info voir surtout orderid
 */

  /*function validation () {
    // si la valeur du champ prenom est non vide
    if(firstName.value != "") {
      // alors console
      console.log("ok");
    }
    else {
      // sinon on affiche un message
      alert("Saisissez le nom");
    }
  } ;*/

