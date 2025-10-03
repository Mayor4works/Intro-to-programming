// var myNumber = prompt("Enter your favorite day of the week!");

//  var theResponse;

//  switch (myNumber) {
//   case "Monday":
//     theResponse = "Ack!";
//     break;
//   case "Tuesday":
//     theResponse = "Taco day!";
//     break;
//   case "Wednesday":
//     theResponse = "Halfway there!";
//     break;
//   case "Thursday":
//     theResponse = "It's the new Friday!";
//     break;
//   case "Friday":
//     theResponse = "TGIF! Yeah!";
//     break;
//   case "Saturday":
//     theResponse = "What a day!";
//     break;
//   case "Sunday":
//     theResponse = "Sunday = Funday!";
//     break;
//   default:
//     theResponse = "I haven't heard of that one!";
//     break;
//  }
//  alert (theResponse);

//================================================================================

// var myDate = new Date();
// console.log(myDate);
// console.log("Day:" + myDate.getDay());
// console.log("Month:" + myDate.getMonth());
// console.log(""Day of the year);







//====================================================================

var todayDate = document.getElementById("todaysdate");
 var todoButton = document.getElementById("whattodo");

 // add a listener to the whattodo button
 todoButton.addEventListener("click", displayActivity);
 // create a new Date object
 var d = new Date();

 // call the displayDate() function
 displayDate();

 function displayDate() {
 todayDate.innerHTML = d.toDateString();
 };

 function displayActivity() {
 var dayOfWeek = d.getDay();

 var youShould;

switch (dayOfWeek) {
    case 0 :
    youShould = "Take it easy. Go to rest!";
    break;

    case 1 :
    youShould = "Travel to London";
    break;

    case 2 :
    youShould = "Jump the fence";
    break;

    case 3 :
    youShould = "Read a book";
    break;

    case 4 :
    youShould = "Go to the gym";
    break;

    case 5 :
    youShould = "Drink some whiskey!!!";
    break;

    case 6 :
    youShould = "Take a break!";
    break;

    default:
    youShould = "Oooops, Server error...";
    break;
};

document.getElementById("thingToDo").innerHTML =
youShould;
 };