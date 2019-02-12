//Convert gallons to litres
let gallonToLitre = function (gallon){
return gallon * 3.78;
};
let gallon = prompt("Enter amount in gallons:");
let resultLitre = gallonToLitre(gallon);
alert(resultLitre + " " + "Litres");
