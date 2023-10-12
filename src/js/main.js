import '../../node_modules/focus-visible/dist/focus-visible';
import '../scss/main.scss';
import '../index.html';

import './swiperFirst';



let buttonCards = document.querySelector(".cards__button");

let hiddenCardsItems = document.querySelectorAll(".menu__item--hidden");


buttonCards.addEventListener("click", function(event) {

	buttonCards.classList.toggle("button-active");

		for (var i = 0; i < hiddenCardsItems.length; i++) {

		hiddenCardsItems[i].classList.toggle('menu__item--hidden');

	}	
});


let buttonOffers  = document.querySelector(".offers__button");


let hiddenOffersItems = document.querySelectorAll(".offers__item--hidden");

buttonOffers.addEventListener("click", function(event) {

	buttonOffers.classList.toggle("button-active");

		for (var i = 0; i < hiddenOffersItems.length; i++) {

      hiddenOffersItems[i].classList.toggle('offers__item--hidden');

	}	
});



/// ASIDE _ LEFT //

let buttonBurger = document.querySelector(".header__burger");
let buttonCloseAside = document.querySelector(".top__burger");
let aside = document.querySelector(".aside");


buttonBurger.addEventListener("click", function(event) {
	aside.classList.add("aside-active");
	blur.classList.add("blur-active");
});

buttonCloseAside.addEventListener("click", function(event) {
	aside.classList.remove("aside-active");
	blur.classList.remove("blur-active");
});


// BLUR //
let blur = document.querySelector(".blur");
blur.addEventListener('click', function(event) {
	if (event.target === blur) {
		blur.classList.remove('blur-active');
		aside.classList.remove("aside-active");
		modalCall.classList.remove('modal--active');
		modalPhone.classList.remove('modal--active');
	}
  })



// MAIN TEXT ///

let textHidden = document.querySelector(".content__text--hidden1120");
let textButton = document.querySelector(".content__button");

textButton.addEventListener("click", function(event) {
	textHidden.classList.remove("content__text--hidden1120");
	textButton.classList.add("content__button--hidden");
});

// MODULE CHAT ///
let buttonChat = document.querySelectorAll(".button__chat");
let modalCall = document.querySelector(".modal-callback");
let buttonCloseChat = document.querySelector(".modal-callback__close");

buttonChat.forEach((item) => {
	item.addEventListener('click', function(event) {
		modalCall.classList.add('modal--active')
		aside.classList.remove("aside-active");
		blur.classList.add('blur-active')
	})
  })

  buttonCloseChat.addEventListener("click", function(event) {
	modalCall.classList.remove("modal--active");
	blur.classList.remove("blur-active");
});

// MODULE CALL //
let buttonPhone = document.querySelectorAll(".button__call");
let modalPhone = document.querySelector(".modal-phone");
let buttonClosePhone = document.querySelector(".modal-phone__close");

buttonPhone.forEach((item) => {
	item.addEventListener('click', function(event) {
		modalPhone.classList.add('modal--active')
		aside.classList.remove("aside-active");
		blur.classList.add('blur-active')
	})
  })

  buttonClosePhone.addEventListener("click", function(event) {
	modalPhone.classList.remove("modal--active");
	blur.classList.remove("blur-active");
});


