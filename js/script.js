const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

menuBtn.addEventListener("click", function(event) {

    event.stopPropagation();

    mobileMenu.classList.toggle("active");
});

document.addEventListener("click", function(event){

    
        mobileMenu.classList.remove("active");
    
});