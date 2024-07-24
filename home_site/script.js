var headerBg = document.getElementByClassName("background-image")
window.addEventListener (
    "scroll", function() {
    headerBg.style.opacity = 1 - +window.pageYOffset/550 + ''
    headerBg.style.top = +window.pageYOffset + 'px'
})