function showMenu() {
    var shopCategory = document.getElementById("shop-item");
    shopCategory.style.display = "block";
}

function closeNav() {
    var shopCategory = document.getElementById("shop-item");
    shopCategory.style.display = "none";
}

document.onclick = function (e) {
    if (e.target.id !== 'shop-aa') {
        if (e.target.offsetParent && e.target.offsetParent.id !== 'mySidebar')
            closeNav()
    }
}