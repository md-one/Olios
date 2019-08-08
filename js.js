var intro = document.getElementById("intro");
var Products = document.getElementById("productPanal");
var search = document.getElementById("searchPanal");
var homeBtn = document.getElementById("homeBtn");
var li = document.querySelectorAll("#menu li");

var allProdact = document.querySelectorAll(".product");
var livingRoomProdact = document.querySelectorAll(".livingRoom");
var officeProdact = document.querySelectorAll(".office");
var bedRoomProdact = document.querySelectorAll(".bedRoom");


function goToProducts() {
    intro.style.display = "none";
    Products.style.display = "block";
}

function goToIntro() {
    Products.style.display = "none";
    intro.style.display = "block";
}

homeBtn.addEventListener("click", function () {
    goToIntro();
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

li[0].addEventListener("click", function () {

    hideAllProducts();
    for (let i = 0; i < bedRoomProdact.length; i++) {
        bedRoomProdact[i].style.display = "flex";
    }
});

li[1].addEventListener("click", function () {

    hideAllProducts();
    for (let i = 0; i < officeProdact.length; i++) {
        officeProdact[i].style.display = "flex";
    }
});

li[2].addEventListener("click", function () {

    hideAllProducts();
    for (let i = 0; i < livingRoomProdact.length; i++) {
        livingRoomProdact[i].style.display = "flex";
    }
});

li[3].addEventListener("click", function () {

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