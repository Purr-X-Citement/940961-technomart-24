var link = document.querySelector('.mail-link');
var popup = document.querySelector('.modal-container-mail');
var close = popup.querySelector('.close-button');

link.addEventListener('click', function(evt) {
	evt.preventDefault();
	popup.classList.add('modal-show');
});

close.addEventListener('click', function(evt) {
	evt.preventDefault();
	popup.classList.remove('modal-show');
});

window.addEventListener('keydown', function(evt) {
	evt.preventDefault();
	if (evt.keyCode === 27) {
	popup.classList.remove('modal-show');
	}
});

popup.addEventListener('click', function(evt) {
  if(evt.target.id === 'mailform_index') {
    popup.classList.remove('modal-show');
  }
});

var mapLink = document.querySelector('.map-link');
var mapPopup = document.querySelector('.modal-container-map');
var mapClose = mapPopup.querySelector('.close-button');

mapLink.addEventListener('click', function(evt) {
	evt.preventDefault();
	mapPopup.classList.add('modal-show');
});

mapClose.addEventListener('click', function(evt) {
	evt.preventDefault();
	mapPopup.classList.remove('modal-show');
});

window.addEventListener('keydown', function(evt) {
	evt.preventDefault();
	if (evt.keyCode === 27) {
	mapPopup.classList.remove('modal-show');
	}
});

mapPopup.addEventListener('click', function(evt) {
  if(evt.target.id === 'map_index') {
    mapPopup.classList.remove('modal-show');
  }
});



var cartLinks = document.querySelectorAll('.catalog-user-buy-button');
var cartPopup = document.querySelector('.modal-container-cart');
var cartClose;
if (cartPopup) {
  cartClose = cartPopup.querySelector('.close-button');   
}


cartLinks.forEach(function(button){ 
  button.addEventListener('click', function(evt) { 
    evt.preventDefault(); 
    cartPopup.classList.add('modal-show'); 
  }); 
}); 

if (cartClose) {
  cartClose.addEventListener('click', function(evt) { 
  evt.preventDefault(); 
  cartPopup.classList.remove('modal-show'); 
  }); 
}

window.addEventListener('keydown', function(evt) { 
  evt.preventDefault(); 
    if (evt.keyCode === 27) { 
    cartPopup.classList.remove('modal-show'); 
  } 
}); 

cartPopup.addEventListener('click', function(evt) { 
  if(evt.target.id === 'modalcart_catalog') { 
   cartPopup.classList.remove('modal-show'); 
  } 
});