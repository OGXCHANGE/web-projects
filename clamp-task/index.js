//Get the Top button:
mybutton = document.getElementById("scroll-to-top-btn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
 scrollFunction();
};
function scrollFunction() {
 if (document.body.scrollTop > 20 || document.documentElement.    scrollTop > 20) {
    mybutton.style.display = "block";
 } else {
  mybutton.style.display = "none";
 }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener('click', function() {
    // scroll to the top of the page smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });