let nav = document.querySelector("nav");

window.onscroll = function () {
    if (window.scrollY >= 150) 
        nav.style.backgroundColor = "#181a23";
    else 
        nav.style.backgroundColor = "";
}