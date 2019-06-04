var map = document.getElementById('map');
if (map) {
    ymaps.ready(function init() {
        var myMap = new ymaps.Map("map", {
            center: [56.866286, 35.925583],
            zoom: 15
        });
        myMap.controls.remove('zoomControl');
        myMap.controls.remove('rulerControl');
        myMap.controls.remove('geolocationControl');
        myMap.controls.remove('routeButtonControl');
        myMap.controls.remove('trafficControl');
        myMap.controls.remove('typeSelector');
        myMap.controls.remove('fullscreenControl');
        myMap.controls.remove('searchControl');

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: '',
            balloonContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/marker.svg',
            // Размеры метки.
            iconImageSize: [60, 90],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-30, -70]
        }),
            myMap.geoObjects
                .add(myPlacemark)
    });
}
var mySlider = $('.threads__slider--container');
mySlider.each(function () {
    var swiper = new Swiper(this, {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        pagination: {
            el: '.threads__pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },
    });
});

var mainSlider = $('.reception__slider');
mainSlider.each(function () {
    var mainSwiper = new Swiper(this, {
        slidesPerView: 'auto',
        spaceBetween: 30,
        slidesPerGroup: 1,
        initialSlide: 1,
        centeredSlides: true,
        loop: false,
        pagination: {
            el: '.reception__pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.reception__slider-next',
            prevEl: '.reception__slider-prev',
        } ,
        breakpoints: {

            768: {
                slidesPerView: 1,
                spaceBetween: 30,
            }
        }

    });
});
$('.aesthetic__item--cosmetics').on('click', function (e) {
    e.preventDefault();
    $('.aesthetic__items').toggleClass('aesthetic__items--open')
});
$(".modal__window").each(function () {
    $(this).wrap('<div class="modal__overlay"></div>')
});

$(".open-modal").on('click', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation;

    var $this = $(this),
        modal = $($this).data("modal");

    $(modal).parents(".modal__overlay").addClass("open");
    setTimeout(function () {
        $(modal).addClass("open");
    }, 350);

    $(document).on('click', function (e) {
        var target = $(e.target);

        if ($(target).hasClass("modal__overlay")) {
            $(target).find(".modal__window").each(function () {
                $(this).removeClass("open");
            });
            setTimeout(function () {
                $(target).removeClass("open");
            }, 350);
        }

    });

});

$(".close-modal").on('click', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation;

    var $this = $(this),
        modal = $($this).data("modal");

    $(modal).removeClass("open");
    setTimeout(function () {
        $(modal).parents(".modal__overlay").removeClass("open");
    }, 350);

});
$('.header__menu').click(function (e) {
    e.preventDefault();
    $('.menu').toggleClass('active');
});
$('.menu__close').click(function (e) {
    e.preventDefault();
    $('.menu').toggleClass('active');

});
