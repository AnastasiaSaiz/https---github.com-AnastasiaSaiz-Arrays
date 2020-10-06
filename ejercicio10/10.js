let div1 = document.getElementById("div1");

let array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let num;
let interruptor;
let parrafos = "";

do {
    num = parseInt(window.prompt("Escribe un valor entre 0 y 10"));
    if (num >= 0 && num <= 10) {
        array[num] = array[num] + 1;
        document.getElementById("div1").innerHTML = `<p>El valor es: ${array[num]}</p>`;
    } else if (num > 10) {
        document.getElementById("div1").innerHTML = `<p>El número está fuera del rango</p>`;
    } else {
        for (let i = 0; i < array.length; i++) {
            parrafos += `<p>${i}    ${array[i]}</p>`;
        }
        document.getElementById("div1").innerHTML = parrafos;
    }
} while (num >= 0);