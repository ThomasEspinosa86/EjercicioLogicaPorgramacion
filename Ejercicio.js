const prompt = require("prompt-sync")();
let mayor, medio, menor;
const numeros = [];
for (let i = 0; i < 3; i++) {
    const numero = Number(prompt("ingresa 3 numeros :"));
    numeros.push(numero);
}
if (numeros[0] === numeros[1] && numeros[2] === numeros[1]) {
    console.log("los numeros son iguales")
}else{

if (numeros[0] >= numeros[1] && numeros[0] >= numeros[2]) {
    mayor = numeros[0];

} else if (numeros[1] >= numeros[0] && numeros[1] >= numeros[2]) {
    mayor = numeros[1];
} else {
    mayor = numeros[2];
}



if (numeros[0] <= numeros[1] && numeros[0] <= numeros[2]) {
    menor = numeros[0];

} else if (numeros[1] <= numeros[0] && numeros[1] <= numeros[2]) {
    menor = numeros[1];
} else {
    menor = numeros[2];
}
medio = numeros[0] + numeros[1] + numeros[2] - mayor - menor;


console.log(mayor, medio, menor);
console.log(menor, medio, mayor);

}





