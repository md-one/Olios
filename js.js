var intro = document.getElementById("intro");
var Products = document.getElementById("products");
var Product = document.getElementById("product");
var searchPanal = document.getElementById("searchPanal");
var homeBtn = document.getElementById("homeBtn");
var searchBtn = document.getElementById("searchBtn");
var li = document.querySelectorAll("#menu li");

var allProdact = document.querySelectorAll(".product");
var livingRoomProdact = document.querySelectorAll(".livingRoom");
var officeProdact = document.querySelectorAll(".office");
var bedRoomProdact = document.querySelectorAll(".bedRoom");

function colseAllWindows() {
    Products.style.display = "none";
    Product.style.display = "none";
    intro.style.display = "none";
    searchPanal.style.display = "none";
}

homeBtn.addEventListener("click", function () {
    colseAllWindows();
    intro.style.display = "block";
});

searchBtn.addEventListener("click", function () {
    colseAllWindows();
    searchPanal.style.display = "block";
});

for (let i = 0; i < li.length; i++) {
    // change how deal with the mune after li click
    li[i].addEventListener("click", function () {
        if (window.matchMedia("(min-width: 768px)").matches) {
            menu.style.transform = "translateX(100%)";
        } else {
            menu.style.display = "none";
        }

        colseAllWindows();
        Products.style.display = "block";
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

var phonemMenuBtn = document.getElementById("phoneHamburger");

phonemMenuBtn.addEventListener("click", function () {
    if (menuOpen === false) {
        menuOpen = true;
        menu.style.display = "flex"
    } else {
        menuOpen = false;
        menu.style.display = "none"
    }
});

// to show product in sing product page
function showproduct(obj) {
    colseAllWindows();
    Product.style.display = "block";

    var img = obj.querySelector("img").src;
    var prodectimg = document.querySelector("#product .img img");
    prodectimg.src = img;

    var h4 = obj.querySelector(".text .name").outerText;
    var name = document.querySelector("#product .text .name");
    name.innerText = h4;

    var p = obj.querySelector(".text .description").outerText;
    var description = document.querySelector("#product .text .description");
    description.innerText = p + " Lorem ipsum dolor";


    var h5 = obj.querySelector(".text .cost").outerText;
    var Cost = document.querySelector("#product .text .cost");
    Cost.innerText = h5;

}