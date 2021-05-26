var NavBtnOpen = document.getElementById("btn-menu-open-responsive");
NavBtnOpen.addEventListener("click", ShowResponsiveMenu);

var NavBtnClose = document.getElementById("btn-menu-close");
NavBtnClose.addEventListener("click", HideResponsiveMenu);

var MenuBlock = document.getElementsByClassName("menu-contents-responsive")[0];


function ShowResponsiveMenu(event) {

    speed = 0.5;
    MenuBlock.style.display = 'flex';
    fadeInResponsive(MenuBlock, speed);
}

function HideResponsiveMenu(event) {

    speed = 0.5;
    fadeOutResponsive(MenuBlock, speed);

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

function fadeOutResponsive(elem, speed) {
        
    var outInterval = setInterval(function(){

        elem.style.opacity = Number(elem.style.opacity) - 0.02;

        if (elem.style.opacity <= 0) {

            elem.style.opacity = 0;
            elem.style.display = "none";
            clearInterval(outInterval);
        }
    }, speed);
}