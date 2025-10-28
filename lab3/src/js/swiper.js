import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', function () {
    const worksSlider = new Swiper('.works__slider', {
        modules: [Navigation, Pagination],

        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        centeredSlides: true,

        simulateTouch: true,
        touchRatio: 1,
        touchAngle: 45,
        grabCursor: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: true
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 30,
                centeredSlides: true
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 10,
                centeredSlides: false,
                simulateTouch: false
            },
            1920: {
                slidesPerView: 3,
                spaceBetween: 20,
                centeredSlides: false,
                simulateTouch: false
            }
        },

        speed: 600,
        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },
    });

    console.log('Works slider initialized with exact requirements');
});
