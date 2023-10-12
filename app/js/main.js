/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/focus-visible/dist/focus-visible */ "../node_modules/focus-visible/dist/focus-visible.js");
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var _swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./swiper */ "./js/swiper.js");
/* harmony import */ var _swiper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_swiper__WEBPACK_IMPORTED_MODULE_3__);




var buttonCards = document.querySelector(".cards__button");
var hiddenCardsItems = document.querySelectorAll(".menu__item--hidden");
buttonCards.addEventListener("click", function (event) {
  buttonCards.classList.toggle("button-active");

  for (var i = 0; i < hiddenCardsItems.length; i++) {
    hiddenCardsItems[i].classList.toggle('menu__item--hidden');
  }
});
var buttonOffers = document.querySelector(".offers__button");
var hiddenOffersItems = document.querySelectorAll(".offers__item--hidden");
buttonOffers.addEventListener("click", function (event) {
  buttonOffers.classList.toggle("button-active");

  for (var i = 0; i < hiddenOffersItems.length; i++) {
    hiddenOffersItems[i].classList.toggle('offers__item--hidden');
  }
}); /// ASIDE _ LEFT //

var buttonBurger = document.querySelector(".header__burger");
var buttonCloseAside = document.querySelector(".top__burger");
var aside = document.querySelector(".aside");
buttonBurger.addEventListener("click", function (event) {
  aside.classList.add("aside-active");
  blur.classList.add("blur-active");
});
buttonCloseAside.addEventListener("click", function (event) {
  aside.classList.remove("aside-active");
  blur.classList.remove("blur-active");
}); // BLUR //

var blur = document.querySelector(".blur");
blur.addEventListener('click', function (event) {
  if (event.target === blur) {
    blur.classList.remove('blur-active');
    aside.classList.remove("aside-active");
    modalCall.classList.remove('modal--active');
    modalPhone.classList.remove('modal--active');
  }
}); // MAIN TEXT ///

var textHidden = document.querySelector(".content__text--hidden1120");
var textButton = document.querySelector(".content__button");
textButton.addEventListener("click", function (event) {
  textHidden.classList.remove("content__text--hidden1120");
  textButton.classList.add("content__button--hidden");
}); // MODULE CHAT ///

var buttonChat = document.querySelectorAll(".button__chat");
var modalCall = document.querySelector(".modal-callback");
var buttonCloseChat = document.querySelector(".modal-callback__close");
buttonChat.forEach(function (item) {
  item.addEventListener('click', function (event) {
    modalCall.classList.add('modal--active');
    aside.classList.remove("aside-active");
    blur.classList.add('blur-active');
  });
});
buttonCloseChat.addEventListener("click", function (event) {
  modalCall.classList.remove("modal--active");
  blur.classList.remove("blur-active");
}); // MODULE CALL //

var buttonPhone = document.querySelectorAll(".button__call");
var modalPhone = document.querySelector(".modal-phone");
var buttonClosePhone = document.querySelector(".modal-phone__close");
buttonPhone.forEach(function (item) {
  item.addEventListener('click', function (event) {
    modalPhone.classList.add('modal--active');
    aside.classList.remove("aside-active");
    blur.classList.add('blur-active');
  });
});
buttonClosePhone.addEventListener("click", function (event) {
  modalPhone.classList.remove("modal--active");
  blur.classList.remove("blur-active");
});

/***/ }),

/***/ "./js/swiper.js":
/*!**********************!*\
  !*** ./js/swiper.js ***!
  \**********************/
/***/ (() => {

var sliders = document.querySelectorAll('.swiper');
sliders.forEach(function (el) {
  var mySlider = new Swiper(el, {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 16,
    slidesPerView: 1.25,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      321: {
        slidesPerView: 1.3
      },
      430: {
        slidesPerView: 1.7
      },
      620: {
        slidesPerView: 2.4
      }
    }
  });
}); // for (var i = 0; i < 3; i++) {
//   sliders[i] = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
//     spaceBetween: 16,
//     slidesPerView: 1.25,
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//         breakpoints: {
//         321: {
//           slidesPerView: 1.3
//         },
//         430: {
//           slidesPerView: 1.7
//         },
//         620: {
//           slidesPerView: 2.4
//         }
//       }
//   });
// }
// }
// window.addEventListener('DOMContentLoaded', () => {
//   const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
//     let swiper
//     breakpoint = window.matchMedia(breakpoint)
//     const enableSwiper = function (className, settings) {
//       swiper = new Swiper(className, settings)
//     }
//     const checker = function () {
//       if (breakpoint.matches) {
//         return enableSwiper(swiperClass, swiperSettings)
//       } else {
//         if (swiper !== undefined)
//         return
//       }
//     }
//     breakpoint.addEventListener('change', checker)
//     checker()
//   };
//   //BRANDS
//   resizableSwiper('(max-width: 767px)', '.swiper__first', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
//     spaceBetween: 16,
//     slidesPerView: 1.25,
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//     breakpoints: {
//         321: {
//           slidesPerView: 1.3
//         },
//         430: {
//           slidesPerView: 1.7
//         },
//         620: {
//           slidesPerView: 2.4
//         }
//       }
//   });
//   //OFFERS
//   resizableSwiper('(max-width: 767px)', '.swiper-offers', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
//     spaceBetween: 16,
//     slidesPerView: 1.25,
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//     breakpoints: {
//         321: {
//           slidesPerView: 1.3
//         },
//         430: {
//           slidesPerView: 1.7
//         },
//         620: {
//           slidesPerView: 2.4
//         }
//       }
//   });
//   //SERVICES
//   resizableSwiper('(max-width: 767px)', '.swiper-service', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
//     spaceBetween: 16,
//     slidesPerView: 1.2,
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//     breakpoints: {
//         321: {
//           slidesPerView: 1.3
//         },
//         430: {
//           slidesPerView: 1.7
//         },
//         620: {
//           slidesPerView: 2.4
//         }
//       }
//   });
// });

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicon.ico */ "./assets/favicon.ico"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/burger.svg */ "./img/burger.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Group.svg */ "./img/Group.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/call.svg */ "./img/call.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/chat.svg */ "./img/chat.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/profile.svg */ "./img/profile.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/repair.svg */ "./img/repair.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/checkstatus.svg */ "./img/checkstatus.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./img/burger-close.svg */ "./img/burger-close.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./img/expand.svg */ "./img/expand.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./img/bigimg.png */ "./img/bigimg.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./img/lenovo.png */ "./img/lenovo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./img/go.svg */ "./img/go.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./img/samsung.png */ "./img/samsung.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./img/apple.png */ "./img/apple.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./img/bosh.png */ "./img/bosh.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./img/hp.png */ "./img/hp.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./img/acer.png */ "./img/acer.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./img/viewsonic.png */ "./img/viewsonic.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ./img/sony.png */ "./img/sony.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);
var ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);
var ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_17___);
var ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_18___);
var ___HTML_LOADER_REPLACEMENT_19___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_19___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <link rel=\"shortcut icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"image/x-icon\">\r\n  <link href=\"\r\n\thttps://cdn.jsdelivr.net/npm/swiper@10.3.0/swiper-bundle.min.css\r\n\t\" rel=\"stylesheet\">\r\n  <title>new site</title>\r\n</head>\r\n<body>\r\n  <header class=\"header\">\r\n    <div class=\"container\">\r\n      <div class=\"header__left-side\">\r\n        <button class=\"header__burger\">\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"burger\" width=\"40\" height=\"40\">\r\n        </button>\r\n        <div class=\"header__divider\"></div>\r\n        <div class=\"header__logo\">\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"group\" width=\"96.5\" height=\"50.81\">\r\n        </div>\r\n      </div>\r\n      <div class=\"header__right-side\">\r\n        <button class=\"header__call button__call\">\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"call\" width=\"40\" height=\"40\">\r\n        </button>\r\n        <button class=\"header__chat button__chat\">\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"chat\" width=\"40\" height=\"40\">\r\n        </button>\r\n        <button class=\"header__profile\">\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"profile\" width=\"40\" height=\"40\">\r\n        </button>\r\n        <div class=\"header__divider\"></div>\r\n        <button class=\"header__repair\">\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"repair\" width=\"40\" height=\"40\">\r\n        </button>\r\n        <button class=\"header__search\">\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"checkstatus\" width=\"40\" height=\"40\">\r\n        </button>\t\r\n      </div>\r\n      \r\n    </div>\r\n  </header>\r\n  <aside class=\"aside\">\r\n    <div class=\"aside__content\">\r\n      <div class=\"aside__top top\">\r\n        <button class=\"top__burger\" href=\"#\">\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"burger\" width=\"40\" height=\"40\">\r\n        </button>\r\n        <div class=\"top__logo\">\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"group\" width=\"96.5\" height=\"50.81\">\r\n        </div>\r\n        <button class=\"top__search\" type=\"button\"  >\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"checkstatus\" width=\"40\" height=\"40\">\r\n        </button>\r\n      </div>\r\n      <nav class=\"aside__navigation navigation\">\r\n        <ul class=\"navigation__menu menu\">\r\n          <li class=\"menu__item\">\r\n            <a class=\"menu__link\">Ремонт техники</a>\r\n          </li>\r\n          <li class=\"menu__item\">\r\n            <a class=\"menu__link menu__link--active\">Услуги и сервисы</a>\r\n          </li>\r\n          <li class=\"menu__item\">\r\n            <a class=\"menu__link\">Корпоративным клиентам</a>\r\n          </li>\r\n          <li class=\"menu__item\">\r\n            <a class=\"menu__link\">Продавцам техники</a>\r\n          </li>\r\n          <li class=\"menu__item\">\r\n            <a class=\"menu__link\">Партнерам</a>\r\n          </li>\t\t\t\t\t\t\t\t\t\t\t\t\r\n          <li class=\"menu__item\">\r\n            <a class=\"menu__link\">Производителям</a>\r\n          </li>\r\n          <li class=\"menu__item\">\r\n            <a class=\"menu__link\">Наши сервисные центры</a>\r\n          </li>\r\n          <li class=\"menu__item\">\r\n            <a class=\"menu__link\">Контакты</a>\r\n          </li>\t\t\t\t\r\n        </ul>\r\n      </nav>\r\n    </div>\r\n    <div class=\"aside__footer footer\">\r\n      <div class=\"footer__link link\">\r\n        <button class=\"link__phone button__call\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\" width=\"40px\" height=\"40px\"></button>\r\n        <button class=\"link__chat button__chat\" href=\"\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\" width=\"40px\" height=\"40px\"></button>\r\n        <abutton class=\"link_profile\" href=\"\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\" width=\"40px\" height=\"40px\"></button>\t\t\t\r\n      </div>\r\n      <div class=\"footer__mail\">mail@cps.com</div>\r\n      <div class=\"footer__phone\">8 800 890 8900</div>\r\n      <div class=\"footer__lang\">\r\n        <a href=\"#\" class=\"lang__ru lang__ru--active\">RU</a>\r\n        <a href=\"#\" class=\"lang__en\">EN</a>\r\n        <a href=\"#\" class=\"lang__ch\">CH</a>\r\n      </div>\r\n    </div>\r\n  </aside>\r\n  \r\n  <main class=\"main\">\r\n    <section class=\"promo\">\r\n      <div class=\"promo__title-wrapper\">\r\n        <h1 class=\"promo__title\">Услуги и сервисы</h1>\r\n        <div class=\"promo__services services\">\r\n          <a class=\"services__repair-link\" href=\"#\">\r\n            <span>Оставить заявку</span>\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"repair\" width=\"40\" height=\"40\">\r\n          </a>\r\n          <a class=\"services__status-link\" href=\"#\">\r\n            <span>Статус ремонта</span>\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"checkstatus\" width=\"40\" height=\"40\">\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <nav class=\"promo__nav nav\">\r\n        <ul class=\"nav__slide\">\r\n          <li class=\"nav__item\">\r\n            <a class=\"nav__link nav__link--active\">Ремонтируемые устройства</a>\r\n          </li>\r\n          <li class=\"nav__item\">\r\n            <a class=\"nav__link\">Дополнительные услуги</a>\r\n          </li>\r\n          <li class=\"nav__item\">\r\n            <a class=\"nav__link\">Цены на услуги</a>\r\n          </li>\t\t\t\t\t\t\t\t\r\n          <li class=\"nav__item\">\r\n            <a class=\"nav__link\">Адреса сервисных центров</a>\r\n          </li>\r\n          <li class=\"nav__item\">\r\n            <a class=\"nav__link\">Специальные цены</a>\r\n          </li>\r\n          <li class=\"nav__item\">\r\n            <a class=\"nav__link\">Отзывы</a>\r\n          </li>\t\t\t\t\r\n        </ul>\r\n      </nav>  \r\n      <div class=\"promo__content content\">\r\n        <div class=\"content__about\">\r\n            <p class=\"content__text\">\r\n              Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.\r\n            </p>\r\n            <p class=\"content__text--hidden1120\">Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.\r\n            </p>\r\n            <button class=\"content__button\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\"> \r\n              <span> Читать далее</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"content__img\">\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"company logo\" height=\"176\">\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"brands\">\r\n      <div class=\"brands__title title\">\r\n        <h2>Ремонт техники различных брендов</h2> \r\n      </div>\r\n      <div class=\"brands__swiper\">\r\n              <!-- Slider main container -->\r\n          <div class=\"swiper swiper__first\">\r\n            <!-- Additional required wrapper -->\r\n            <div class=\"swiper-wrapper\">\r\n              <!-- Slides -->\r\n              <div class=\"swiper-slide\">\r\n                <div class=\"item\">\r\n                  <img class=\"item__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"lenovo\" width=\"108px\" height=\"32px\">\r\n                <a class=\"item__link\" href=\"#\"><img class=\"item__link-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"\" width=\"40px\" height=\"40px\"></a>\r\n                </div>\r\n              </div>\t\t\t\t\r\n              <div class=\"swiper-slide\">\r\n                <div class=\"item\">\r\n                  <img class=\"item__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"samsung\" width=\"116px\" height=\"38.5px\">\r\n                <a class=\"item__link\" href=\"#\"><img class=\"item__link-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"\" width=\"40px\" height=\"40px\"></a>\r\n                </div>\r\n              </div>\t\r\n              <div class=\"swiper-slide\">\r\n                <div class=\"item\">\r\n                  <img class=\"item__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"apple\" width=\"44px\" height=\"44px\">\r\n                <a class=\"item__link\" href=\"#\"><img class=\"item__link-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"\" width=\"40px\" height=\"40px\"></a>\r\n                </div>\r\n              </div>\r\n              <div class=\"swiper-slide\">\t\t\t\t    \r\n                <div class=\"item\">\r\n                  <img class=\"item__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"bosh\" width=\"128px\" height=\"28.5px\">\r\n                <a class=\"item__link\" href=\"#\"><img class=\"item__link-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"\" width=\"40px\" height=\"40px\"></a>\r\n                </div>\r\n              </div>\t\t\t\t\r\n              <div class=\"swiper-slide\">\r\n                <div class=\"item\">\r\n                  <img class=\"item__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"hp\" width=\"52px\" height=\"52px\">\r\n                <a class=\"item__link\" href=\"#\"><img class=\"item__link-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"\" width=\"40px\" height=\"40px\"></a>\r\n                </div>\r\n              </div>\t\r\n              <div class=\"swiper-slide\">\r\n                <div class=\"item\">\r\n                  <img class=\"item__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"acer\" width=\"94px\" height=\"24px\">\r\n                <a class=\"item__link\" href=\"#\"><img class=\"item__link-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"\" width=\"40px\" height=\"40px\"></a>\r\n                </div>\r\n              </div>\r\n              <div class=\"swiper-slide\">\r\n                <div class=\"item\">\r\n                  <img class=\"item__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"viewsonic\" width=\"128px\" height=\"21px\">\r\n                <a class=\"item__link\" href=\"#\"><img class=\"item__link-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"\" width=\"40px\" height=\"40px\"></a>\r\n                </div>\r\n              </div>\t\t\t\t\r\n              <div class=\"swiper-slide\">\r\n                <div class=\"item\">\r\n                  <img class=\"item__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"sony\" width=\"128px\" height=\"25px\">\r\n                <a class=\"item__link\" href=\"#\"><img class=\"item__link-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"\" width=\"40px\" height=\"40px\"></a>\r\n                </div>\r\n              </div>\t\r\n              <div class=\"swiper-slide\">\r\n                <div class=\"item\">\r\n                  <img class=\"item__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"lenovo\" width=\"108px\" height=\"32px\">\r\n                <a class=\"item__link\" href=\"#\"><img class=\"item__link-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"\" width=\"40px\" height=\"40px\"></a>\r\n                </div>\r\n              </div>\t\t\t    \t\t\t    \r\n            </div>\r\n            <!-- If we need pagination -->\r\n            <div class=\"swiper-pagination\"></div>\r\n          </div>\r\n        </div>    \r\n        <div class=\"brands__cards cards\">\r\n          <ul class=\"cards__menu menu\">\r\n            <li class=\"menu__item item\">\r\n              <img class=\"item__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"lenovo\" width=\"108px\" height=\"32px\">\r\n              <a class=\"item__link\" href=\"#\"><img class=\"item__link-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"\" width=\"40px\" height=\"40px\"></a>\r\n            </li>\r\n            <li class=\"menu__item item\">\r\n              <img class=\"item__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"samsung\" width=\"116px\"\r\n              height=\"38.5px\">\r\n              <a class=\"item__link\" href=\"\"><img class=\"item__link-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"\" width=\"40px\" height=\"40px\"></a>\r\n            </li>\r\n            <li class=\"menu__item item\">\r\n              <img class=\"item__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"apple\" width=\"44px\" height=\"44px\">\r\n              <a class=\"item__link\" href=\"\"><img class=\"item__link-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"\" width=\"40px\" height=\"40px\"></a>\r\n            </li>\r\n            <li class=\"menu__item item\">\r\n              <img class=\"item__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"bosh\" width=\"128px\" height=\"28.5px\">\r\n              <a class=\"item__link\" href=\"\"><img class=\"item__link-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"\" width=\"40px\" height=\"40px\"></a>\r\n            </li>\r\n            <li class=\"menu__item item\">\r\n              <img class=\"item__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"hp\" width=\"52px\" height=\"52px\">\r\n              <a class=\"item__link\" href=\"\"><img class=\"item__link-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"\" width=\"40px\" height=\"40px\"></a>\r\n            </li>\r\n            <li class=\"menu__item item\">\r\n              <img class=\"item__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"acer\" width=\"94px\" height=\"24px\">\r\n              <a class=\"item__link\" href=\"\"><img class=\"item__link-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"\" width=\"40px\" height=\"40px\"></a>\r\n            </li>\r\n            <li class=\"menu__item menu__item--hidden item\">\r\n              <img class=\"item__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"viewsonic\" width=\"128px\" height=\"21px\">\r\n              <a class=\"item__link\" href=\"\"><img class=\"item__link-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"\" width=\"40px\" height=\"40px\"></a>\r\n            </li>\r\n            <li class=\"menu__item menu__item--hidden item\">\r\n              <img class=\"item__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"sony\" width=\"128px\" height=\"25px\">\r\n              <a class=\"item__link\" href=\"\"><img class=\"item__link-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"\" width=\"40px\" height=\"40px\"></a>\r\n            </li>\r\n            <li class=\"menu__item menu__item--hidden item\">\r\n              <img class=\"item__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"lenovo\" width=\"108px\" height=\"32px\">\r\n              <a class=\"item__link\" href=\"#\"><img class=\"item__link-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"\" width=\"40px\" height=\"40px\"></a>\r\n            </li>\r\n            <li class=\"menu__item menu__item--hidden item\">\r\n              <img class=\"item__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"samsung\" width=\"116px\"\r\n              height=\"38.5px\">\r\n              <a class=\"item__link\" href=\"\"><img class=\"item__link-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"\" width=\"40px\" height=\"40px\"></a>\r\n            </li>\r\n            <li class=\"menu__item menu__item--hidden item\">\r\n              <img class=\"item__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"apple\" width=\"44px\" height=\"44px\">\r\n              <a class=\"item__link\" href=\"\"><img class=\"item__link-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"\" width=\"40px\" height=\"40px\"></a>\r\n            </li>      \r\n          </ul>\r\n          <button class=\"cards__button\" type=\"button\">\r\n            <span>Показать все</span>\r\n            <span>Скрыть</span>\r\n          </button>\r\n        </div>\t\r\n    </section>\r\n    <section class=\"offers\">\r\n      <div class=\"offers__title title\" > <h2>Ремонт различных видов техники</h2></div>\r\n      <div class=\"offers__swiper-container\">\r\n        <!-- Slider main container -->\r\n        <div class=\"swiper swiper-offers\">\r\n          <!-- Additional required wrapper -->\r\n          <div class=\"swiper-wrapper\">\r\n            <!-- Slides -->\r\n            <div class=\"swiper-slide\">\r\n              <div class=\"offers__item\">\r\n                <h3>Ремонт ноутбуков</h3>\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"go\">\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-slide\">\r\n              <div class=\"offers__item\">\r\n                <h3>Ремонт планшетов</h3>\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"\" class=\"icon\">\r\n              </div>\r\n            </div>\t\r\n            <div class=\"swiper-slide\">\r\n              <div class=\"offers__item\">\r\n                <h3>Ремонт ПК</h3>\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"\" class=\"icon\">\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-slide\">\r\n              <div class=\"offers__item\">\r\n                <h3>Ремонт мониторов</h3>\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"\" class=\"icon\">\r\n              </div>\r\n            </div>\t\r\n            <div class=\"swiper-slide\">\r\n              <div class=\"offers__item\">\r\n                <h3>Ремонт смартфонов</h3>\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"\" class=\"icon\">\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-slide\">\r\n              <div class=\"offers__item\">\r\n                <h3>Ремонт смартфонов</h3>\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"\" class=\"icon\">\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-slide\">\r\n              <div class=\"offers__item\">\r\n                <h3>Ремонт смартфонов</h3>\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"\" class=\"icon\">\r\n              </div>\r\n            </div>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t    \t\t\t    \r\n          </div>\r\n          <!-- If we need pagination -->\r\n          <div class=\"swiper-pagination\"></div>\r\n        </div>\r\n      </div>    \r\n      <div class=\"offers__cards\">\r\n        <div class=\"offers__item\">\r\n          <h3>Ремонт ноутбуков</h3>\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"go\">\r\n        </div>\r\n        <div class=\"offers__item\">\r\n          <h3>Ремонт планшетов</h3>\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"go\">\r\n        </div>\r\n        <div class=\"offers__item\">\r\n          <h3>Ремонт ПК</h3>\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"go\">\r\n        </div>\r\n        <div class=\"offers__item offers__item--hidden\">\r\n          <h3>Ремонт мониторов</h3>\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"go\">\r\n        </div>\r\n        <div class=\"offers__item offers__item--hidden\">\r\n          <h3>Ремонт смартфонов</h3>\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"go\">\r\n        </div>\r\n        <div class=\"offers__item offers__item--hidden\">\r\n          <h3>Ремонт смартфонов</h3>\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"go\">\r\n        </div>\r\n        <div class=\"offers__item offers__item--hidden\">\r\n          <h3>Ремонт смартфонов</h3>\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"go\">\r\n        </div>\r\n        <div class=\"offers__item offers__item--hidden\">\r\n          <h3>Ремонт смартфонов</h3>\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"go\">\r\n        </div>\r\n      </div>\r\n      <button class=\"offers__button\" type=\"button\">\r\n        <span>Показать все</span>\r\n        <span>Скрыть</span>\r\n      </button>\r\n    </section>\r\n    <section class=\"service\">\r\n      <div class=\"service__title title\">\r\n        <h2>цены на услуги</h2>\r\n      </div>\r\n      <div class=\"service__swiper-container\">\r\n        <!-- Slider main container -->\r\n        <div class=\"swiper swiper-service\">\r\n          <!-- Additional required wrapper -->\r\n          <div class=\"swiper-wrapper\">\r\n            <!-- Slides -->\r\n            <div class=\"swiper-slide\">\r\n              <div class=\"service__item\">\r\n                <h3>Ремонтные услуги</h3>\r\n                <p>Тестирование с выдачей технического заключения</p>\r\n                <h3>Цена</h3>\r\n                <p>Бесплатно</p>\r\n                <h3>Срок</h3>\r\n                <p>30-120 мин</p>\r\n                <a class=\"service__button\">Заказать</a>\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-slide\">\r\n              <div class=\"service__item\">\r\n                <h3>Ремонтные услуги</h3>\r\n                <p>Тестирование с выдачей технического заключения</p>\r\n                <h3>Цена</h3>\r\n                <p>Бесплатно</p>\r\n                <h3>Срок</h3>\r\n                <p>30-120 мин</p>\r\n                <a class=\"service__button\">Заказать</a>\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-slide\">\r\n              <div class=\"service__item\">\r\n                <h3>Ремонтные услуги</h3>\r\n                <p>Тестирование с выдачей технического заключения</p>\r\n                <h3>Цена</h3>\r\n                <p>Бесплатно</p>\r\n                <h3>Срок</h3>\r\n                <p>30-120 мин</p>\r\n                <a class=\"service__button\">Заказать</a>\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-slide\">\r\n              <div class=\"service__item\">\r\n                <h3>Ремонтные услуги</h3>\r\n                <p>Тестирование с выдачей технического заключения</p>\r\n                <h3>Цена</h3>\r\n                <p>Бесплатно</p>\r\n                <h3>Срок</h3>\r\n                <p>30-120 мин</p>\r\n                <a class=\"service__button\">Заказать</a>\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-slide\">\r\n              <div class=\"service__item\">\r\n                <h3>Ремонтные услуги</h3>\r\n                <p>Тестирование с выдачей технического заключения</p>\r\n                <h3>Цена</h3>\r\n                <p>Бесплатно</p>\r\n                <h3>Срок</h3>\r\n                <p>30-120 мин</p>\r\n                <a class=\"service__button\">Заказать</a>\r\n              </div>\r\n            </div>\r\n            <div class=\"swiper-slide\">\r\n              <div class=\"service__item\">\r\n                <h3>Ремонтные услуги</h3>\r\n                <p>Тестирование с выдачей технического заключения</p>\r\n                <h3>Цена</h3>\r\n                <p>Бесплатно</p>\r\n                <h3>Срок</h3>\r\n                <p>30-120 мин</p>\r\n                <a class=\"service__button\">Заказать</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- If we need pagination -->\r\n          <div class=\"swiper-pagination\"></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"service__options options\">\r\n        <div class=\"options__header\">\r\n          <div class=\"options__header-left-side\"><span>Ремонтные услуги</span></div>\r\n          <div class=\"options__header-right-side\"><span>Цена</span>\r\n          <span>Срок</span></div>\r\n        </div>\r\n        <div class=\"options__table\">\r\n          <div class=\"options__column column\">\r\n            <div class=\"column__left-side\"><span>Диагностика</span></div>\r\n            <div class=\"column__right-side\">\r\n              <span>Бесплатно</span>\r\n              <span>30 мин</span>\r\n              <a class=\"service__button\">Заказать</a>\r\n            </div>\r\n          </div>\r\n          <div class=\"options__column column\">\r\n            <div class=\"column__left-side\"><span>Замена дисплея</span></div>\r\n            <div class=\"column__right-side\">\r\n              <span>1 000 ₽</span>\r\n              <span>30-120 мин</span>\r\n              <a class=\"service__button\">Заказать</a>\r\n            </div>\r\n          </div>\r\n          <div class=\"options__column column\">\r\n            <div class=\"column__left-side\"><span>Замена полифонического динамика</span></div>\r\n            <div class=\"column__right-side\">\r\n              <span>1 000 ₽</span>\r\n              <span>30-120 мин</span>\r\n              <a class=\"service__button\">Заказать</a>\r\n            </div>\r\n          </div>\r\n          <div class=\"options__column column\">\r\n            <div class=\"column__left-side\"><span>Тестирование с выдачей технического заключения</span></div>\r\n            <div class=\"column__right-side\">\r\n              <span>1 000 ₽</span>\r\n              <span>30-120 мин</span>\r\n              <a class=\"service__button\">Заказать</a>\r\n            </div>\r\n          </div>\r\n          <div class=\"options__column column\">\r\n            <div class=\"column__left-side\"><span>Замена программного обеспечения</span></div>\r\n            <div class=\"column__right-side\">\r\n              <span>1 000 ₽</span>\r\n              <span>30-120 мин</span>\r\n              <a class=\"service__button\">Заказать</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"service__description description\">\r\n        <div class=\"description__text\">Все цены указаны с учетом НДС. Стоимость ремонта указана на единичную услугу. Для получения коммерческого предложения на постоянное обслуживание, оставьте заявку.</div>\r\n        <a class=\"description__link\" href=\"#\">Получить коммерческое предложение</a>\r\n      </div>\r\n    </section>\r\n    <footer class=\"footer\">\r\n      <div class=\"footer__wrapper\">\r\n        <div class=\"footer__text\">\r\n          <div class=\"copyright__year\">© 2019 CPS</div>\r\n          <div class=\"copyright__company\">Разработано командой Apesong</div>         \r\n        </div>\r\n        <div class=\"footer__text\">Политика конфиденциальности</div>\r\n        <div class=\"footer__text\">Информация, размещенная на данной странице, не является публичной офертой</div>\r\n      </div>\r\n    </footer>\r\n  </main>\r\n  <div class=\"blur\"></div>\r\n  <div class=\"modal modal-callback\">\r\n    <div class=\"modal__wrapper\">\r\n      <button class=\"modal__close modal-callback__close\">\r\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"burger\" width=\"40\" height=\"40\">\r\n      </button>\r\n      <div class=\"modal__title\"><h2>Обратная связь</h2></div>\r\n      <form action=\"get\" class=\"modal__form modal-callback__form form\">\r\n        <input type=\"text\" class=\"form__name\" placeholder=\"Имя\">\r\n        <input type=\"number\" class=\"form__number\" placeholder=\"Телефон\">\r\n        <input type=\"mail\" class=\"form__mail\" placeholder=\"Электронная почта\">\r\n        <textarea  class=\"form__text\" placeholder=\"Сообщение\"></textarea>\r\n        <div class=\"modal__personal modal-callback__personal\">\r\n          Нажимая “отправить”, вы даете согласие на <span>обработку персональных данных</span> и соглашаетесь с нашей <span>политикой конфиденциальности</span>\r\n        </div>\r\n        <button class=\"modal__submit modal-callback__submit\">отправить</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal modal-phone\">\r\n    <div class=\"modal__wrapper\">\r\n      <button class=\"modal__close modal-phone__close\">\r\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"burger\" width=\"40\" height=\"40\">\r\n      </button>\r\n    <div class=\"modal__title\"><h2>Заказать звонок</h2></div>\r\n    <form action=\"get\" class=\"modal__form modal-phone__form form\">\r\n      <input type=\"number\" class=\"form__number\" placeholder=\"Телефон\">\r\n      <div class=\"modal__personal modal-phone__personal\">\r\n        Нажимая “отправить”, вы даете согласие на <span>обработку персональных данных</span> и соглашаетесь с нашей <span>политикой конфиденциальности</span>\r\n      </div>\r\n      <button class=\"modal__submit modal-phone__submit\">отправить</button>\r\n    </form>\r\n    </div>\r\n  </div>\r\n  <script src=\"https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js\"></script>\r\n</body>\r\n</html>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/favicon.ico":
/*!****************************!*\
  !*** ./assets/favicon.ico ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/favicon.ico";

/***/ }),

/***/ "./img/Group.svg":
/*!***********************!*\
  !*** ./img/Group.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Group.svg";

/***/ }),

/***/ "./img/acer.png":
/*!**********************!*\
  !*** ./img/acer.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/acer.png";

/***/ }),

/***/ "./img/apple.png":
/*!***********************!*\
  !*** ./img/apple.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/apple.png";

/***/ }),

/***/ "./img/bigimg.png":
/*!************************!*\
  !*** ./img/bigimg.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/bigimg.png";

/***/ }),

/***/ "./img/bosh.png":
/*!**********************!*\
  !*** ./img/bosh.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/bosh.png";

/***/ }),

/***/ "./img/burger-close.svg":
/*!******************************!*\
  !*** ./img/burger-close.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/burger-close.svg";

/***/ }),

/***/ "./img/burger.svg":
/*!************************!*\
  !*** ./img/burger.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/burger.svg";

/***/ }),

/***/ "./img/call.svg":
/*!**********************!*\
  !*** ./img/call.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/call.svg";

/***/ }),

/***/ "./img/chat.svg":
/*!**********************!*\
  !*** ./img/chat.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/chat.svg";

/***/ }),

/***/ "./img/checkstatus.svg":
/*!*****************************!*\
  !*** ./img/checkstatus.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/checkstatus.svg";

/***/ }),

/***/ "./img/expand.svg":
/*!************************!*\
  !*** ./img/expand.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/expand.svg";

/***/ }),

/***/ "./img/go.svg":
/*!********************!*\
  !*** ./img/go.svg ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/go.svg";

/***/ }),

/***/ "./img/hp.png":
/*!********************!*\
  !*** ./img/hp.png ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/hp.png";

/***/ }),

/***/ "./img/lenovo.png":
/*!************************!*\
  !*** ./img/lenovo.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/lenovo.png";

/***/ }),

/***/ "./img/profile.svg":
/*!*************************!*\
  !*** ./img/profile.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/profile.svg";

/***/ }),

/***/ "./img/repair.svg":
/*!************************!*\
  !*** ./img/repair.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/repair.svg";

/***/ }),

/***/ "./img/samsung.png":
/*!*************************!*\
  !*** ./img/samsung.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/samsung.png";

/***/ }),

/***/ "./img/sony.png":
/*!**********************!*\
  !*** ./img/sony.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/sony.png";

/***/ }),

/***/ "./img/viewsonic.png":
/*!***************************!*\
  !*** ./img/viewsonic.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/viewsonic.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_focus-visible_dist_focus-visible_js-node_modules_html-loader_dist_runtim-b0975e"], () => (__webpack_require__("./js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map