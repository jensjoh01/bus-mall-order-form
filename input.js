'use strict'

/*====================== Get Item, add Quant to cart ============*/

function addToCart(event) {
  console.log('added to cart?????');
  var amountToBuy = document.getElementById('cart').value;
  var itemOrdered = document.getElementById('selectItem').value;
  console.log('Item: ' + itemOrdered);
  console.log(amountToBuy);
  for(var i = 0; i < Image.all.length; i++){
    if(Image.all[i].altName === itemOrdered){
      console.log('found the item, adding to cart');
      Image.all[i].timesOrdered += parseInt(amountToBuy);
      localStorage.setItem('Image.all',JSON.stringify(Image.all));
    }
  }
}

/* =============== Get info from local storage append to list ==*/

// function showCart() {
//   Image.all = JSON.parse(localStorage.getItem('Image.all'));
//   console.log(Image.all[0].timesOrdered);
//   var cartList = document.getElementById('order-list');
//   var liEl = document.createElement('li');
//   liEl.textContent = 'Your order for ' + Image.all[0].altName + ' Quantity: ' + Image.all[0].timesOrdered;
//   cartList.appendChild(liEl);
// }

// if(localStorage.getItem('Image.all')){
//   console.log('I found something!');
//   Image.all = JSON.parse(localStorage.getItem('Image.all'));
// } else {
//   console.log('No data found, creating new instances');
//   for (var i = 0; i < Image.allNames.length; i++) {
//       new Image(Image.allNames[i], Image.altNames[i]);
//   };
// }

document.getElementById('add-to-cart').addEventListener('click', addToCart);
// document.getElementById('showCart').addEventListener('click', showCart);
