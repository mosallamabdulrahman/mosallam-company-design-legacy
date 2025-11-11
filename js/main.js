// NavBar Menu
function toggleNavbar() {
  const navbarMobile = document.getElementById('navbar-mobile');
  navbarMobile.classList.toggle('show');
  
  const switcher = document.querySelector('.gt_switcher_wrapper');
  if (switcher) {
    if (switcher.style.display === 'block') {
      switcher.style.setProperty('display', 'none', 'important');
    } else {
      switcher.style.setProperty('display', 'block', 'important');
    }
  }
}

// Button Up
document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button");

  window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
      scrollButton.classList.remove("hidden-scroll");
      scrollButton.classList.add("visible-scroll");
    } else {
      scrollButton.classList.remove("visible-scroll");
      scrollButton.classList.add("hidden-scroll");
    }
  });
});

// Scroll To Top
document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.querySelector(".scroll-button");
  
  window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
      scrollButton.classList.remove("hidden-scroll");
      scrollButton.classList.add("visible-scroll");
    } else {
      scrollButton.classList.remove("visible-scroll");
      scrollButton.classList.add("hidden-scroll");
    }
  });
  
  scrollButton.addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
