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
let currentSlide = 0;
function showNextSlide() {
  const slider = document.getElementById("slider");
  const slides = document.getElementsByClassName("slide");
  currentSlide = (currentSlide + 1) % slides.length;
  const offset = -currentSlide * 100 + "%";
  slider.style.transform = "translateX(" + offset + ")";
  setTimeout(showNextSlide, 2000); // Change slide every 2 seconds
}
showNextSlide();
