var playing = false;
var score;
var action;
var timeRemaning;
var corectAns;

// if we are click on start/ restart button

document.getElementById("start").onclick = function () {
  if (playing == true) {
    location.reload(); // reload page
  } else {
    // change mode to playing

    playing = true;

    // if we are not playing
    // score are 0

    score = 0;
    document.getElementById("scorevalue").innerHTML = score;

    // show count down box

    // document.getElementById("time").style.display = "block";

    // We do the shortcut call funtion here the same of the avobe line

    // Calling here the show funtion

    show("time");

    // hide the gameover box

    hide("gameover");

    timeRemaning = 60;
    document.getElementById("timeremaining").innerHTML = timeRemaning;

    // change button to reset
    document.getElementById("start").innerHTML = "Reload Game";

    // strat countdown function
    startCountdown();

    // questuion answer genaret (function)
    genaretQA();
  }
};

// clicking on answer box

for (i = 1; i < 5; i++) {
  document.getElementById("box" + i).onclick = function () {
    // check if playing
    if (playing == true) {
      if (this.innerHTML == corectAns) {
        //yes
        //incres score
        score++;
        document.getElementById("scorevalue").innerHTML = score;
        // hide wrong box and show correct box
        hide("wrong");
        show("corect");
        setTimeout(function () {
          hide("corect");
        }, 1000);
        // generatd new question
        genaretQA();
      }
      // if wrong
      else {
        hide("corect");
        show("wrong");
        setTimeout(function () {
          hide("wrong");
        }, 1000);
      }
    }
  };
}

/////////////////////////      function are exicut here      ////////////////////////

function startCountdown() {
  action = setInterval(function () {
    timeRemaning -= 1;

    document.getElementById("timeremaining").innerHTML = timeRemaning;
    if (timeRemaning == 0) {
      // game over

      stopCountdown();

      // document.getElementById("gameover").style.display = "block";

      // We do the shortcut call funtion here the same of the avobe line

      // calling the show funtion

      show("gameover");

      document.getElementById("gameover").innerHTML =
        "<p>Game over</p><p>Your score is " + score + "</p>";

      // document.getElementById("time").style.display = "none";

      // We do the shortcut call funtion here the same of the avobe line

      // calling the hide funtion

      hide("time");
      hide("corect");
      hide("wrong");

      playing = false;
      document.getElementById("start").innerHTML = "Start Game";
    }
  }, 1000);
}

// call(define) the stopcountdown funtion here
function stopCountdown() {
  clearInterval(action);
}

// funtion //
// creat funtion here for show and hide the loop

function hide(Id) {
  document.getElementById(Id).style.display = "none";
}

function show(Id) {
  document.getElementById(Id).style.display = "block";
}

// define here the question answer function
function genaretQA() {
  var x = 1 + Math.round(9 * Math.random());
  var Y = 1 + Math.round(9 * Math.random());
  corectAns = x * Y;
  document.getElementById("question").innerHTML = x + "x" + Y;
  var correctPosition = 1 + Math.round(3 * Math.random());

  // here we palce correct answer in a box

  document.getElementById("box" + correctPosition).innerHTML = corectAns;

  // here we fell other box with wrog answer

  var answer = [corectAns];

  for (i = 1; i < 5; i++) {
    if (i !== correctPosition) {
      var wrongAns;
      do {
        wrongAns =
          (1 + Math.round(9 * Math.random())) *
          (1 + Math.round(9 * Math.random()));
      } while (answer.indexOf(wrongAns) > -1);

      document.getElementById("box" + i).innerHTML = wrongAns;
      answer.push(wrongAns);
    }
  }
}
