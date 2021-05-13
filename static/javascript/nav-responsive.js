var MediaQueryMatch = window.matchMedia("(max-width: 1000px)")

if (MediaQueryMatch.matches) {
    var NavBtnOpen = document.getElementById("btn-menu-open");
    NavBtnOpen.addEventListener("click", ShowResponsiveMenu);

    var NavBtnClose = document.getElementById("btn-menu-close-responsive");
    NavBtnClose.addEventListener("click", HideResponsiveMenu);
}

else {
    var NavBtnOpen = document.getElementById("btn-menu-open");
    NavBtnOpen.addEventListener("click", ShowMenu);

    var NavBtnClose = document.getElementById("btn-menu-close");
    NavBtnClose.addEventListener("click", HideMenu);
}

console.log(MediaQueryMatch.matches);



function ShowResponsiveMenu(event) {

    var MenuBlock = document.getElementsByClassName("responsive-nav-menu-wrapper")[0];
    var speed = 2.5;

    MenuBlock.style.zIndex = "2";
    MenuBlock.style.visibility = "visible";
    fadeInResponsive(MenuBlock,speed);
}

function HideResponsiveMenu(event) {

    var MenuBlock = document.getElementsByClassName("responsive-nav-menu-wrapper")[0];
    var speed = 2.5;

    fadeOut(MenuBlock,speed);
    MenuBlock.style.zIndex = "0";
}

function ShowMenu(event) {

    var MenuBlock = document.getElementsByClassName("menu-contents")[0];
    var speed = 2.5;

    NavBtnOpen.style.visibility = "hidden";
    NavBtnClose.style.visibility = "visible";

    MenuBlock.style.visibility = "visible";
    fadeIn(MenuBlock,speed);

}

function HideMenu(event) {

    var MenuBlock = document.getElementsByClassName("menu-contents")[0];
    var speed = 2.5;

    NavBtnOpen.style.visibility = "visible";
    NavBtnClose.style.visibility = "hidden";

    fadeOut(MenuBlock,speed);
}

function fadeIn(elem, speed) {

    var inInterval = setInterval(function(){

        elem.style.opacity = Number(elem.style.opacity) + 0.02;

        if (elem.style.opacity >= 1) {

            elem.style.opacity = 1;
            clearInterval(inInterval);
        }
    }, speed);
}

function fadeInResponsive(elem, speed) {

    var inInterval = setInterval(function(){

        elem.style.opacity = Number(elem.style.opacity) + 0.02;

        if (elem.style.opacity >= 0.8) {

            elem.style.opacity = 0.8;
            clearInterval(inInterval);
        }
    }, speed);
}

function fadeOut(elem, speed) {
        
    var outInterval = setInterval(function(){

        elem.style.opacity = Number(elem.style.opacity) - 0.02;

        if (elem.style.opacity <= 0) {

            elem.style.opacity = 0;
            elem.style.visibility = "hidden";
            clearInterval(outInterval);
        }
    }, speed);
}