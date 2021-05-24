//récupérer l'order_id (num commande) stocker dans le localStorage
let order = localStorage.getItem('myOrder');
let orderId = JSON.parse(order);
//récupérer le montant total stocker dans le localStorage
let totalCommande = localStorage.getItem('prixTotal');
let montantTotal = JSON.parse(totalCommande);
//afficher montant total et numéro de commande
let msgOrder = document.querySelector("#messageOrder");
msgOrder.innerHTML += `<p> Merci pour votre achat dans notre boutique.</p>
                       <p>Votre commande d'un montant total de ${dividedPrice(montantTotal)}€ est enregistrée sous le numero suivant ${orderId}.</p>
                       <p>Conservez bien ce numèro.</p>
                       <p>Le récapitulatif de votre commande vous a été envoyé par mail.
                       <p>A bientôt sur notre site!</p>`
localStorage.clear('monTableau');

