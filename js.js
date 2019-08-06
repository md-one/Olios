var btn = document.getElementById("Hamburger");
var svg = document.querySelector("#Hamburger svg")

var menuOpen = false;




btn.addEventListener("click", function () {

    var menu = document.getElementById("menu");



    if (menuOpen === false) {
        menuOpen = true;

        menu.style.transform = "translateX(0)"


    } else {
        menuOpen = false;

        menu.style.transform = "translateX(100%)"

    }
});