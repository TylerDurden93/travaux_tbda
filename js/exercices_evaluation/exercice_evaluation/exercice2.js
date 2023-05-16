
// evaluation exercice 2//


console.log("conecté")
var nombre = parseInt(prompt("saisissez un nombre"));

function multiplication(nombre) {
    console.log("Table de " + nombre);
    for (var i=0;i<=10;i++) {
    
        console.log(nombre + "x" + i + "= " + nombre * i);
    }

    
}
multiplication(nombre);