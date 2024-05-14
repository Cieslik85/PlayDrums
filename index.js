

//listen for click on the button event
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    createAnimation(buttonInnerHTML);
  });
}

//listen for keyboard press event
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  createAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1Sound = new Audio("sounds/tom-1.mp3");
      tom1Sound.play();
      break;

    case "a":
      var tom2Sound = new Audio("sounds/tom-2.mp3");
      tom2Sound.play();
      break;

    case "s":
      var tom3Sound = new Audio("sounds/tom-3.mp3");
      tom3Sound.play();
      break;

    case "d":
      var tom4Sound = new Audio("sounds/tom-4.mp3");
      tom4Sound.play();
      break;

    case "j":
      var crashSound = new Audio("sounds/crash.mp3");
      crashSound.play();
      break;

    case "k":
      var kickBassSound = new Audio("sounds/kick-bass.mp3");
      kickBassSound.play();
      break;

    case "l":
      var snareSound = new Audio("sounds/snare.mp3");
      snareSound.play();
      break;

    default:
      console.log(buttonInnerHTML);
      break;
  }
}

function createAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
