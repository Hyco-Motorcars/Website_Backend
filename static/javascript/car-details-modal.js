// Get the modal
var modal = document.getElementById("details-modal");

// Get the button that opens the modal
var btn = document.getElementById("details-button-id");

// Get the element that closes the modal
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}