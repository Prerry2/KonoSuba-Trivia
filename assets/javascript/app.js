var questionIchi = {
  content: "What are the weaknesses of the Steal skill?",
  correctIchi:
    "Junk items reduce chance of successfully stealing a desirable object.",
  correctNii:
    "It requires the user to  have a similar or greater level than the target.",
  itsACarp: "Use brands you a thief.",
  trap: "You must not be noticed by your target to use it.",
  admiralAckbar:
    "It can be prevented from working by the use of magic or items."
};
var questionNii = {
  content: "What are the weaknesses of the Explosion spell?",
  correctIchi: "It consumes an immense amount of mana.",
  correctNii: "There is an absurd Skill Point investment cost to learn it.",
  itsACarp: "The area of effect is small.",
  admiralAckbar: "Only members of the Crimson Demon Clan may learn this magic.",
  trap: "Only the undead know the incantation."
};
var questionSan = {
  content: "Farmers:",
  correctIchi: "Fight vegetables frequently and are thus high level.",
  correctNii: "Grow some kinds of fish.",
  itsACarp:
    "Are weaklings that must hire adventurers to be able to do their work.",
  admiralAckbar: "Struggle to earn enough money to survive.",
  trap: "Tend to eat food that give poor experience gains."
};
var questionYon = {
  content: "The Demon King:",
  correctIchi: "Is a great threat to humanity.",
  correctNii: "Fears the Axis Cult.",
  itsACarp: "Is the most feared entity in the world.",
  admiralAckbar: "Has godly powers.",
  trap: "Has a friendly relationship with the Crimson Demon Clan."
};
var questionGo = {
  content: "The Axis Cult:",
  correctIchi: "Is one of the most feared entities in the world.",
  correctNii: "Besmirches the name and reputation of the Demon King.",
  itsACarp: "Worships the goddess Eris.",
  admiralAckbar: "Are known for being a moderate religious group.",
  trap: "Spit upon worshippers of Aqua."
};
var questionRoku = {
  content: "Kazuma:",
  correctIchi: "Sexually harasses Megumin and Darkness frequently.",
  correctNii:
    "Finds non-standard uses for skills and applies these to great effect.",
  itsACarp: "Sexually harasses all his party members frequently.",
  admiralAckbar: "Is a brave man.",
  trap: "Has strong stats."
};
var questionNana = {
  content: "The undead:",
  correctIchi: "Love Aqua.",
  correctNii: "Are attracted to life.",
  itsACarp: "Are weak against fire.",
  admiralAckbar: "Love Chris.",
  trap: "Are weak against water."
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
      "and " +
      iExistOnlyToDie.correctNii
  );
  $("#pic").show();
  $("#pic").attr("src", iExistOnlyToDie.img);
  setTimeout(incrementQuestion, 3000);
};
// This needs a logic section added to handle randomization of placement of answers
// And, of course, the placement itself ($('label[for="#answer1"').text(questionIchi.correctIchi) etc)
var incrementQuestion = function() {
  $("#answerDiv").show();
  $("#displayDiv").hide();
  time = 30;
  itCounts = setInterval(countTime, 1000);
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
  console.log(document.getElementById('#answer1').value)

  // The selector I was testing above does not seem to work (undefined?)
  // It still, somehow, did not break anything.

  // if (
  //   "only responses coresponding to correctIchi and CorrectNii are selected"
  // ) {
  //   if (questionsAnswered == 0) {
  //     return answeredCorrectly(questionIchi);
  //   } else if (questionsAnswered == 1) {
  //     return answeredCorrectly(questionNii);
  //   } else if (questionsAnswered == 2) {
  //     return answeredCorrectly(questionSan);
  //   } else if (questionsAnswered == 3) {
  //     return answeredCorrectly(questionYon);
  //   } else if (questionsAnswered == 4) {
  //     return answeredCorrectly(questionGo);
  //   } else if (questionsAnswered == 5) {
  //     return answeredCorrectly(questionRoku);
  //   } else if (questionsAnswered == 6) {
  //     return answeredCorrectly(questionNana);
  //   }
  // } else {
  //   if (questionsAnswered == 0) {
  //     return answeredIncorrectly(questionIchi);
  //   } else if (questionsAnswered == 1) {
  //     return answeredIncorrectly(questionNii);
  //   } else if (questionsAnswered == 2) {
  //     return answeredIncorrectly(questionSan);
  //   } else if (questionsAnswered == 3) {
  //     return answeredIncorrectly(questionYon);
  //   } else if (questionsAnswered == 4) {
  //     return answeredIncorrectly(questionGo);
  //   } else if (questionsAnswered == 5) {
  //     return answeredIncorrectly(questionRoku);
  //   } else if (questionsAnswered == 6) {
  //     return answeredIncorrectly(questionNana);
  //   }
  // }
});
