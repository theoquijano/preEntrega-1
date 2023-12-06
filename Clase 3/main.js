///////////////////////PROMEDIO DE NOTAS CON FOR

let alumno = prompt('Ingrese su nombre').toUpperCase()
let cantidadNotas = Number(prompt('Ingrese cantidad de notas'))

let sumador = 0

for (let i = 0; i < cantidadNotas; i++) {
    let notas = Number(prompt('Ingrese nota Nro ' + (i+1)))
    
    sumador+=notas
}

promedio = sumador / cantidadNotas

alert('El promedio de ' + alumno + ' es de ' + promedio)

/////////////////////ADIVINA EL NUMERO

for (let i = 1; i <= 10; i++) {
    let adivina = prompt('Intenta adivinar el número')
    if (adivina == 5) {
		break;
    }
    alert('Intento numero '  + i);
}

console.log('Continua el programa')

///////////////////////MULTIPLICACIONES Y RACHAS

// let contador = 0
// let racha = 0
// let rachaMax = 0
// let malas = 0
// const PREG = 5

// for (let i = 1; i <= PREG; i++) {
//   let random = Math.round(Math.random()*10)
//   let respuesta = i * random

//   let respuestaUsuario = prompt('Cuanto es ' + i + ' x ' + random + ' ?')

//   if (respuesta == respuestaUsuario) {
//     contador++
//     racha++
//     malas = 0
//     if (racha > rachaMax)
//       rachaMax == racha
//   } else {
//     racha = 0
//     malas++
//     if ((malas == 1) || (malas == 2) || (malas == 3) || (malas == 4) || (malas == 5)) {
//       alert('Segui participando')
//       break
//     }
//   }
// }

///////////////////////LOGIN CON DO WHILE

// do {
// 	nombre = prompt('Ingrese su nombre')
// 	pass = prompt('Ingrese su contraseña')
// } while ((nombre != 'Rulo19') || (pass != '123'))

// let nombre = prompt('Ingrese su nombre')
// let pass = prompt('Ingrese su contraseña')

// while ((nombre != 'Rulo19') || (pass != '123')) {
// 	console.log('Ingresaste mal los datos')
// 	nombre = prompt('Ingrese su nombre')
// 	pass = prompt('Ingrese su contraseña')
// }

///////////////////////USAR WHILE PARA OBLIGAR AL USUARIO

let num = Number(prompt('Ingrese un numero por favor'))

while (isNaN(num) || num == '') {
	console.log('Por favor, ingrese un numero que si no los calculos no sirven')
	num = Number(prompt('Ingrese un numero por favor'))

}

