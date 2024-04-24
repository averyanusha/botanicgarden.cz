import Swiper, { Navigation, Pagination, Parallax, Autoplay, Thumbs } from 'swiper';

import "../../scss/base/swiper.scss";


const swiper = new Swiper('.swiper', {
   // Optional parameters
   loop: true,
 
   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
   },
 
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 
   // And if we need scrollbar
   scrollbar: {
     el: '.swiper-scrollbar',
   },
 });