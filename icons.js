console.log("attached icons.js");

let apiKey = '1be9a6884abd4c3ea143b59ca317c6b2';

var share = document.querySelector("#share");
var add = document.querySelector("#add");



function redirectShare() {
    $.getJSON('https://ipgeolocation.abstractapi.com/v1/?api_key=' + apiKey, function(data) {
        console.log(JSON.stringify(data, null, 2));
    });
}

function redirectAdd() {
    console.log(add);
}




share.onclick = function() { redirectShare() };
add.onclick = function() { redirectAdd() };