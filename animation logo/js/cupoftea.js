var openPopUp = document.getElementById("cart")
var theCheckOut = document.getElementById("check-out")
var theCloseCheckOut = document.getElementById("close-button")

console.log(openPopUp);
console.log(theCheckOut);
console.log(theCloseCheckOut);

function togglePopUp() {
    theCheckOut.classList.toggle("pop-up-is-showing");
}

function closePopUp() {
    theCheckOut.classList.toggle("pop-up-is-showing");
}

openPopUp.addEventListener("click", togglePopUp);
theCloseCheckOut.addEventListener("click", closePopUp);