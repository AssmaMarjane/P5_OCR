//recupérer l'order_id stocker dans localStorage
let order = localStorage.getItem('myOrder');
let orderId = JSON.parse(order);
console.log(orderId)
let totalCommande = localStorage.getItem('prixTotal');
let montantTotal = JSON.parse(totalCommande);
console.log(montantTotal)
//recupérer info produit pr page via API fetch voir fetch
let msgOrder = document.querySelector("#messageOder");
msgOrder.innerHTML += `<p> Merci pour votre achat dans notre boutique.
                          Votre commande d'un montant total de ${montantTotal}$ est enregistrée sous le numero suivant ${orderId}.Conservez bien ce numèro.abientot dans notre boutique!</p>`
localStorage.getItem('monTableau');
console.log(localStorage);
/*if(orderId != "null"){
    localStorage.removeItem('monTableau');
    console.log(localStorage);
  
}*/
//localStorage.removeItem('monTableau');
//console.log(localStorage);
/* une page de confirmation de commande, remerciant l'utilisateur pour sa
commande, et indiquant le prix total et l'identifiant de commande envoyé
par le serveur.*/
//pour le reset localstorage faire un async avec await


      

