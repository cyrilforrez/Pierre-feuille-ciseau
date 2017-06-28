var choixUtilisateur;
var choixOrdi ;
var scoreJ = 0;
var scoreO = 0;
while (Math.abs(scoreJ-scoreO)<2) {
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
	    var temp;
	    if (choix1 == choix2) {
	        return "Egalité !";
	    }
	     else if (choix1 == "pierre") {
	        if(choix2 == "ciseaux") {
	            temp = 1;
	            scoreJ++;
	        }
	        else {
	            temp =  0;
	            scoreO++;
	        }
	}
	    else if (choix1 =="feuille") {
	        if (choix2 =="pierre") {
	            temp = 1;
	            scoreJ++;
	        }
	        else {
	            temp = 0;
	            scoreO++;
	        }
	    }
	    else if (choix1 =="ciseaux") {
	        if (choix2 =="feuille") {
	            temp = 1;
	            scoreJ++;
	        }
	        if (choix2 =="pierre") {
	            temp = 0;
	            scoreO++;
	        }
	    }
	    document.getElementById("score").innerHTML = "Gagné: " + scoreJ + " fois. Perdu: " + scoreO + " fois.";    
	    if (temp == 1) {
	    	return "Vous avez gagné!";
	    }
	    else {
	    	return "Vous avez perdu!";
	    }

		
	}
	alert("Ordinateur: "+choixOrdi +"."+" "+ "Vous: "+choixUtilisateur +".");
	alert(comparer(choixUtilisateur,choixOrdi));
	
}