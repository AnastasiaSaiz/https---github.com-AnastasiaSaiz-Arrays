
let div1 = document.getElementById("div1");

let array = [];
let parrafos = "";

for (let i = 0; i < 3; i++) {
    array.push(window.prompt("Escribe 1 string"));
}
parrafos += `<p>${array[1]}</p>`;
parrafos += `<p>${array[2]}</p>`;
parrafos += `<p>${array[0]}</p>`;

document.getElementById("div1").innerHTML = parrafos;