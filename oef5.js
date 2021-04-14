


function zinSplitsen() {

   let zin = prompt("Geef een willekeurige zin in.");
   let getal = parseInt(prompt("Geef een random getal in dat kleiner is dan het aantal leestekens van de zin"));
   let split = zin.length;

   if (zin.length >= getal) {
      alert((zin.slice(0, getal)) + "\n" + zin.slice(getal, split));
   }
   else {
      alert("Het random getal moet kleiner zijn dan het aantal leestekens van jouw zin!");
   }

//   return (zin.slice(0, getal)) + "\n" + zin.slice(getal, split);
}

zinSplitsen()