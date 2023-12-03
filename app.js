const btn = document.querySelector(".btn");
const showbar = document.querySelector(".side-bar");
btn.addEventListener("click", () => {
  showbar.classList.toggle("show-sidebar");
});
// ================================ //
const links = document.querySelectorAll(".nav-link li a");

// Loop through each anchor link
links.forEach((link) => {
  // Listen for click event
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.textContent.toLowerCase();

    const targetSection = document.getElementById(targetId);

    const offsetTop = targetSection.offsetTop;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  });
});
// ============================= //
ScrollReveal({
  reset: true,
  ditance: "60px",
  duration: 2500,
  easing: "ease-in-out",
});
ScrollReveal().reveal(".about-info", { delay: 100 }, { origin: "right" });
ScrollReveal().reveal(".about-img", { delay: 100 }, { origin: "left" });
// ========================= //
document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "./images/hero.jpg",
    "./images/skyline2.jpg",
    "./images/skyline3.jpg",
  ]; // Add more image URLs as needed
  const hero = document.querySelector(".hero");
  let currentIndex = 0;

  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateBackground();
  }

  function updateBackground() {
    hero.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.721), rgba(0, 0, 0, 0.455)), url(${images[currentIndex]})`;
    hero.style.backgroundPosition = "100% 50%";
    // Trigger reflow to restart the transition
    void hero.offsetWidth;
    hero.style.backgroundPosition = "0% 50%";
  }

  setInterval(nextSlide, 6000); // Change background every 6 seconds (adjust as needed)
});
