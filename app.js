'use strict';


function Image(name, altName) {
  this.name = name;
  this.altName = altName;
  this.source = 'img/' + this.name;
  this.timesShown = 0;
  this.timesClicked = 0;
  this.timesOrdered = 0;
  Image.all.push(this);
}
// Store my objects, need to call by parameter name
Image.all = [];
//Store my initial file names
Image.allNames = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

Image.altNames = ['R2D2 Bags', 'Banana Slicer', 'Ipad/Toilet Paper Holder', 'Sweet Rain Boots', 'All-in-one breakfast', 'Meatball Bubblegum', 'Red Chair', 'Cthulhu', 'Duck Face Dogie', 'Dragon Meat', 'Pen-Utensil!', 'Pet Sweepers', 'Pizza Scissors', 'Shark Sleeping Bag', 'Sweeping Baby', 'Tauntaun', 'Unicorn Meat', 'USB creature', 'Water Can', 'Wine Glass'];

if(localStorage.getItem('Image.all')){
  console.log('I found something!');
  Image.all = JSON.parse(localStorage.getItem('Image.all'));
} else {
  console.log('No data found, creating new instances');
  for (var i = 0; i < Image.allNames.length; i++) {
    new Image(Image.allNames[i], Image.altNames[i]);
  };
}

//
// /*====================== Get Item, add Quant to cart ============*/
//
// function addToCart(event) {
//   var amountToBuy = document.getElementById('cart').value;
//   var itemOrdered = document.getElementById('selectItem').value;
//   console.log('Item: ' + itemOrdered);
//   console.log(amountToBuy);
//   for(var i = 0; i < Image.all.length; i++){
//     if(Image.all[i].altName === itemOrdered){
//       console.log('found the item, adding to cart');
//       Image.all[i].timesOrdered += parseInt(amountToBuy);
//       localStorage.setItem('Image.all',JSON.stringify(Image.all));
//     }
//   }
// }
//
// /* =============== Get info from local storage append to list ==*/
//
// function showCart() {
//   Image.all = JSON.parse(localStorage.getItem('Image.all'));
//   console.log(Image.all[0].timesOrdered);
//   var cartList = document.getElementById('order-list');
//   var liEl = document.createElement('li');
//   liEl.textContent = 'Your order for ' + Image.all[0].altName + ' Quantity: ' + Image.all[0].timesOrdered;
//   cartList.appendChild(liEl);
// }
//
// if(localStorage.getItem('Image.all')){
//   console.log('I found something!');
//   Image.all = JSON.parse(localStorage.getItem('Image.all'));
// } else {
//   console.log('No data found, creating new instances');
//   for (var i = 0; i < Image.allNames.length; i++) {
//       new Image(Image.allNames[i], Image.altNames[i]);
//   };
// }
//
// document.getElementById('add-to-cart').addEventListener('click',addToCart);
// document.getElementById('showCart').addEventListener('click', showCart);
