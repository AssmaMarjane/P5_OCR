// recuperer le tableau localStorage
let tabPanier = localStorage.getItem('monTableau');
//boucler les produits puis récupérer les infos pour chaque produits
let totalProduits = 0;
let products = [];
let contact = {};
if (tabPanier !=null){ 
    for (let produits of JSON.parse(tabPanier)) {

      //console.log (produits)
      let idOfProduct = produits.produit;
      let colorOfProduct = produits.couleur;
      //console.log(idOfProduct + colorOfProduct);
      fetch('http://localhost:3000/api/teddies/' + idOfProduct)
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
            totalProduits += product.price;
            //console.log(totalProduits);
            let mySum = document.querySelector("#prixTotal");
            mySum.innerHTML = `<strong>${totalProduits}$</strong>`;
          }

        );
      products.push(idOfProduct);
    };
  }
  //console.log(products);
  const boutonValidation = document.querySelector('#boutonCommande');
  // creer fonction puis lappeler pr le button commande,   
  boutonValidation.addEventListener('click', function () {
    let firstName = document.querySelector('#firstname');
    let lastName = document.querySelector('#lastname');
    let address = document.querySelector('#address');
    let city = document.querySelector('#city');
    let email = document.querySelector('#email');

    function validateEmail(email)
    {
      var mailformat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      if(email.value.match(mailformat))
      {
        return true;
      }
      else
      {
        alert("This is not a valid email address");
        return false;
        }
    }

    if ((firstName.value.trim() != "") ||
      (lastName.value.trim() != "") || 
      (address.value.trim() != "") || 
      (city.value.trim() != "") || 
      (validateEmail = true)
      )
      {
      contact = {
        firstName: firstName.value,
        lastName: lastName.value,
        address: address.value,
        city: city.value,
        email: email.value
      };
      /*
      console.log(JSON.stringify({
        contact: contact,
        products: products
      }))
      */

    } else {
      alert("Veuillez remplir tous les champs");

      //console.log(contact)
      //console.log(products)
    };

    fetch('http://localhost:3000/api/teddies/order', {
        method: "POST",
        headers : {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contact: contact,
          products: products
        })
      })
      .then(response => response.json())
      .then(
        order => {
          console.log(order);
          //console.log(order.orderId)
          let orderId = order.orderId;
          //console.log(orderId)
          localStorage.setItem('myOrder', JSON.stringify(orderId));
          console.log(localStorage)
    
        }
        
      );

  });;

  // regex pr vlidation chmps mail required ne pas oublier reset localstorage qd recup oreder id
  /*
      function validateEmail(email) {
      const regx =;
      //return regx.test(email);
      console.log(regx.test(email))

    };
        const validateEmail = (email)  => {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email.toLowerCase());
  };

      const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;    


    */