var intro = document.getElementById("intro");
var Products = document.getElementById("productPanal");
var homeBtn = document.getElementById("homeBtn");

var li = document.querySelectorAll("#menu li");
var allProdact = document.querySelectorAll(".product");
var newProdact = document.querySelectorAll(".new");
var officeProdact = document.querySelectorAll(".office");


function goToProducts() {
    intro.style.display = "none";
    Products.style.display = "block";
}

function goToIntro() {
    Products.style.display = "none";
    intro.style.display = "block";
}

homeBtn.addEventListener("click", function () {
    goToIntro()
});

for (let i = 0; i < li.length; i++) {
    li[i].addEventListener("click", function () {
        menu.style.transform = "translateX(100%)"
        goToProducts();
    })
}

function hideAllProducts() {
    for (let i = 0; i < allProdact.length; i++) {
        allProdact[i].style.display = "none";
    }
}

li[1].addEventListener("click", function () {

    hideAllProducts();
    for (let i = 0; i < newProdact.length; i++) {
        newProdact[i].style.display = "flex";
    }
});
li[4].addEventListener("click", function () {

    for (let i = 0; i < allProdact.length; i++) {
        allProdact[i].style.display = "flex";
        console.log("gggggggggg");

    }
});

var menuBtn = document.getElementById("Hamburger");
var menu = document.getElementById("menu");
var menuOpen = false;

menuBtn.addEventListener("click", function () {
    if (menuOpen === false) {
        menuOpen = true;
        menu.style.transform = "translateX(0)"
    } else {
        menuOpen = false;
        menu.style.transform = "translateX(100%)"
    }
});