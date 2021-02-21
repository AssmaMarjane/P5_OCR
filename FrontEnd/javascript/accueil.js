//console.log("ceci est un test");

/*let homeProduit = document.getElementById("containerProduct");
console.log(homeProduit);*/

/*let nomProd =  document.querySelector("#containerProduct");
nomProd.innerHTML = "petit ourson";
console.log (nomProd);*/
/*let nomOurs = document.querySelector("#containerProduct h4 > a");
nomOurs.innerHTML = "petite pelluche";
console.log(nomOurs)*/
                         
fetch ('http://localhost:3000/api/teddies')
.then (response => response.json ())
.then (
  products => 
  {
    console.log (products);
    for ( let product of products) {
      console.log(product.name);
      let homeProduit = document.querySelector("#containerProduct");
      homeProduit.innerHTML += ` <div id="productBlock" class="col-lg-4 col-md-6 mb-4">
                            <div id="lienProduit" class="card h-100">
                              <a ><img class="card-img-top" src="`+product.imageUrl+`" alt=""></a>
                              <div class="card-body">
                                <h4 class="card-title">
                                  <a > `+product.name+ `</a>
                                </h4>
                                <p class="card-text">`+product.price+`</p>
                                <p class="card-text">`+product.description+`</p>
                              </div>
                            </div>
                          </div>`;
      console.log(homeProduit);
      console.log(product._id);
      const productLink = document.querySelector("#lienProduit");
      console.log( productLink) ;   // On récupère l'élément sur lequel on veut détecter le clic
      //productLink.onClick = function (){}
      productLink.addEventListener( 'click' , function () {          // On écoute l'événement click
        productLink.innerHTML += `<a href="./Contenu/produit.html"></a>`;              // On change le contenu de notre élément pour afficher "C'est cliqué !"
        console.log( productLink );
      });
    }
  }
);

//let listProduct = localStorage.get







