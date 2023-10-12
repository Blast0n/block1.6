
let sliders = document.querySelectorAll('.swiper');


sliders.forEach((el) => {

  let mySlider = new Swiper(el, {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 16,
    slidesPerView: 1.25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
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

});


// for (var i = 0; i < 3; i++) {

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
