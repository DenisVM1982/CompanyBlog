var warningCloseButton = document.querySelector(".warning_close--js")

warningCloseButton.addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById("warning").style.visibility = "hidden";
})

function sandwichToggleMenu() {
    var navMenu = document.getElementById("nav-sadnwich_menu");
    if (navMenu.style.visibility == "hidden") {
        navMenu.style.visibility = "visible";
    } else if (navMenu.style.visibility == "visible") {
        navMenu.style.visibility = "hidden";
    } else navMenu.style.visibility = "visible";
}

function displayWindowSize() {
    navMenu.style.visibility = "hidden";
}

window.addEventListener("resize", displayWindowSize);