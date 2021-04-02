let text = prompt("Vertel me een leuke zin")

if (text.substring(0, 5) === "Hallo") {

    document.getElementById("tekst").innerHTML = text;
}

else {

    document.getElementById("tekst").innerHTML = startmetHallo(text);
}

function startmetHallo() {
    let textEersteLetter =  text.charAt(0)
    let textLowerCase = textEersteLetter.toLowerCase()
    let textcombinatie = textLowerCase + text.substring(1)

    return "Hallo " +  textcombinatie ;

}



/*

let userInput = prompt("Geef een random zin in.").split(" ");
((a) => {
    if (a[0] === "Hallo"){
        console.log(a.join(" "));
    }else{
        let firstWord = (a.shift()).toLowerCase();
        console.log("Hallo, " + firstWord + " " + a.join(" "));
    }
})(userInput);

*/