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
