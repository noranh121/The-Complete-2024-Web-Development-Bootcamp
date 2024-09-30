
var buttonColours = ["red","blue","green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = -1; 
var started = false;

$(document).keydown(function() {
    if (!started) {
        nextSequence();
        started = true;
    }

});

$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

function nextSequence() {
    userClickedPattern = [];    
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    return audio.play();
}

function animatePress(currentColour) {
    var button = "#" + currentColour;
    $(button).addClass("pressed");
    setTimeout(function() {
        $(button).removeClass('pressed');
    }, 100);
}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] != gamePattern[currentLevel]) {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass('game-over');
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
    else if (userClickedPattern.length === gamePattern.length) {
        setTimeout(function() {
            nextSequence();
        }, 1000);
    }
    
}

function startOver() {
    gamePattern = [];
    userClickedPattern = [];    
    level = -1; 
    started = false;
}




