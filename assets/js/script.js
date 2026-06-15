window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 100) {
    header.style.boxShadow = "0 5px 15px rgba(0,0,0,.2)";
  } else {
    header.style.boxShadow = "none";
  }
});
const currentPage = window.location.pathname.split("/").pop();

const menuLinks = document.querySelectorAll("nav a");

menuLinks.forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});
