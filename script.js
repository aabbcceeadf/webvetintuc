
//auto slide
var slideIndex = 0;
boxgiua();
function boxgiua(){
    var i;
    var slides = document.getElementsByClassName("row tintuc2");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display ="none";

    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(boxgiua, 2000);
}
