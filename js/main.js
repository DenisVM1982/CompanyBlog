function warningClose() {
    document.getElementById("warning").style.visibility = "hidden";
}

function sandwichMenuOpen() {
    console.log("visible ");
    if(document.getElementById("nav-sadnwich_menu").style.visibility == "hidden") {
        document.getElementById("nav-sadnwich_menu").style.visibility = "visible";
    } else if (document.getElementById("nav-sadnwich_menu").style.visibility == "visible") {
        document.getElementById("nav-sadnwich_menu").style.visibility = "hidden";
    } else document.getElementById("nav-sadnwich_menu").style.visibility = "visible" ;   
}

function displayWindowSize() {
    document.getElementById("nav-sadnwich_menu").style.visibility = "hidden";
}

window.addEventListener("resize", displayWindowSize);


