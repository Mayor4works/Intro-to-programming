// Create a function
var ourFirstFunction = function () {
  console.log("Hello world");
};

ourFirstFunction();
// console.log(ourFirstFunction());

// Passing Arguments to a Function
// var sayHelloTo = function (color) {
//     console.log("Hello " + name + "!");
// };
// sayHelloTo("Joseph");
// sayHelloTo("John");
// // sayHelloTo(3);

// var printMultipleTimes = function (howManyTimes, whatToDraw) {
//  for (var i = 0; i < howManyTimes; i++) {
//  console.log(i + " " + whatToDraw);
//  };
// };

// Returning Values from Functions
// var double = function (number) {
//     return number * 2;
// };
// double(10);
// console.log(double(10));

// Using Functions to simplify Code
// var pickRandomWord = function (words) {
//   return words[Math.floor(Math.random() * words.length)];
// };

// var randomWords = ["Planet", "Worm", "Flower", "Computer"];

// pickRandomWord(randomWords);
// console.log(pickRandomWord(randomWords));

// pickRandomWord(["Charlie", "Raj", "Nicole", "Kate", "Sandy"]);

// // Random Insult Generator Using Function Call
// var randomBodyParts = ["Face", "Nose", "Hair"];
// var randomAdjectives = ["Smelly", "Boring", "Stupid"];
// var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

// var randomString =
//   "Your " +
//   pickRandomWord(randomBodyParts) +
//   " is like a " +
//   pickRandomWord(randomAdjectives) +
//   " " +
//   pickRandomWord(randomWords) +
//   "!!!";
// console.log(randomString);

// //MAKING THE RANDOM INSULT GENERATOR INTO A FUNCTION

// var generateRandomInsult = function () {
//  var randomBodyParts = ["Face", "Nose", "Hair"];
//  var randomAdjectives = ["Smelly", "Boring", "Stupid"];
//  var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

//  var randomString = "Your " + pickRandomWord(randomBodyParts) + 
//  " is like a " + pickRandomWord(randomAdjectives) + 
//  " " + pickRandomWord(randomWords) + "!!!";
//  return randomString;
// };

// generateRandomInsult();
// generateRandomInsult();
// generateRandomInsult();
// console.log(generateRandomInsult());

// var fifthLetter = function (name) {
//     if (name.length < 5) {
//         return;
//     }

// return "The fifth letter of your name is " + name[4] + ".";
// };

// fifthLetter("Joseph");
// console.log(fifthLetter("Joseph"));
// console.log(fifthLetter("Joe"));


//USING RETURN MULTIPLE TIMES INSTEAD OF IF...ELSE STATEMENT
// var medalForScore = function (score) {
//     if (score < 3) {
//         return "Bronze";
//     }
// if (score < 7) {
//     return "Silver";
// }
// return "Gold";
// };
// console.log(medalForScore(2));


