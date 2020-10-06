let div1 = document.getElementById("div1");

let numeros = [];


for (let i = 0; i < 3; i++) {
    numeros.push(parseInt(window.prompt("escribe un valor")));
}

if(numeros[0]<numeros[1]&& numeros[0] < numeros[2]){
    document.getElementById("div1").innerHTML = `<p>${numeros[0]}</p>`;

    }else if(numeros[1] < numeros[0]&& numeros[1]<numeros[2]){
        document.getElementById("div1").innerHTML = `<p>${numeros[1]}</p>`;
    } else { document.getElementById("div1").innerHTML = `<p>${numeros[2]}</p>`;
}
    

