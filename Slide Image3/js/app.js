let index = 1;

setInterval(changeSlide, 3000);

function changeSlide() {
    index++;
    if (index == 6) {
        index = 1;
    }
    document.getElementById("radio-btn" + index).checked = true;
}