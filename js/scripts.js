//Convert gallons to litres
let gallonToLitre = function (gallon){
return gallon * 3.78;
};
let gallon = prompt("Enter amount in gallons:");
let resultLitre = gallonToLitre(gallon);
alert(resultLitre + " " + "Litres");
//Convert litres to gallons
let litreToGallon = function (litre) {
return litre/3.78;
};
let litre = parseInt(prompt("Enter amount in litres:"));
let resultGallon = litreToGallon(litre);
alert(resultGallon + " " + "Gallons");
//Convert kilograms to pounds
let kiloToPound = function (kilo) {
return kilo/0.453592;
}
let kilo = prompt("Enter amount in kilograms:");
let resultPound = kiloToPound(kilo);
alert(resultPound);
//Convert pounds to kilograms
let poundToKilo = function (pound) {
return pound * 0.453592;
}
let pound = prompt("Enter amount in pounds:");
let resultKilo = poundToKilo (pound);
alert(resultKilo);
//Convert Ounces to Quarts
let ounceToQuart = function (ounce) {
return ounce * 0.3125;
}
let ounce = prompt("Enter amount in ounces:");
let resultQuart = ounceToQuart (ounce);
alert(resultQuart);
//Convert Quarts to Ounces
let quartToOunce = function (quart) {
return quart / 0.3125;
}
let quart = prompt("Enter amount in quarts:");
let resultOunce = quartToOunce (quart);
alert(resultOunce);
//Convert Litres to Pints
let litresToPint = function (litres) {
return litres * 2.11338;
}
let litres = prompt("Enter amount in litres:");
let resultPint = litresToPint (litres);
alert(resultPint);
