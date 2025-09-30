var words = ["javascript", "monkey", "amazing", "pancake", "church"];
var word = words[Math.floor(Math.random() * words.length)];


var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = word.length;

while (remainingLetters > 0) {
    // Show the player their progress
    alert(answerArray.join(" "));
    // Take input from the player
    var guess = prompt("Guess a letter, or click Cancel to stop playing");
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please eneter a single remainingLetters.");
    } else {
    for (var j = 0; j < word.length; j++) {
        if(word[j] === guess) {
    // Update answerArray and remainingLetters for every correct guess
    answerArray[j] = guess;
    remainingLetters--;
};
    };
};
};
alert(answerArray.join(" "));
alert("Good job! The answer was " + word);
