	var nom = prompt("Entrez un pseudo :")
	var userChoice = prompt(nom + ", pierre, feuille ou ciseaux ?");
    var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "pierre";
} else if(computerChoice <= 0.67) {
	computerChoice = "feuille";
} else {
	computerChoice = "ciseaux";
} console.log("Computer: " + computerChoice);
console.log("User: " + userChoice);

function compare(userChoice, computerChoice){
    if(userChoice === computerChoice){
        alert("Égalité !");
    } else if(userChoice === "pierre"){
        if(computerChoice === "ciseaux"){
            alert("La pierre gagne ! Bravo " + nom);
        } else{
            alert("La feuille gagne ! Bravo AI !");
    }
    } else if(userChoice === "feuille"){
        if(computerChoice === "pierre"){
            alert("La feuille gagne ! Bravo " + nom);
            }else{
                alert("Les ciseaux gagnent ! BRAVO AI !");
                }
    }else if(userChoice === "ciseaux"){
        if(computerChoice === "feuille"){
            alert("Les ciseaux gagnet ! Bravo " + nom);
            }else{
                alert("La pierre gagne ! Bravo AI !");
                }
    }
}