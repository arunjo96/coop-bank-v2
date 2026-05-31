

// =====carousel-------

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});



// ========scroll to top button========


   const scrollBtn = document.getElementById("scrollTopBtn");

   window.addEventListener("scroll", () => {
     if (window.scrollY > 200) {
       scrollBtn.style.display = "block";
     } else {
       scrollBtn.style.display = "none";
     }
   });

   scrollBtn.addEventListener("click", () => {
     window.scrollTo({
       top: 0,
       behavior: "smooth",
     });
   });

  