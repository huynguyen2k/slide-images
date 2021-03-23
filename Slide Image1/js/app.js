const slider = document.querySelector(".slider__slides");
const slides = document.querySelectorAll(".slider__slides .slide");
const preBtn = document.querySelector(".slider__navigation .btn-pre");
const nextBtn = document.querySelector(".slider__navigation .btn-next");
const transition = "transform 0.4s ease";

slider.style.width = slides.length * 100 + "%";


let count = 1;
let slideSize = slides[0].clientWidth;
slider.style.transform = `translateX(${-(count * slideSize) + 'px'})`;


preBtn.addEventListener("click", () => {
    slider.style.transition = transition;
    if (count >= 1) {
        count--;
        slider.style.transform = `translateX(${-(count * slideSize) + 'px'})`;
    }
});

nextBtn.addEventListener("click", () => {
    slider.style.transition = transition;
    if (count <= slides.length - 2) {
        count++;
        slider.style.transform = `translateX(${-(count * slideSize) + 'px'})`;
    }
});

slider.addEventListener("transitionend", () => {
    if (slides[count] === slides[slides.length - 1]) {
        slider.style.transition = "none";
        count = 1;
        slider.style.transform = `translateX(${-(count * slideSize) + 'px'})`;
    }

    if (slides[count] === slides[0]) {
        slider.style.transition = "none";
        count = slides.length - 2;
        slider.style.transform = `translateX(${-(count * slideSize) + 'px'})`;
    }

});