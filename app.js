'use strict';

var allImages = [];


function Image(name, altName){
  this.productName = productName;
  this.altNames = altName;
  this.source = 'img' + this.name;
  this.timeshown = 0;
  this.timesClicked = 0;
  this.timesOrdered = 0;
  Image.all.push(this);
}

Image.altName = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg','img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg'];

Image.allName = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'breakfast', 'chair', 'cthulhu', 'dogDuck', 'dragon', 'pen', 'petSweep', 'scissors', 'shark', 'sweep' ,'tauntaun' ,'unicorn' ,'usb' ,'waterCan' ,'wineGlass'];


for (var i = 0; i < allImages.length; i++){
  new Image(image.allNames[0], image.altName[i]);
};

var orderEl = document.getElementById('order-list');
var liEl = document.createElement('li');
liEl.textContent = allImages[i].altName;
orderEl.appendchild(lieEl);


function addToCart(event){
  var amountToBuy === document.getElementById('cart').value;
  var itemOrdered = document.getElementById('selectItem').value
  for(var i = 0; i < image.all.length; i++){
    if(Image.all[i].altName === itemOrdered){

    }
  }
}
