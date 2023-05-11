// {

// var prenom = prompt("saisissez votre prenom");

// var nom = prompt("saisissez votre nom");

// alert("votre prénom est " + prenom + " et votre nom est "+ nom);

// }


// {

// var nbr1 =Number(prompt("saisissez un nombre"));

// var nbr2 =Number(prompt("saisissez un deuxieme nombre"));

// var result = nbr1 + nbr2;

// alert("le produit de vos nombres est " + result);

// }


// {

// var C = Number(prompt("saisissez une temperature en degrés Celsius"));

// var F = (C*9/5) + 32;

// var result = F;

// alert("la conversion en Fahrenheit est " + result);

// }
// exercice6 
// var a = "100";
// var b = 100;
// var c = 1.00;
// var d = true;

// {

// alert("ceci est une chaîne de caractères: " + a);

// }

// b = b--;
// c = c + a;
// d =! d;

// chappitre 7 exercice 1 parité //
// var nbr1 =Number(prompt("saisissez un nombre"));

// var result = nbr1%2;

// if(result==0)

// {

// alert("votre nombre est pair");

// }

// else
// {

// alert("votre nombre est impair");

// }

// chapitre 7 exercice 2//

// var année =Number(prompt("saisissez votre année de naissance"));

// if (année >= 2005)
//     {
//     alert("vous etes mineur");
//     }
// else 

//     {
//     alert("vous etes majeur");
//     }

//chapitre 7 exercice 3//

var nbr1 = parseFloat(prompt("saisissez un premier nombre"));
var operateur = prompt("saisissez un opérateur");
var nbr2 = parseFloat(prompt("saisissez un deuxieme nombre"));



let result;

switch (operateur) {


    case "/":
        if  (nbr2==0) {
            alert("vous ne pouvez pas diviser par 0")
        }

        alert("resultat de la division est " + (nbr1 / nbr2));

        break;

    case "+":



        alert("resultat de la sommes est " + (nbr1 + nbr2));

        break;


    case "-":



        alert("resultat de la soustraction est " + (nbr1 - nbr2));

        break;

    case "*":



        alert("resultat de la multiplication est " + (nbr1 * nbr2));


        break;

    default:

        alert("erreur de saisie")

}

// else if (opérateur!="+"||"adition"||"-"||"soustraction"||"*"||"multiplication"||"/"||"division")

//     {
//         alert("vous avez fait une erreur de saisie");
//     }

