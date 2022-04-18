console.log("Attached")

window.onscroll = function() { bottomNavBar() };
var navbar = document.querySelector(".navbar")


var oldOffsetValue = window.pageYOffset;
var newOffsetValue = window.pageYOffset;


function bottomNavBar() {
    newOffsetValue = window.pageYOffset
    navbar.style.transition = "all 2s, opacity 1s";

    if (oldOffsetValue < newOffsetValue) {
        navbar.style.opacity = "0";
        navbar.style.width = "0px";
    } else {
        navbar.style.opacity = "1";
        navbar.style.width = "100%";
    }

    oldOffsetValue = newOffsetValue

}