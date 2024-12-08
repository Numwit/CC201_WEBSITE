// Declare variables
// Variables for the navigation bar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navigation');
let header = document.querySelector('header');

var prevScrollpos = window.scrollY;



// Opens and closes the navigation bar
menu.onclick = () => {
    navbar.classList.toggle('open');
}

// Listens for scroll
window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.offsetY / (document.body.offsetHeight - window.innerHeight));
  }, false);

// Code taking from w3schools
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos && currentScrollPos === 0) {
    document.querySelector('header').style.top = "0";
} else {
    document.querySelector('header').style.top = "-150px";
}
  prevScrollpos = currentScrollPos;
}

