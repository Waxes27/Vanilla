console.log("attached icons.js");


var share = document.querySelector("#share");
var add = document.querySelector("#add");



function redirectShare() {
    console.log(window.location);
}

function redirectAdd() {
    console.log(add);
}




share.onclick = function() { redirectShare() };
add.onclick = function() { redirectAdd() };