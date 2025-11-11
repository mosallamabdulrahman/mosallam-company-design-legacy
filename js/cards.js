// Carsol
document.addEventListener("DOMContentLoaded", function () {
    new Swiper('.testimonialsSwiper', {
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next-carsol",
            prevEl: ".swiper-button-prev-carsol",
        },
        spaceBetween: 30,
        slidesPerView: 1,
        breakpoints: {
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    });
  
    // تأكد من أن الأوفرلاي لا يتم تطبيقه على الكروت
    document.querySelectorAll('.card-slide').forEach(card => {
        card.style.position = "relative";
        card.style.zIndex = "10";
    });
  });