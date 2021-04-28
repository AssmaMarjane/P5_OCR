//recupérer l'id du produit via parametre Url 
const urlOrder = window.location.search;
const urlParams = new URLSearchParams(urlOrder);
const orderId = urlParams.get('orderId');
console.log(orderId);
//recupérer info produit pr page via API fetch voir fetch

fetch('http://localhost:3000/api/teddies/' + orderId)
  .then(response => response.json())
  .then(
    order => {
      console.log(order);
      console.log(order.orderId)
      /*let myOrder = document.querySelector("#messageOder");
      myOrder.innerHTML += `*/

  
    }
  );



      //données recup en json passer en HTML
      

