function search() {
    var mySearch = document.getElementById("mySearch");
    var prodact = document.querySelectorAll("#searchPanal .product");
    var input = document.getElementById("mySearch");
    var filter = input.value.toUpperCase();
    var name;
    for (let i = 0; i < prodact.length; i++) {
        name = prodact[i].getElementsByTagName("h4")[0];
        if (name.innerHTML.toUpperCase().indexOf(filter)) {
            prodact[i].style.display = "none";

        } else {
            prodact[i].style.display = "";
        }
    }

}