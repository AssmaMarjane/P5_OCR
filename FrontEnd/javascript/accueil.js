//récupérer données API - catégorie TEDDY
fetch('http://localhost:3000/api/teddies')
  .then(response => response.json())
  .then(
    //récupérer objet contenant les produits
    products => {
      //parcourir tous les objets 
      displayProducts(products);

    }
  );

function displayProducts(products) {
  for (let product of products) {
    //afficher tous les produits récupérés dans objet et leurs données
    let homeProduit = document.querySelector("#containerProduct");
    homeProduit.innerHTML += ` <div  class="col-lg-4 col-md-6 mb-4">
                        <div class="lienProduit" class="card h-100">
                          <a href="./Contenu/produit.html?id=${product._id}" ><img class="card-img-top" src=" ${product.imageUrl}" alt=""></a>
                          <div class="card-body">
                            <h4 class="card-title">
                              <a > ${product.name}</a>
                            </h4>
                            <p class="card-text">${dividedPrice(product.price)}</p>
                            <p class="card-text">${product.description}</p>
                          </div>
                        </div>
                      </div>`;
  }

}


