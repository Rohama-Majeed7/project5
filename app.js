const btn = document.querySelector(".btn");
const showbar = document.querySelector(".side-bar");
const cancel = document.querySelector(".cancel");
btn.addEventListener("click", () => {
  showbar.classList.add("show-sidebar");
});
cancel.addEventListener("click", () => {
  showbar.classList.remove("show-sidebar");
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
const slider = document.querySelector(".slider");
let slideIndex = 0;

function nextSlide() {
  slideIndex = (slideIndex + 1) % slider.children.length;
  updateSlider();
}

function updateSlider() {
  const translateValue = -slideIndex * 100 + "%";
  slider.style.transform = "translateX(" + translateValue + ")";
}

setInterval(nextSlide, 8000); // Change slide every 3 seconds (adjust as needed)
// ==================================//

