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
