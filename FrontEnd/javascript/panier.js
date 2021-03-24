// recuperer le tableau localStorage
let tabPanier = localStorage.getItem('monTableau');
//console.log(tabPanier);
//console.log ( JSON.parse(tabPanier));
for ( let produits of JSON.parse(tabPanier)){
  //console.log (produits)
  let idOfProduct = produits.produit ; 
  let colorOfProduct = produits.couleur;
  console.log(idOfProduct + colorOfProduct);

} ; 
//boucler les produits puis récupérer les infos pour chaque roduits> fetch ciblé par produit cf page produit pour le fetch ciblé
//faire travail template pr ficher les produit proprement


fetch('http://localhost:3000/api/teddies/') //+produits.produit + produits.couleur
  .then(response => response.json())
  .then(
    product => {

      //données recup en json passer en HTML
      let myProduct = document.querySelector("#listPanier");
      myProduct.innerHTML += `<div class="col-lg-12 col-md-6 mb-4">

                                <div class="list-group">
                                    <a href="#" class="list-group-item list-group-item-action active">Ourson</a>
                                    <a href="#" class="list-group-item list-group-item-action"></a>
                                    <a href="#" class="list-group-item list-group-item-action"></a>
                                    <a href="#" class="list-group-item list-group-item-action"></a>
                                    <a href="#" class="list-group-item list-group-item-action disabled">Total</a>
                                </div>
                                <button id="boutonCommande" type="button" class="btn btn-primary"> Valider la commande </button>

                             </div>`;
     /* for (let  of ) {
        let  = document.querySelector("#");
        .innerHTML += ` `; 
        } ; */
      const boutonValidation = document.querySelector('#boutonCommande');    
      boutonValidation.addEventListener('click', function () {         
        boutonValidation.innerHTML = "Commande validée!";   
        console.log(boutonValidation);   
      });

    }

  );

