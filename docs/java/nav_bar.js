
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function goBack() {
    window.history.back();
}

function gotoPage() {
    window.location.href = "http://localhost:8080/signs_pages/hello.html";
}

