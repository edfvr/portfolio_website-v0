/*--------Hamburger Menu-----------*/
const hamburger = document.querySelector(".hamburger");
const navModal = document.querySelector(".nav-modal");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navModal.classList.toggle("active");
    
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navModal.classList.remove("active");
}))

/*----navbar appears when scrolling up-----*/
const navbar = document.querySelector('.navbar');
let prevScrollpos = window.pageYOffset;

window.addEventListener('scroll', function() {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navModal.classList.remove("active");
  } else {
    hamburger.classList.remove("active");
    navModal.classList.remove("active");
  }
  prevScrollpos = currentScrollPos;
});

/*window.addEventListener('scroll', function() {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.classList.remove('navbar--hidden');
    navModal.classList.remove("active");
  } else {
    navbar.classList.add('navbar--hidden');
    hamburger.classList.remove("active");
    navModal.classList.remove("active");
  }
  prevScrollpos = currentScrollPos;
});*/