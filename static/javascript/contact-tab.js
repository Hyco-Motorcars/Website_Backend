document.addEventListener("scroll", function() {
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    FixContactTab(scrollTop);

}, false)

function FixContactTab(scrollTopVal) {

    var ContactTab = document.getElementById("contact-tab-wrapper");

    if (scrollTopVal >= 190) {
        ContactTab.style.position = "fixed";
        ContactTab.style.top = "0px";
        ContactTab.style.width = "100vw";
        ContactTab.style.zIndex = "2";

        if (scrollTopVal >= 290) {
            ContactTab.style.opacity = "0.8";
        }
        else {
            ContactTab.style.opacity = "1";
        }
    }

    else {
        ContactTab.style.position = "absolute";
        ContactTab.style.top = "190px";
        ContactTab.style.width = "100vw";
        ContactTab.style.opacity = "1";
        ContactTab.style.zIndex = "0";
    }
}