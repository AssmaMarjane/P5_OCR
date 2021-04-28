//recupérer l'order_id stocker dans localStorage
let order = localStorage.getItem('myOrder');
console.log(order);
let orderId = JSON.parse(order);
console.log(orderId)
//recupérer info produit pr page via API fetch voir fetch
let numOrder = document.querySelector("#messageOder");
numOrder.innerHTML += `<p> Merci pour votre achat dans notre boutique.
                          Votre numèro de commande est le ${orderId}.</p>`

      

