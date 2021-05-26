function dividedPrice (price){
   // let division = price/100;
    let prix = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price/100); // je peux mettre l variable division aussi
    return prix;
    };

