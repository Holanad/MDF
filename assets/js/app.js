const swiperProject = new Swiper(".project-slider", {
    slidesPerView: 'auto',
    spaceBetween: 50,
    freeMode: true,
    grabCursor: true,
    navigation: {
        prevEl: ".project-slider-panel__arrow.prev",
        nextEl: ".project-slider-panel__arrow.next",
    },
   breakpoints: {
        768: {
            spaceBetween: 50,
        },
        576: {
            spaceBetween: 30,
        },
        320: {
            spaceBetween: 20,
        }
    }
});

// jQuery function
$(document).ready(function() {
    //Бургер меню
    function headerBurger (){
        $('.header-burger').click(function () {
            $('.header-burger').toggleClass('open');
            $('.header').toggleClass('active');        
            $('.header').find('nav').toggleClass('active');         
            if($('.header').hasClass('active')) {
                $('html').addClass('hidden');
            } else {
                $('html').removeClass('hidden');
            }
        });
    };
    headerBurger(); 
});