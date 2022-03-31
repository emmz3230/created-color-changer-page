const root = document.documentElement;
const display = document.querySelector(".display");
console.log(display);
root.addEventListener('mousemove', e => {
    let x = e.clientX / innerWidth,
        y = e.clientY / innerWidth;
    x = Math.floor(Math.sqrt(x) * 230);
    root.style.setProperty('--h', x)
    display.innerHTML= `HSL(${x = null ? 255 : x}, 80%, 33%)`;
});