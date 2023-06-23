// Change header's color on scrolling
const header = document.querySelector(".header");
const headerHeight = header.offsetHeight;

window.addEventListener("scroll", () => {
  const scrolledHeight = window.scrollY;

  if (scrolledHeight > headerHeight) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Show side drawer
const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");
const sideDrawer = document.querySelector(".drawer-content");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {
  sideDrawer.classList.toggle("drawer-content-shown");
  overlay.classList.toggle("overlay-shown");
});

closeBtn.addEventListener("click", () => {
  sideDrawer.classList.toggle("drawer-content-shown");
  overlay.classList.toggle("overlay-shown");
});

overlay.addEventListener("click", () => {
  sideDrawer.classList.toggle("drawer-content-shown");
  overlay.classList.toggle("overlay-shown");
});

// Scroll to top
const scrollToTopBtn = document.querySelector(".roll-to-top");

window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
