var intro = document.getElementById("intro");
var Products = document.getElementById("products");
var Product = document.getElementById("product");
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

function goToProduct() {
    intro.style.display = "none";
    Products.style.display = "none";
    Product.style.display = "block";
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


function showproduct(obj) {
    goToProduct();
    var img = obj.querySelector("img").src;
    var prodectimg = document.querySelector("#product .img img");
    prodectimg.src = img;

    var h4 = obj.querySelector(".text .name").outerHTML;
    var name = document.querySelector("#product .text .name");
    name.innerHTML = h4;

    var p = obj.querySelector(".text .description").outerHTML;
    var description = document.querySelector("#product .text .description");
    description.innerHTML = p;


    var h5 = obj.querySelector(".text .cost").outerHTML;
    var Cost = document.querySelector("#product .text .cost");
    Cost.innerHTML = h5;

}