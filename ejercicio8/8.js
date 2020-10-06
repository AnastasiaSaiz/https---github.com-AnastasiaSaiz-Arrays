let div1 = document.getElementById("div1");

const array = [];
let suma = 0;
let media;

for (let i = 0; i < 20; i++) {
    array.push(Math.floor(Math.random() * (36 - 18) + 18));
}
for (let i = 0; i < array.length; i++) {
    suma += array[i];
}
media = suma / array.length;
console.log(array);
document.getElementById("div1").innerHTML = `<p>La edad media de la clase es: ${media}</p>`;



