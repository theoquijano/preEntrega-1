// Declaro el nombre del alumno
let alumno = prompt('Por favor ingrese el nombre del alumno')


// Declaro y pido las notas del alumno
let nota1 = Number(prompt('Por favor ingrese la nota 1'))
let nota2 = Number(prompt('Por favor ingrese la nota 2'))
let nota3 = Number(prompt('Por favor ingrese la nota 3'))

// Saco el promedio de las notas
// 8 + 10 + 2 --> '8102' / 3
let promedio = (nota1 + nota2 + nota3) / 3

// Muestro la nota del alumno

alert('El promedio de ' + alumno + ' es ' + promedio)