//récupérer l'order_id (num commande) stocker dans le localStorage
let order = localStorage.getItem('myOrder');
let orderId = JSON.parse(order);
//récupérer le montant total stocker dans le localStorage
let totalCommande = localStorage.getItem('prixTotal');
let montantTotal = JSON.parse(totalCommande);
//afficher montant total et numéro de commande
let msgOrder = document.querySelector("#messageOder");
msgOrder.innerHTML += `<p> Merci pour votre achat dans notre boutique.
                          Votre commande d'un montant total de ${montantTotal}$ est enregistrée sous le numero suivant ${orderId}.Conservez bien ce numèro.abientot dans notre boutique!</p>`
localStorage.clear('monTableau');

                          //récupérer depuis le localStorage le tableau des -id et couleurs des produits pour le reset
//localStorage.clear();
//console.log(localStorage);
/*
async function resetstorage() {
    localStorage.removeItem('monTableau');
    console.log(localStorage);
}

async function resetawait() {
    const resetStorage = await resetstorage();
    return resetStorage;
}
localStorage.removeItem('monTableau');
console.log(localStorage);
*/
