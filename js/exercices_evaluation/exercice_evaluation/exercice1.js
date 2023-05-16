// *****EVALUATION exercice 1*****
console.log("conecté");
var age = 0;
var jeunes = 0;//age<20
var adultes = 0;//age>20 && age>40
var seniors = 0;//age>40 && age<100


while (age >= 0) {

    age = prompt("ecrivez un age");


    if (age < 20) {
        jeunes++;

    }

    else if (age <= 40 && age >= 20) {
        adultes++;

    }
    else if (age > 40 && age < 100) {
        seniors++;
    }
    else {

        seniors++;

        break;

    }

}

console.log("le nombre de jeunes est "+ jeunes);
console.log("le nombre d'adultes "+ adultes);
console.log("le nombre de seniors est " + seniors);
