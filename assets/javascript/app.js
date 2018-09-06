var firstBox = document.getElementById("answer1");
var secondBox = document.getElementById("answer2");
var thirdBox = document.getElementById("answer3");
var fourthBox = document.getElementById("answer4");
var fifthBox = document.getElementById("answer5");
firstBox.checked = false;
secondBox.checked = false;
thirdBox.checked = false;
fourthBox.checked = false;
fifthBox.checked = false;
var questionIchi = {
  content: "What are the weaknesses of the Steal skill?",
  correctIchi:
    "Junk items reduce chance of successfully stealing a desirable object",
  correctNii:
    "It requires the user to  have a similar or greater level than the target",
  itsACarp: "Use brands you a thief",
  trap: "You must not be noticed by your target to use it",
  admiralAckbar:
    "It can be prevented from working by the use of magic or items",
  img: "assets/images/steal.jpg"
};
var questionNii = {
  content: "What are the weaknesses of the Explosion spell?",
  correctIchi: "It consumes an immense amount of mana",
  correctNii: "There is an absurd Skill Point investment cost to learn it",
  itsACarp: "The area of effect is small",
  admiralAckbar: "Only members of the Crimson Demon Clan may learn this magic",
  trap: "Only the undead know the incantation",
  // https://www.youtube.com/watch?v=coYieIF8I5M
  img: "assets/images/explosion.jpg"
};
var questionSan = {
  content: "Farmers:",
  correctIchi: "Fight vegetables frequently and are thus high level",
  correctNii: "Grow some kinds of fish",
  itsACarp:
    "Are weaklings that must hire adventurers to be able to do their work",
  admiralAckbar: "Struggle to earn enough money to survive",
  trap: "Tend to eat food that give poor experience gains",
  img: "assets/images/cabbage.jpg"
};
var questionYon = {
  content: "The Demon King:",
  correctIchi: "Is a great threat to humanity",
  correctNii: "Fears the Axis Cult",
  itsACarp: "Is the most feared entity in the world",
  admiralAckbar: "Has godly powers",
  trap: "Has a friendly relationship with the Crimson Demon Clan",
  img: "assets/images/demonlolwut.png"
};
var questionGo = {
  content: "The Axis Cult:",
  correctIchi: "Is one of the most feared entities in the world",
  correctNii: "Besmirches the name and reputation of the Demon King",
  itsACarp: "Worships the goddess Eris",
  admiralAckbar: "Are known for being a moderate religious group",
  trap: "Spit upon worshippers of Aqua",
  img: "assets/images/aqua.jpg"
};
var questionRoku = {
  content: "Kazuma:",
  correctIchi: "Sexually harasses Megumin and Darkness frequently",
  correctNii:
    "Finds non-standard uses for skills and applies these to great effect",
  itsACarp: "Sexually harasses all his party members frequently",
  admiralAckbar: "Is a brave man",
  trap: "Has strong stats",
  img: "assets/images/kazuma.jpg"
};
var questionNana = {
  content: "The undead:",
  correctIchi: "Love Aqua",
  correctNii: "Are attracted to life",
  itsACarp: "Are weak against fire",
  admiralAckbar: "Love Chris",
  trap: "Are weak against water",
  img: "assets/images/undead.png"
};
// Still need image methods to all above objects
var questionsAnswered = 0;
var answeredCorrectly = 0;
var answeredIncorrectly = 0;
var fellAsleep = 0;

// Time based stuff starts here
var time = 30;
var itCounts;
var countTime = function() {
  time--;
  $(".time").text("Time Remaining: " + time);
  if (time <= 0) {
    if (questionsAnswered === 0) {
      return wrongAnswer(questionIchi);
    } else if (questionsAnswered === 1) {
      return wrongAnswer(questionNii);
    } else if (questionsAnswered === 2) {
      return wrongAnswer(questionSan);
    } else if (questionsAnswered === 3) {
      return wrongAnswer(questionYon);
    } else if (questionsAnswered === 4) {
      return wrongAnswer(questionGo);
    } else if (questionsAnswered === 5) {
      return wrongAnswer(questionRoku);
    } else if (questionsAnswered === 6) {
      return wrongAnswer(questionNana);
    }
  }
};

// Functions start getting defined here

// I was really tired when I decided to make this, thus the existential crisis of the variable / parameter
var wrongAnswer = function(iExistOnlyToDie) {
  questionsAnswered++;
  if (time <= 0) {
    $(".question").text("Time is Up!");
    fellAsleep++;
  } else {
    $(".question").text("Get gud, bro!");
    answeredIncorrectly++;
  }
  clearInterval(itCounts);
  $("#answerDiv").hide();
  $("#displayDiv").show();
  $("#rightWrong").text(
    "The Correct Answers were: " +
      iExistOnlyToDie.correctIchi +
      " and " +
      iExistOnlyToDie.correctNii
  );
  $("#pic").show();
  $("#pic").attr("src", iExistOnlyToDie.img);
  setTimeout(incrementQuestion, 6000);
};
// Forget randomizing the positions, I just need this to be done.
var incrementQuestion = function() {
  $("#answerDiv").show();
  $("#displayDiv").hide();
  time = 30;
  itCounts = setInterval(countTime, 1000);
  switch (questionsAnswered) {
    case 0:
      $(".question").text(questionIchi.content);
      $("label[for='answer1']").text(questionIchi.correctNii);
      $("label[for='answer2']").text(questionIchi.trap);
      $("label[for='answer3']").text(questionIchi.admiralAckbar);
      $("label[for='answer4']").text(questionIchi.correctIchi);
      $("label[for='answer5']").text(questionIchi.itsACarp);
      break;
    case 1:
      $(".question").text(questionNii.content);
      $("label[for='answer1']").text(questionNii.trap);
      $("label[for='answer2']").text(questionNii.correctIchi);
      $("label[for='answer3']").text(questionNii.correctNii);
      $("label[for='answer4']").text(questionNii.admiralAckbar);
      $("label[for='answer5']").text(questionNii.itsACarp);
      break;
    case 2:
      $(".question").text(questionSan.content);
      $("label[for='answer1']").text(questionSan.itsACarp);
      $("label[for='answer2']").text(questionSan.admiralAckbar);
      $("label[for='answer3']").text(questionSan.correctIchi);
      $("label[for='answer4']").text(questionSan.trap);
      $("label[for='answer5']").text(questionSan.correctNii);
      break;
    case 3:
      $(".question").text(questionYon.content);
      $("label[for='answer1']").text(questionYon.correctIchi);
      $("label[for='answer2']").text(questionYon.trap);
      $("label[for='answer3']").text(questionYon.admiralAckbar);
      $("label[for='answer4']").text(questionYon.itsACarp);
      $("label[for='answer5']").text(questionYon.correctNii);
      break;
    case 4:
      $(".question").text(questionGo.content);
      $("label[for='answer1']").text(questionGo.itsACarp);
      $("label[for='answer2']").text(questionGo.trap);
      $("label[for='answer3']").text(questionGo.admiralAckbar);
      $("label[for='answer4']").text(questionGo.correctIchi);
      $("label[for='answer5']").text(questionGo.correctNii);
      break;
    case 5:
      $(".question").text(questionRoku.content);
      $("label[for='answer1']").text(questionRoku.trap);
      $("label[for='answer2']").text(questionRoku.correctIchi);
      $("label[for='answer3']").text(questionRoku.admiralAckbar);
      $("label[for='answer4']").text(questionRoku.itsACarp);
      $("label[for='answer5']").text(questionRoku.correctNii);
      break;
    case 6:
      $(".question").text(questionNana.content);
      $("label[for='answer1']").text(questionNana.trap);
      $("label[for='answer2']").text(questionNana.itsACarp);
      $("label[for='answer3']").text(questionNana.admiralAckbar);
      $("label[for='answer4']").text(questionNana.correctIchi);
      $("label[for='answer5']").text(questionNana.correctNii);
      break;
    case 7:
      $(".question").text("Quiz Complete. Your Results:");
      $("#rightWrong").text(answeredCorrectly + " Answers Right!");
      $("#justWrong").text(answeredIncorrectly + " Answers Wrong!");
      $("#lazy").text(fellAsleep + " Unanswered.");
      firstBox.checked = false;
      secondBox.checked = false;
      thirdBox.checked = false;
      fourthBox.checked = false;
      fifthBox.checked = false;
      $("#start")
        .text("Start Over?")
        .show();
      clearInterval(itCounts);
      $("#answerDiv").hide();
      $("#displayDiv").show();
      $("#pic").hide();
      break;
    default:
      console.log("Something broke!");
      break;
  }
};
var notWrong = function(parameter) {
  questionsAnswered++;
  answeredCorrectly++;
  clearInterval(itCounts);
  $(".question").text("You got it!");
  $("#answerDiv").hide();
  $("#displayDiv").show();
  $("#rightWrong").text("");
  $("#pic").attr("src", parameter.img);
  $("#pic").show();
  setTimeout(incrementQuestion, 3000);
};

// Starting click events here
$("#start").on("click", function() {
  fellAsleep = 0;
  answeredCorrectly = 0;
  answeredIncorrectly = 0;
  questionsAnswered = 0;
  $("#justWrong").text("");
  $("#lazy").text("");
  $(".time").text("Time Remaining: " + time);
  $("#start").hide();
  incrementQuestion();
});

$(document).on("click", "#submit", function() {
  // console.log(document.getElementById("answer1").checked);
  // Above was used to figure out the checkboxes and how to retrieve their state
  // Left in for reference and memory reinforcement.
  console.log("firstBox" + firstBox);
  console.log("firstBox.checked" + firstBox.checked);

  switch (questionsAnswered) {
    case 0:
      if (
        firstBox.checked &&
        fourthBox.checked &&
        !secondBox.checked &&
        !thirdBox.checked &&
        !fifthBox.checked
      ) {
        firstBox.checked = false;
        secondBox.checked = false;
        thirdBox.checked = false;
        fourthBox.checked = false;
        fifthBox.checked = false;
        return notWrong(questionIchi);
      } else return wrongAnswer(questionIchi);
      break;
    case 1:
      if (
        !firstBox.checked &&
        secondBox.checked &&
        thirdBox.checked &&
        !fourthBox.checked &&
        !fifthBox.checked
      ) {
        firstBox.checked = false;
        secondBox.checked = false;
        thirdBox.checked = false;
        fourthBox.checked = false;
        fifthBox.checked = false;
        return notWrong(questionNii);
      } else return wrongAnswer(questionNii);
      break;
    case 2:
      if (
        !firstBox.checked &&
        !secondBox.checked &&
        thirdBox.checked &&
        !fourthBox.checked &&
        fifthBox.checked
      ) {
        firstBox.checked = false;
        secondBox.checked = false;
        thirdBox.checked = false;
        fourthBox.checked = false;
        fifthBox.checked = false;
        return notWrong(questionSan);
      } else return wrongAnswer(questionSan);
      break;
    case 3:
      if (
        firstBox.checked &&
        !secondBox.checked &&
        !thirdBox.checked &&
        !fourthBox.checked &&
        fifthBox.checked
      ) {
        firstBox.checked = false;
        secondBox.checked = false;
        thirdBox.checked = false;
        fourthBox.checked = false;
        fifthBox.checked = false;
        return notWrong(questionYon);
      } else return wrongAnswer(questionYon);
      break;
    case 4:
      if (
        !firstBox.checked &&
        !secondBox.checked &&
        !thirdBox.checked &&
        fourthBox.checked &&
        fifthBox.checked
      ) {
        firstBox.checked = false;
        secondBox.checked = false;
        thirdBox.checked = false;
        fourthBox.checked = false;
        fifthBox.checked = false;
        return notWrong(questionGo);
      } else return wrongAnswer(questionGo);
      break;
    case 5:
      if (
        !firstBox.checked &&
        secondBox.checked &&
        !thirdBox.checked &&
        !fourthBox.checked &&
        fifthBox.checked
      ) {
        firstBox.checked = false;
        secondBox.checked = false;
        thirdBox.checked = false;
        fourthBox.checked = false;
        fifthBox.checked = false;
        return notWrong(questionRoku);
      } else return wrongAnswer(questionRoku);
      break;
    case 6:
      if (
        !firstBox.checked &&
        !secondBox.checked &&
        !thirdBox.checked &&
        fourthBox.checked &&
        fifthBox.checked
      ) {
        firstBox.checked = false;
        secondBox.checked = false;
        thirdBox.checked = false;
        fourthBox.checked = false;
        fifthBox.checked = false;
        return notWrong(questionNana);
      } else return wrongAnswer(questionNana);
      break;
    default:
      console.log("Something is not quite right...");
      break;
  }
});
