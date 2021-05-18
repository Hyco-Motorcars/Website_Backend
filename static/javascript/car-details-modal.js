// // Get the modal
// var allmodals = document.getElementsByClassName("details-modal");

// // Get the button that opens the modal
// var btn = document.getElementsByClassName("card-image-section")[0];

// // Get the element that closes the modal
// var span = document.getElementsByClassName("close")[0];


// btn.onclick = function() {
//     var btnID = btn.id;

//     for ()
//     modal.style.display = "block";
// }

// span.onclick = function() {
//     modal.style.display = "none";
//     modal.style.zIndex = "0"
// }

// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none"
//         modal.style.zIndex = "0"
//     }
// }

var modal_in_use;
var closeBtn = document.getElementsByClassName("close");

document.querySelectorAll('.details-button').forEach(btn_item => {

    btn_item.onclick = function() {
        var modals = document.getElementsByClassName('car-details-modal');
        var btn_index = btn_item.id.charAt(btn_item.id.length-1);

        for (i=0; i < modals.length; i++) {
            var modal_index = modals[i].id.charAt(modals[i].id.length-1);
            if (modal_index == btn_index) {
                modals[i].style.display = "block";
                modal_in_use = modals[i];
            }
        }
            
    }
})

window.onclick = function(event) {
    if (event.target == modal_in_use) {
        modal_in_use.style.display = "none"
    }
}

document.querySelectorAll('.close').forEach(item => {
    item.onclick = function() {
        modal_in_use.style.display = "none";
    }
  })