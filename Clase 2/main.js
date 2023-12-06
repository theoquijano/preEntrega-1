///////////////////////PRIMER EJERCICIO, loteria

// const GANADOR = 49815

// let numUsuario = Number(prompt('Ingrese su ticket de la loteria'))

// if (numUsuario == GANADOR) {
// 	alert('Es usted un ganador')

// 	let usuario = prompt('Ingrese su verdadero nombre')

// 	if (usuario == 'Rulo19') {
// 		alert('Te ganaste un tremendo jamon')
// 	} else {
// 		alert('Comprate un jamon')
// 	}

// 	if (usuario != 'Rulo19' ) {
// 		alert('Otro mensaje')
// 	}
// } else {
//     console.log('Perdiste')
// }

///////////////////////SEGUNDO EJERCICIO, entrada al baile

// let edad = Number(prompt('Que edad tienes?'))

// if (edad >= 18) {
	
// 	let saldo = Number(prompt('Cual es tu saldo'))

// 	if (saldo >= 80000) {
// 		console.log('Te compras un blue label')
// 	} else if (saldo >= 10000) {
// 		console.log('Te compras un fernet')
// 	} else if (saldo >= 500) {
// 		console.log('Te compras una cervecita')
// 	} else {
// 		console.log('A pedir agua a la barra')
// 	}
// } else {
// 	if (isNaN(edad)) {
// 		console.log('No entraste por poner strings')
// 	} else if (edad < 0) {
// 		console.log('como es eso de tener edad negativa')
// 	} else {
// 		console.log('No entras por menor de edad')
// 	}
// }

///////////////////////QUIZZ

// Definimos inicializadores
let usuario = prompt('Ingrese su nombre')
let contador = 0

// Zona de preguntas y respuestas
let pregunta1 = 'Que bebida es un elisir?'
let respuesta1 = 'Blue Label'

let pregunta2 = 'Te gusta el jamon?'
let respuesta2 = 'Si'

let pregunta3 = 'Cuanto es 100/25'
let respuesta3 = 4

// Arranca el quizz
let respuesta = prompt(pregunta1)

if (respuesta == respuesta1) {
	// Responde bien la primer pregunta
	contador++
	// Paso a la segunda pregunta
	respuesta = prompt(pregunta2)
	
	if (respuesta == respuesta2) {
		// Responde bien la segunda pregunta
		contador++
		// Paso a la tercer pregunta
		
		respuesta = prompt(pregunta3)

		if ((respuesta == respuesta3) || (usuario == 'Rulo19')) {
			// Responde bien la tercer pregunta
			contador++
		}
	}
}

console.log(contador)

if (contador == 1) {
	// Pra la prox mejor
} else if (contador == 2) {
	console.log('Bueno, bien')
} else {
	// Crack, o te llamas Rulo19
}

