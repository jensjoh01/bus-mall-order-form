'use strict';

function showCart() {
  Image.all = JSON.parse(localStorage.getItem('Image.all'));
  console.log('Showing cart');

  for(var i = 0; i < Image.all.length; i++){
    if(Image.all[i].timesOrdered > 0){
      var cartList = document.getElementById('order-list');
      var liEl = document.createElement('li');
      liEl.textContent = 'Your order for ' + Image.all[i].altName + ' Quantity: ' + Image.all[i].timesOrdered;
      liEl.setAttribute('id',Image.all[i].altName);
      cartList.appendChild(liEl);

      var forImg = document.getElementById(Image.all[i].altName);
      var newImg = document.createElement('img');
      newImg.src = Image.all[i].source;

      forImg.appendChild(newImg);
    }
  }
}

// showCart();

document.getElementById('showCart').addEventListener('click', showCart);
