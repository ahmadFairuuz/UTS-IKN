//toggle class active
const navbarNav = document.querySelector(".navbar-nav");

//hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik mana saja untuk menutup hamburger
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target))
    navbarNav.classList.remove("active");
});

// TIDAK BISA KLIK KANAN 
src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"

jQuery(document).ready(function(){
  jQuery(function() {
    jQuery(this).bind("contextmenu", function(event) {
        event.preventDefault();
        lert('Kamu dilarang klik kanan ya! Jangan coba-coba')
    });
  });
});
