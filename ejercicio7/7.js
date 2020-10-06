let div1 = document.getElementById("div1");

let numeros = [1,2,3,4,5,6,7,8,9,10];
let media;
let total=0;


for (let i = 0; i < numeros.length; i++) {
   total += numeros[i]
} 
media=total/numeros.length
document.getElementById("div1").innerHTML=media;

