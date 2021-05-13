// var BtnFront = document.getElementsByClassName("card-button-section")[0];
// BtnFront.addEventListener("click", FlipCardFront);

// document.querySelectorAll('.card-button').forEach(item => {
//     item.addEventListener('click', event => {
//         FlipCardFront(event);
//     })
//   })


// function FlipCardFront(event) {

//     var Card = document.getElementsByClassName("car-collection-cards-wrapper")[0];
//     Card.style.transition = "1s";
//     Card.style.transformStyle = "preserve-3d";
//     Card.style.transform = "rotateY(180deg)";
// }



// var BtnBack = document.getElementById("card-button-back");
// BtnBack.addEventListener("click", FlipCardBack);


// function FlipCardBack(event) {

//     var Card = document.getElementsByClassName("car-collection-cards-wrapper")[0];
//     Card.style.transition = "1s";
//     Card.style.transformStyle = "preserve-3d";
//     Card.style.transform = "rotateY(0deg)";

// }


document.querySelectorAll('.card-button-front').forEach(item => {
    item.onclick = function() {
        var FrontTag = item.parentNode.parentNode.children[0].children[0];
        FrontTag.style.visibility = "hidden";
        var Card = item.parentNode.parentNode.parentNode;
        Card.style.transform = "rotateY(180deg)";
    }
  })

  document.querySelectorAll('.card-button-back').forEach(item => {
    item.onclick = function() {
        var FrontTag = item.parentNode.parentNode.parentNode.children[0].children[0].children[0];
        FrontTag.style.visibility = "visible";
        var Card = item.parentNode.parentNode.parentNode;
        Card.style.transform = "rotateY(0deg)";
    }
  })


