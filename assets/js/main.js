

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


  //  const scrollBtn = document.getElementById("scrollTopBtn");

  //  window.addEventListener("scroll", () => {
  //    if (window.scrollY > 200) {
  //      scrollBtn.style.display = "block";
  //    } else {
  //      scrollBtn.style.display = "none";
  //    }
  //  });

  //  scrollBtn.addEventListener("click", () => {
  //    window.scrollTo({
  //      top: 0,
  //      behavior: "smooth",
  //    });
  //  });


    // ===== COUNTER ON SCROLL =====

  const counters = document.querySelectorAll(".counter");

  const startCounter = (counter) => {

    counter.innerText = "0";

    const updateCounter = () => {

      const target = +counter.getAttribute("data-target");
      const current = +counter.innerText;
      const increment = target / 100;

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCounter, 20);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  };


  const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        const counter = entry.target;

        startCounter(counter);

        observer.unobserve(counter); 
      }
    });

  }, {
    threshold: 0.5
  });

 
  counters.forEach(counter => {
    observer.observe(counter);
  });
