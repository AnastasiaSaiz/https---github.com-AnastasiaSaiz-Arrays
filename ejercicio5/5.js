let div1 = document.getElementById("div1");

let meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
];

let respuesta = parseInt(window.prompt("Introduce el número de un mes"));
let parrafo;

if (respuesta >= 1 && respuesta <= 12) {
    parrafo = `<p>${meses[respuesta - 1]}`;
} else {
    parrafo = `<p>Respuesta incorrecta, introduce del 1-12</p>`;
}
document.getElementById("div1").innerHTML = parrafo;