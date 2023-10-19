// Navbar JS

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  // Add a scroll event listener
  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;

    // Define the top positions of each section
    const homeTop = document.getElementById("home").offsetTop;
    const productsTop = document.getElementById("products").offsetTop;
    const specialTop = document.getElementById("special").offsetTop;
    const testimonialTop = document.getElementById("testimonial").offsetTop;
    const contactTop = document.getElementById("contact").offsetTop;

    // Check the scroll position and update the active link
    if (scrollPosition >= homeTop && scrollPosition < productsTop) {
      setActiveLink(navLinks, 0); // Home
    } else if (scrollPosition >= productsTop && scrollPosition < specialTop) {
      setActiveLink(navLinks, 1); // Products
    } else if (
      scrollPosition >= specialTop &&
      scrollPosition < testimonialTop
    ) {
      setActiveLink(navLinks, 2); // Special
    } else if (
      scrollPosition >= testimonialTop &&
      scrollPosition < contactTop
    ) {
      setActiveLink(navLinks, 3); // Testimonial
    } else if (scrollPosition >= contactTop) {
      setActiveLink(navLinks, 4); // Contact
    }
  });
});

// Function to set the active link in the navigation
function setActiveLink(navLinks, activeIndex) {
  navLinks.forEach((link, index) => {
    if (index === activeIndex) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// SPECIAL JS

let dayItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");

let countDown = () => {
  let futureDate = new Date("25 December 2023");
  let currentDate = new Date();
  let myDate = futureDate - currentDate;

  let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
  let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
  let min = Math.floor(myDate / 1000 / 60) % 60;
  let sec = Math.floor(myDate / 1000) % 60;

  dayItem.innerHTML = days;
  hoursItem.innerHTML = hours;
  minItem.innerHTML = min;
  secItem.innerHTML = sec;
};

countDown();
setInterval(countDown, 1000);

//Scroll Back to Top

function scrollTopBack() {
  const scrollTopButton = document.querySelector("#scrollUp");
  window.onscroll = function () {
    const scroll = document.documentElement.scrollTop;
    if (scroll >= 250) {
      scrollTopButton.classList.add("scrollActive");
    } else {
      scrollTopButton.classList.remove("scrollActive");
    }
  };
}

scrollTopBack();

// Function to close the Bootstrap navbar menu

let navLinks = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});

// function closeNavbar() {
//   const navbar = document.querySelector(".navbar-collapse");
//   if (navbar.classList.contains("show")) {
//     navbar.classList.remove("show");
//   }
// }

// // Add a click event listener to the section links
// const sectionLinks = document.querySelectorAll(".nav-link");
// sectionLinks.forEach((link) => {
//   link.addEventListener("click", closeNavbar);
// });
