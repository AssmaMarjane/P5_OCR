// recuperer le tableau localStorage
// localStorage.getItem('produitChoisi', JSON.stringify(produitChoisi));
// console.log(localStorage);

fetch('http://localhost:3000/api/teddies/')
  .then(response => response.json())
  .then(
    product => {
      //données recup en json passer en HTML
      let myProduct = document.querySelector("#listPanier");
      myProduct.innerHTML += `<div class="col-lg-12 col-md-6 mb-4">

                                <div class="list-group">
                                    <a href="#" class="list-group-item list-group-item-action active">Ourson</a>
                                    <a href="#" class="list-group-item list-group-item-action">Ourson1</a>
                                    <a href="#" class="list-group-item list-group-item-action">Ourson2</a>
                                    <a href="#" class="list-group-item list-group-item-action">Ourson3</a>
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
      localStorage.getItem('monTableau', JSON.stringify('monTableau'));
      console.log(localStorage);

    }

  );

