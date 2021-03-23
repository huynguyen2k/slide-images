/* ============================ elements ============================ */

const slides = document.querySelectorAll(".slider__slide");
const linkBtns = document.querySelectorAll(".slider__navigation .link-btn");

/* ============================ elements ============================ */


/* ============================ functions ============================ */

const activeSlide = function(index) {
    slides.forEach(slide => slide.classList.remove("slider__slide--active"));
    linkBtns.forEach(btn => btn.classList.remove("btn-active"));
    slides[index].classList.add("slider__slide--active");
    linkBtns[index].classList.add("btn-active");
}

const autoNextSlide = function() {
    currentSlide++;

    if (currentSlide === slides.length) {
        currentSlide = 0;
    }
    activeSlide(currentSlide);
}

/* ============================ functions ============================ */


/* ============================ events ============================ */

linkBtns.forEach((item, index) => {
    item.addEventListener("click", () => {
        currentSlide = index;
        activeSlide(currentSlide);
    });
});

/* ============================ events ============================ */


/* ============================ execute ============================ */

let currentSlide = 0;
activeSlide(currentSlide);
setInterval(autoNextSlide, 5000);


/* ============================ execute ============================ */