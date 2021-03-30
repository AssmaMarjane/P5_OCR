// recuperer le tableau localStorage
let tabPanier = localStorage.getItem('monTableau');
//console.log(tabPanier);
//console.log ( JSON.parse(tabPanier));
//boucler les produits puis récupérer les infos pour chaque produits
//creer compteur somme qui part donc de zero 
let totalProduits = 0;
/*5 + 10 + 15 
x = 0
a = 5
x = x+a = 5
b = 10
x = x+ b = 15
c =15
x = x + c = 30 */

for ( let produits of JSON.parse(tabPanier)){

  //console.log (produits)
  let idOfProduct = produits.produit ; 
  let colorOfProduct = produits.couleur;
  //console.log(idOfProduct + colorOfProduct);
  fetch('http://localhost:3000/api/teddies/' + idOfProduct ) 
  .then(response => response.json())
  .then(
    product => {
      //let montantTotal = totalProduits +  ;

      console.log();
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

    }

  );


} ; 








/*const boutonValidation = document.querySelector('#boutonCommande');    
boutonValidation.addEventListener('click', function () {         
  boutonValidation.innerHTML = "Commande validée!";   
  console.log(boutonValidation);   
});*/


/*                                    <!-- Card -->
                                    <div class="mb-3">
                                      <div class="pt-4">
                              
                                        <h5 class="mb-4">Expected shipping delivery</h5>
                              
                                        <p class="mb-0"> Thu., 12.03. - Mon., 16.03.</p>
                                      </div>
                                    </div>
                                    <!-- Card -->
                              
                                    <!-- Card -->
                                    <div class="mb-3">
                                      <div class="pt-4">
                              
                                        <h5 class="mb-4">We accept</h5>
                              
                                        <img class="mr-2" width="45px"
                                          src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                                          alt="Visa">
                                        <img class="mr-2" width="45px"
                                          src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                                          alt="American Express">
                                        <img class="mr-2" width="45px"
                                          src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                                          alt="Mastercard">
                                        <img class="mr-2" width="45px"
                                          src="https://mdbootstrap.com/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                                          alt="PayPal acceptance mark">
                                      </div>
                                    </div>
                                    <!-- Card -->
                                    */
/*                                    <!-- Card -->
                                    <div class="mb-3">
                                      <div class="pt-4">
                              
                                        <a class="dark-grey-text d-flex justify-content-between" data-toggle="collapse" href="#collapseExample"
                                          aria-expanded="false" aria-controls="collapseExample">
                                          Add a discount code (optional)
                                          <span><i class="fas fa-chevron-down pt-1"></i></span>
                                        </a>
                              
                                        <div class="collapse" id="collapseExample">
                                          <div class="mt-3">
                                            <div class="md-form md-outline mb-0">
                                              <input type="text" id="discount-code" class="form-control font-weight-light"
                                                placeholder="Enter discount code">
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <!-- Card -->
                                    */
/*                                    <!-- Card -->
                                    <div class="mb-3">
                                      <div class="pt-4">
                              
                                        <h5 class="mb-3">The total amount of</h5>
                              
                                        <ul class="list-group list-group-flush">
                                          <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                            Temporary amount
                                            <span>$25.98</span>
                                          </li>
                                          <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                            Shipping
                                            <span>Gratis</span>
                                          </li>
                                          <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                            <div>
                                              <strong>The total amount of</strong>
                                              <strong>
                                                <p class="mb-0">(including VAT)</p>
                                              </strong>
                                            </div>
                                            <span><strong>$53.98</strong></span>
                                          </li>
                                        </ul>
                              
                                        <button type="button" class="btn btn-primary btn-block">go to checkout</button>
                              
                                      </div>
                                    </div>
                                    <!-- Card -->
                                    */
/*                                                  <div class="def-number-input number-input safari_only mb-0 w-100">
                                                    <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                                      class="minus"></button>
                                                    <input class="quantity" min="0" name="quantity" value="1" type="number">
                                                    <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                                      class="plus"></button>
                                                  </div>
                                                </div>
                                              </div>
*/
/*                                                  <div class="def-number-input number-input safari_only mb-0 w-100">
                                                    <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                                      class="minus decrease"></button>
                                                    <input class="quantity" min="0" name="quantity" value="1" type="number">
                                                    <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                                      class="plus increase"></button>
                                                  </div>
                                                  <small id="passwordHelpBlock" class="form-text text-muted text-center">
                                                    (Note, 1 piece)
                                                  </small>
                                                </div>
*/
//creer evenement sur boutn validée commande
//voir la methode fetch pr envoi de la comande et revoir la doc