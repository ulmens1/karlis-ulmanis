const square = document.querySelector(`.square`);

window.addEventListener(`scroll`, () => {
    const scrolled = window.pageYOffset;
    const val = scrolled * 0.5;
    square.style.transform = `translateX(${0.45 * val}%)`;
    square.style.borderRadius = `${0.025 * val}%`;
});