let getal1 = parseInt(prompt("Wat is jouw leeftijd")) ;
let getal2 = parseInt( prompt("Vul getal 2 in")) ;

function isVijftig(){
    document.getElementById("tekst").innerHTML = "Hoera vijftg"
}

if (getal1 === 50 || getal2 ===50){
    isVijftig();
}
else if ( getal1 + getal2 === 50){
    isVijftig()
}
else{

    document.getElementById("tekst").innerHTML = "Try again"
}
/*
let getal1 = parseInt(prompt("Wat is jouw leeftijd")) ;
let getal2 = parseInt( prompt("Vul getal 2 in")) ;

function som (getal1 , getal2){
    getal1+ getal2;
}


if  (getal1 === 50 )
{
console.log("HOERA VIJFTIG" , getal1);
}
else if (getal2 === 50){
    console.log("HOERA VIJFTIG" , getal2);
}
else if (som(getal1,getal2) === 50){

    console.log("hoera vijftig" , som(getal1,getal2));
}
else {
    console.log("Jammer niet 50" , som(getal1,getal2));
}
*/