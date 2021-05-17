
var DropdownMenu = document.getElementById("dropdown-sub-menu");
DropdownMenu.addEventListener("mouseover", ShowSubMenu);

function ShowSubMenu(event) {

    var MenuBlock = document.getElementsByClassName("dropdown")[0];
    var speed = 2.5;

    MenuBlock.style.visibility = "visible";
    fadeIn(MenuBlock,speed);

}

window.onclick = function(event) {
    var SubMenuBlock = document.getElementsByClassName("dropdown")[0];

    if (event.target != SubMenuBlock) {
        var speed = 0.1;
        fadeOut(SubMenuBlock,speed);
    }
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