// Back to top button visibility toggle
window.onscroll = function() {
    const backToTopButton = document.getElementById("back-to-top");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Scroll to top on button click
document.getElementById("back-to-top").onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
  document.addEventListener('DOMContentLoaded', function () {
    const petBotCarousel = document.querySelector('#petBotCarousel');

    const carousel = new bootstrap.Carousel(petBotCarousel, {
      interval: 4000,       // 4 seconds per slide
      ride: 'carousel',     // Start automatically
      wrap: true,           // Loop slides
      pause: false          // Don’t pause on hover
    });
  });


