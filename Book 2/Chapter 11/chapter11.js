// Creating an Array
// Creating an Array
// var people = ["John", "Gloria", "Samuel"];
console.log(people);

// // Reassigning Value of First Element
// people[0] = "Georgie";
// console.log(people);

// Exercise
var people = ["John", "Gloria", "Samuel"];
people[0] = "Mary";
people[1] = "Bobby";
people[2] = "Judy";
people[3] = "Eddie";
people[4] = "Herbie";
people[5] = "Tony";
console.log(people);

var otherPeople = ["Teddy", "Cathy", "G-berg", "Georgie"];
// TO STRING VALUE METHOD
// document.getElementById("peopleIknow").innerHTML = people.toString();
// document.getElementById("peopleIknow2").innerHTML = people.valueOf();\

// CONCAT() METHOD
// people = people.concat(otherPeople);
// document.getElementById("peopleIknow").innerHTML = people.toString();

// INDEXOF() METHOD
// people = people.indexOf("Eddie");

// JOIN() METHOD
// people = people.join(" || ");
/// LASTINDEXOF () METHOD
// people.push("Bobby");
// people = people.lastIndexOf("Bobby");

// POP() METHOD
// people = people.pop();
// // people.pop();

// PUSH() METHOD
// people = people.push("Teddy");
// people.push("Teddy");

// REVERSE() METHOD
// people= people.reverse();


// SHIFT() AND UNSHIFT() METHOD
// A) SHIFT()
document.getElementById("peopleIknow").innerHTML = people.toString();
people.shift();
document.getElementById("peopleIknow2").innerHTML = people.toString();


// B) UNSHIFT()
// document.getElementById("peopleIknow").innerHTML = people.toString();
// people.unshift("Teddy");
// document.getElementById("peopleIknow2").innerHTML = people.toString();



// SLICE() METHOD
// document.getElementById("peopleIknow").innerHTML = people.toString();
// people = people.slice(0, 3);
// document.getElementById("peopleIknow2").innerHTML = people.toString();

// SORT() METHOD
// people = people.sort();

// var numbers = [1000, 5, 2, 30, 15];
// numbers = numbers.sort();

// document.getElementById("peopleIknow").innerHTML = people.toString();
// document.getElementById("peopleIknow2").innerHTML = people.toString();


//SPLICE() METHOD

document.getElementById("peopleIknow").innerHTML = people.toString();
// people.splice(1, 0, "Cathy");
// document.getElementById("peopleIknow2").innerHTML = people.toString();

people.splice(1, 0, "Cathy");
document.getElementById("peopleIknow2").innerHTML = people.toString();

