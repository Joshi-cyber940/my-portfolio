const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

menuBtn.addEventListener("click", function() {
    mobileMenu.classList.toggle("active");
});
function showPage(page){
    const sections=document.querySelectorAll("main section");

    sections.forEach(function (section){
        section.style.display="none"
    })
        const selectedSection=document.getElementById(page);

    if(selectedSection){
        selectedSection.style.display="block";
    }

        mobileMenu.classList.remove("active");
      window.scrollTo(0, 0)  
}