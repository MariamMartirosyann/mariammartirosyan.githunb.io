const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector(".navbar-nav");
const links = document.querySelectorAll(".nav-link li")

let hamburgerOpen = false;
hamburger.addEventListener("click", ()=>{
    navLinks.classList.toggle("navbar-nav")
})
hamburger.addEventListener('click', ()=> {
    if(!hamburgerOpen){
        hamburger.classList.add('open');
        hamburgerOpen = true
    } else {
        hamburger.classList.remove('open');
        hamburgerOpen = false;
    }
});
