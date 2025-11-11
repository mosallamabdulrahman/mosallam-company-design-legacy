document.addEventListener('DOMContentLoaded', function () {
    var checkExist = setInterval(function () {
        if (typeof Swiper !== 'undefined' && document.querySelector('.mySwiper')) {
            clearInterval(checkExist);

            var swiper = new Swiper('.mySwiper', {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                speed: 1000,
                effect: 'fade',
                fadeEffect: { crossFade: true },
                pagination: { el: '.swiper-pagination', clickable: true, type: 'bullets' },
                navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
                autoplay: { delay: 6000, disableOnInteraction: false }
            });
        }
    }, 100);
});
