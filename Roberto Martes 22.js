
const edad = 0;

if (edad <= 0 ) {
    console.error("Error: No puede ser menor a cero");
} else if (edad >= 0 && edad <= 2.99) {
    console.log("Bebé");
} else if (edad >= 3 && edad <= 10.99) {
    console.log("Niño");
} else if (edad >= 11 && edad <= 17.99) {
    console.log("Adolescente");
} else if (edad >= 18 && edad <= 59.99) {
    console.log("Adulto");
} else if (edad >= 60){
    console.log("Anciano");
}