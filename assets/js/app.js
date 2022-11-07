const swiperProject = new Swiper(".project-slider", {
    slidesPerView: 'auto',
    spaceBetween: 50,
    freeMode: true,
    grabCursor: true,
    navigation: {
        prevEl: ".project-slider-panel__arrow.prev",
        nextEl: ".project-slider-panel__arrow.next",
    },
   /*breakpoints: {
        // when window width is >= 320px
        1240: {
            spaceBetween: 60,
           // freeMode: false,
        },
        992: {
            spaceBetween: 30,
            slidesPerView: 3,
        },
        576: {
            spaceBetween: 30,
            slidesPerView: 2,
        },
        320: {
            spaceBetween: 30,
            slidesPerView: 1,
        }
    }*/
});

// jQuery function
$(document).ready(function() {
    //Бургер меню
    function headerBurger (){
        $('.header-burger').click(function () {
            $('.header-burger').toggleClass('open');
            $('.header').toggleClass('active');
            $('.header-info').toggleClass('active');
            
            if($('.header').hasClass('active')) {
                $('html').addClass('hidden');
            } else {
                $('html').removeClass('hidden');
            }
        });
    };
    headerBurger();
    // Валидация сайта
    function formValidate() {
        $('#popup-consult').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: {
                    required: true,
                    minlength: 5
                },
            },
            messages: {
                name: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 2 символов"
                },
                phone: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 5 символов"
                },
            }
        });
    };
    formValidate();   
});