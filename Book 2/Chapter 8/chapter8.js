var doTheMath = 7 + 8 + 36 + 18 + 12;
'number'
typeof doTheMath; 
'number'
typeof "the cat's favorite toy"
'string'


var dreamCar = {
  make: "Oldsmobile",
  model: "98",
  color: "brown",
  year: 1983,
  "bodystyle" : "Luxury Car",
  price: 450000
}

  alert("The type of dreamCar is: " + typeof dreamCar);

document.getElementById("priceTag").innerHTML = dreamCar.price;

document.getElementById('modelYear').innerHTML = dreamCar.year;

document.getElementById("body").style.backgroundColor = dreamCar.color;

document.getElementById("body").innerHTML = dreamCar.make + " " + dreamCar.model;
