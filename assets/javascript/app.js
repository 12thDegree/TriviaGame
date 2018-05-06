// Define variables
$(document).ready(function(){
  var count = 0;
  var time = 31;
  var isSelected = false;
  var ticker;
  var correct = 0;
  var incorrect = 0;
  var unanswered = 0;

// Questions and Answer Arrays
  var question = ["What is a great game?",
  "Who was the greatest?", "Whose mother was their mother?", "What was the tallest building in the world in 1923?", "How many points is in a pixel?",
  "What is the only antidote to bordom's cruel grip?", "What is the symbol for help please?", "Who destroyed the last remaining shred of sanity?"];
  var answer = ["Tom marbles garbeld", "Armadillo Pie", "The Great Gatsby", "Gauntlet", "1287", "Phoenix is a Butter bird", "A Lion, A Watch and A wardrobe", "Never ever leave your bottom", "Where, there, everywhere", "Whacky tacky tick tock"];
  var firstChoice = ["Phony Balognie", "Phineas P. GAge", "Moana Crapemyrtyll", "Riddle me this riddle me that", "3450", "No More Tears", "A Badger? no BADGERS!!!!", "Gee Whelsely, I dunno"];
  var secondChoice = ["Gilber Gallery lurkers", "Dexter was great", "Lily pad or pod, it's the same!", "darkwater murky days", "500", "Dragoon not a dragon", "An Eagle reacted twice", "Nashville Neverbeen"];
  var thirdChoice = ["Silly Sally", "Not an dillio", "The brentwood Towers", "Pretty bows in a row", "100,000", "Mandragoria Root", "Serpents are not Snakes", "Severe snipes!"];
  var fourthChoice = ["Mortified Giants cry", "Shilly Shally Materia", "The this and That", "Gauntlets, gloves, kidskin", "1430,4040", "A Bezel Shard", "A Snake is great, I love them!", "Viktoria KrumCakes"];

// Show & Hide Functions
  function showHolders() {
      $("#question-holder").show();
      $("#choice-holder-1").show();
      $("#choice-holder-2").show();
      $("#choice-holder-3").show();
      $("#choice-holder-4").show();
  }
  function hideHolders() {
      $("#question-holder").hide();
      $("#choice-holder-1").hide();
      $("#choice-holder-2").hide();
      $("#choice-holder-3").hide();
      $("#choice-holder-4").hide();
  }
  function hideResults() {
      $("#correct-holder").hide();
      $("#incorrect-holder").hide();
      $("#unanswered-holder").hide();
      $("#restart-holder").hide();
  }
  function displayQuestion () {
      hideResults();
      $("#answer-holder").hide();
      $("#image-holder").hide();
      $("#time-holder").show();
      showHolders();
      $("#question-holder").html(question[count]);
      $("#choice-holder-1").html(firstChoice[count]);
      $("#choice-holder-2").html(secondChoice[count]);
      $("#choice-holder-3").html(thirdChoice[count]);
      $("#choice-holder-4").html(fourthChoice[count]);
  
  // Hover CSS
      $("#choice-holder-1").hover(function() {
          $(this).css("color", "gray");
      },
      function(){
          $(this).css("color", "black");
      });
      $("#choice-holder-2").hover(function() {
          $(this).css("color", "gray");
      },
      function(){
          $(this).css("color", "black");
      });
      $("#choice-holder-3").hover(function() {
          $(this).css("color", "gray");
      },
      function(){
          $(this).css("color", "black");
      });
      $("#choice-holder-4").hover(function() {
          $(this).css("color", "gray");
      },
      function(){
          $(this).css("color", "black");
      });
  }
  $("#choice-holder-1").on("click", checkAnswer) 
  $("#choice-holder-2").on("click", checkAnswer)
  $("#choice-holder-3").on("click", checkAnswer)
  $("#choice-holder-4").on("click", checkAnswer)

// Check Answer Function
  function checkAnswer() {

      hideHolders();

      if($(this).text() === answer[count]) {
          stopTime();
          isSelected = true;
          $("#answer-holder").show();
          $("#answer-holder").html("Right! The answer is: " + answer[count]);
          displayImage();
          correct++;
          count++;
      }
      else {
          stopTime();
          isSelected = true;
          $("#answer-holder").show();
          $("#answer-holder").html("Wrong! The answer is: " + answer[count]);
          displayImage();
          incorrect++;
          count++;
      } 

      checkGameEnd();  
  }

// Chekc End Game Function
  function checkGameEnd() {
      if(count === question.length) {
          $("#time-holder").hide();
          showResults();
          count = 0;
          $(".start").show();
          $(".start").on("click", function() {
              resetResults();
              startGame();
          });
      }
  }

  function resetTime() {
      time = 31;
  }

  function displayTime() {
      time--;
      $("#time-holder").html("Time remaining: " + time);
    
          if(time <= 0) {
              hideHolders();
              stopTime();
              $("#answer-holder").show();
              $("#answer-holder").html("Time is up! The answer is: " + answer[count]);
              displayImage();
              unanswered++;
              count++;
              checkGameEnd();
          }
  }

  function startTime() {
      clearInterval(ticker);
      ticker = setInterval(displayTime, 1000);
  }
  function stopTime() {
      clearInterval(ticker);
      resetTime();
      if(count < question.length - 1) {
          setTimeout(startTime, 2000);
          setTimeout(displayQuestion, 3000);
      }
  }

  resetTime();

// Display Images With Answer
  function displayImage() {
      if(count === 0) {
          $("#image-holder").show();
          $("#image-holder").html('<img src="assets/images/angelShark.png">');
      }
      else if(count === 1) {
          $("#image-holder").show();
          $("#image-holder").html('<img src="assets/images/dreaHome.jpg">');
      }
      else if(count === 2) {
          $("#image-holder").show();
          $("#image-holder").html('<img src="assets/images/GumBalls.jpg">');
      }
      else if(count === 3) {
          $("#image-holder").show();
          $("#image-holder").html('<img src="assets/images/Monkeys.jpg">');
      }
      else if(count === 4) {
          $("#image-holder").show();
          $("#image-holder").html('<img src="assets/images/Squeegie.png">');
      }
      else if(count === 5) {
          $("#image-holder").show();
          $("#image-holder").html('<img src="assets/images/Thinker.jpg">');
      }
      else if(count === 6) {
          $("#image-holder").show();
          $("#image-holder").html('<img src="assets/images/WantaPet.jpg">');
      }
      else if(count === 7) {
          $("#image-holder").show();
          $("#image-holder").html('<img src="assets/images/wetCat.jpg">');
      }
  }

// Show Results Function   
  function showResults() {
      $("#correct-holder").show();
      $("#correct-holder").html("Correct: " + correct);
      $("#incorrect-holder").show();
      $("#incorrect-holder").html("Incorrect: " + incorrect);
      $("#unanswered-holder").show();
      $("#unanswered-holder").html("Unanswered: " + unanswered);
      $("#restart-holder").show();
      $("#restart-holder").html("Click Start above to play again!");
  }

// Reset Results Function 
  function resetResults() {
      correct = 0;
      incorrect = 0;
      unanswered = 0;
  }

// Start Game Function
  function startGame() {
      $(".start").hide();
      startTime();
      displayQuestion();
  }

// Start Game On Click
$(".start").on("click", function() {
  startGame();
});
});