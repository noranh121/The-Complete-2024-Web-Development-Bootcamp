var numOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i< numOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        makeSound(this.innerHTML);
        changeFont(this.innerHTML);
    });
} 

document.addEventListener("keydown", function(event) {
    makeSound(event.key)
    changeFont(event.key);
});

function makeSound (letter) {
    var audio;
    switch (letter) {
        case "w":
            audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log(letter);
            break;
    }
}

function changeFont(key) {
    var currentButton = document.querySelector("." + key);
    currentButton.classList.add("pressed");
    setTimeout(function() {currentButton.classList.remove("pressed");},100);
}
