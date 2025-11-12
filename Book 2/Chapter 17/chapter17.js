// INTRODUCING LOOPS
for (var counter = 0; counter < 500; counter++) {
console.log(counter + ": Hello, JavaScript!");
};

// EXAMPLE 2
/* for (var i = 10; i > 0; i--) {
alert (i);
}
alert ("Blast Off!"); */

// Outputting Array Values with for loops
/* var myFriends = ["Agatha", "Agnes", "Jermaine", "Jack"];
for (var i = 0; i < myFriends.length; i++){
alert(myFriends[i] + " is my friend.");
}; */

// Random number alert
alert(Math.random());

//  using math.floor & math.random to find a random friend
var myFriends = ["Agatha", "Agnes", "Jermaine", "Jack"];
var randomFriend = Math.floor(Math.random() * myFriends.length);
alert(myFriends[randomFriend]);

// random weather forecast using math.random & math.floor method
var days = ["Monday","Tuesday","Wednesday","Thursday","Friday"];

var weather = ["Sunny", "Partly Sunny", "Partly Cloudy",
"Cloudy", "Raining", "Snowing", "Thunderstorm",
"Foggy"];

var minTemp = 0;
var maxTemp = 100;

generateWeather();

function generateWeather() {
    for (var i = 0; i < days.length; i++) {

var weatherToday = weather[Math.floor(Math.random() * weather.length)];
var tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);

document.getElementById("5DayWeather").innerHTML += "<div id='" +
days[i] + "' class='" + weatherToday +
"'><b>Forecast for " + days[i] + ":</b><br><br>" +
weatherToday + " and " + tempToday + " degrees.</div>";

    };

};

