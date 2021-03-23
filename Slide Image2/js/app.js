/* ========================= Elements ========================= */

const preBtn = document.getElementById("pre");
const nextBtn = document.getElementById("next");
const slider = document.querySelector(".slider-container__slides");
const slides = document.querySelectorAll(".slider-container__slides .slide");
const options = document.querySelectorAll(".slider-container__option-btn .option");
const backgrounds = document.querySelectorAll(".background img");

/* ========================= Elements ========================= */

/* ========================= Events ========================= */

options.forEach(option => {
    option.addEventListener("click", selectedOption);
});

preBtn.addEventListener("click", preSlide);
nextBtn.addEventListener("click", nextSlide);

slider.addEventListener("transitionend", () => {
    
    if (index === 0) {
        slider.style.transition = "none";
        index = slides.length - 2;
        updateSlides();
    }

    if (index === slides.length - 1) {
        slider.style.transition = "none";
        index = 1;
        updateSlides();
    }
});
/* ========================= Events ========================= */


/* ========================= Functions ========================= */

function slidesAnimation() {
    slider.style.transition = "2s";
    updateSlides();
    updateOption();
    updateBackground();
}

function updateSlides() {
    slider.style.transform = `translateX(${-slideWidth * index + "px"})`;
}

function updateBackground() {
    backgrounds.forEach(bg => bg.classList.remove("show"));
    backgrounds[op_index].classList.add("show");
}

function updateOption() {
    options.forEach(option => option.classList.remove("colored"));
    options[op_index].classList.add("colored");
}

function selectedOption() {
    op_index = parseInt(this.getAttribute("index"));
    index = op_index + 1;

    slidesAnimation();
}

function preSlide() {
    if (index >= 1) {
        index--;
        op_index--;

        if (op_index === -1) {
            op_index = options.length - 1;
        }

        slidesAnimation();
    }   
}

function nextSlide() {
    if (index <= slides.length - 2) {
        index++;
        op_index++;

        if (op_index === options.length) {
            op_index = 0;
        }

        slidesAnimation();
    }
}

/* ========================= Functions ========================= */

/* ========================= Execute ========================== */

let index = 1;
let op_index = 0;
const slideWidth = slides[0].clientWidth;

updateSlides();
updateOption();
updateBackground();
const autoNextSlide = setInterval(nextSlide, 5000);

/* ========================= Execute ========================== */