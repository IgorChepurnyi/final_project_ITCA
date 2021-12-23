//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
document.addEventListener("DOMContentLoaded", midNight(), true)
function midNight() {
    let counterHour = document.getElementById("hour");
    let counterMin = document.getElementById("min");
    let counterSec = document.getElementById("sec");
    const dataNight = new Date();
    let h = dataNight.getHours();
    let m = dataNight.getMinutes();
    let s = dataNight.getSeconds();
    counterHour.innerHTML = (23-h);
    counterMin.innerHTML = (59-m);
    counterSec.innerHTML = (60-s);
    setInterval("midNight()", 1000);
}