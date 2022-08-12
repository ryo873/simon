// alert("Working");
let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;

function nextSequence() {
  // 6. Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
  userClickedPattern = [];

  let randomNumber = Math.floor(Math.random() * 4);

  let randomChoosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChoosenColor);

  $("#" + randomChoosenColor)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  let audio = new Audio("sounds/" + randomChoosenColor + ".mp3");
  audio.play();

  level = level + 1;
  $("#level-title").html("level " + level);
}

$(".btn").on("click", function (event) {
  let userChoosenColor = $(this).attr("id");
  // console.log(userChoosenColor);
  userClickedPattern.push(userChoosenColor);
  console.log(userClickedPattern);

  var audio = new Audio("sounds/" + userChoosenColor + ".mp3");
  audio.play();

  // 2. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
  checkAnswer(userClickedPattern.length - 1);
});

// 1. Create a new function called checkAnswer(), it should take one input with the name currentLevel
function checkAnswer(currentLevel) {
  //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");
    //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
    if (userClickedPattern.length === gamePattern.length) {
      //5. Call nextSequence() after a 1000 millisecond delay.
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("wrong");
    // 1. In the sounds folder, there is a sound called wrong.mp3, play this sound if the user got one of the answers wrong.
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    // 2. In the styles.css file, there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
    $("body").addClass("game-over");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    $("h1").html("Game Over, Press A Key to Restart");

    // 3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
    startOver();

    // All going well, you should end up with this flash effect:
  }
}

// 1. Create a new function called startOver().
function startOver() {
  level = 0;
  gamePattern = [];
  startedGame = true;
}
// 2. Call startOver() if the user gets the sequence wrong.

function playSound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

let startedGame = true;

$(document).on("click", function (event) {
  console.log(event);
  if (startedGame === true) {
    $("#level-title").html("Level " + level);
    nextSequence();
  }

  return (startedGame = false);
});

$(document).on("keydown", function (event) {
  let a = event.key;
  if (a === "a" || a === "A") {
    if (startedGame === true) {
      $("#level-title").html("Level " + level);
      nextSequence();
    }
  }
  console.log(gamePattern);

  return (startedGame = false);
});

// function tap on mobile
$(document).on("tap", function (event) {
  if (startedGame === true) {
    $("#level-title").html("level " + level);
    nextSequence();
  }

  return (startedGame = false);
});


// At this point, it might be worth reviewing how the Simon game works.

// Firstly, the game shows the first colour in the sequence (blue). The user clicks on the blue button.

// Next, the game shows the next colour (red), the user has to remember the sequence is blue, red and so on and so forth.

// If the user messes up the sequence, then the game ends.

// You can either try to figure out how to achieve this logic by trying to write the code yourself or you can follow the challenge steps below

let a = ["green", "red"];
let b = ["green", "red"];
let c1 = JSON.stringify(a);
let c2 = JSON.stringify(b);
if (c1 === c2) {
  console.log("true");
} else {
  console.log("false");
}
