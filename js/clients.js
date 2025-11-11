document.addEventListener("DOMContentLoaded", function () {
    // تهيئة السوايبر الأول
    const firstSwiperContainer = document.querySelector('.first-swiper-container');
    const firstSlideCount = firstSwiperContainer.querySelectorAll('.swiper-slide').length;

    // تهيئة السوايبر الثاني
    const secondSwiperContainer = document.querySelector('.second-swiper-container');
    const secondSlideCount = secondSwiperContainer.querySelectorAll('.swiper-slide').length;

    const swiperSettings = {
        slidesPerView: 6, // عدد الشرائح الظاهرة
        spaceBetween: 10,
        loop: true,
        loopedSlides: null, // سيتم تحديد القيمة ديناميكيًا لكل سوايبر
        autoplay: {
            delay: 0, // تشغيل بدون تأخير
            disableOnInteraction: false, // عدم إيقاف التشغيل التلقائي عند التفاعل
            stopOnLastSlide: false // عدم التوقف عند الشريحة الأخيرة
        },
        speed: 4000, // سرعة الحركة بين الشرائح
        freeMode: {
            enabled: true,
            momentum: false
        },
        grabCursor: true,
        resistanceRatio: 0,
        rtl: true,
        breakpoints: {
            1024: { slidesPerView: 6 },
            768: { slidesPerView: 4 },
            480: { slidesPerView: 3 },
            320: { slidesPerView: 2 }
        },
        on: {
            init: function () {
                // بدء التشغيل التلقائي عند التهيئة
                this.autoplay.start();
            },
            touchStart: function () {
                // استئناف التشغيل التلقائي فور بدء التفاعل
                this.autoplay.start();
            },
            touchEnd: function () {
                // استئناف التشغيل التلقائي بعد انتهاء التفاعل (مثل السحب)
                this.autoplay.start();
            },
            transitionEnd: function () {
                // استئناف التشغيل التلقائي بعد كل انتقال
                this.autoplay.start();
            },
            click: function () {
                // استئناف التشغيل التلقائي عند النقر على أي مكان في الـ swiper
                this.autoplay.start();
            }
        }
    };

    // تعيين loopedSlides ديناميكيًا للسوايبر الأول
    swiperSettings.loopedSlides = firstSlideCount;
    const firstSwiper = new Swiper('.first-swiper-container', swiperSettings);

    // تعيين loopedSlides ديناميكيًا للسوايبر الثاني
    swiperSettings.loopedSlides = secondSlideCount;
    const secondSwiper = new Swiper('.second-swiper-container', swiperSettings);
});