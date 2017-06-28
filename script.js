var choixUtilisateur;
var choixOrdi ;
var score = 0
while (score < 4) {
	choixUtilisateur = prompt("Choisissez-vous pierre, feuille, ou ciseaux ?");
	choixOrdi = Math.random();

if (choixOrdi < 0.34) {
	choixOrdi = "pierre";
	} else if(choixOrdi <= 0.67) {
	choixOrdi = "feuille";
} else {
	choixOrdi = "ciseaux";
}



	var comparer = function(choix1, choix2) {
	    if (choix1 === choix2) {
	        return "Egalité !";
	    }
	     else if (choix1 == "pierre") {
	        if(choix2 == "ciseaux") {
	            return "Vous avez gagné!";
	        }
	        else {
	            return "Vous avez perdu!";
	        }
	}
	    else if (choix1 =="feuille") {
	        if (choix2 =="pierre") {
	            return "Vous avez gagné!";
	        }
	        else {
	            return "Vous avez perdu!";
	        }
	    }
	    else if (choix1 =="ciseaux") {
	        if (choix2 =="feuille") {
	            return "Vous avez gagné!";
	        }
	        if (choix2 =="pierre") {
	            return "Vous avez perdu!";
	        }
	    }
	}
	alert("Ordinateur: "+choixOrdi +"."+" "+ "Vous: "+choixUtilisateur +".");
	alert(comparer(choixUtilisateur,choixOrdi));
}