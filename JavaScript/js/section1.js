console.log('Section 1')
// Comentario de una sola linea
/* 
    Comentario de 
    varias lineas
*/
console.log("Hola, desde un archivo");

// Variables
/* 
    Las variables son un contenedor de datos

    var: es una variable que puede cambiar su valor 
    en cualquier parte del codigo(hay excepciones)

    let: es una variable que puede cambiar su valor
    pero solo en el bloque de codigo en el que se encuentra

    const: es una variable que no puede cambiar su valor
*/

// Declaracion de variables

var nombre = 'Adrian'; // Variable global
let apellido = 'Campos'; // Variable local
const PI = 3.1416; // Constante

console.log(nombre, apellido, PI);


// Cambiar el valor de una variable
nombre = 'Xavier'
apellido = 'Fuentes'
console.log(nombre, apellido, PI);

// Tipos de datos
let string = 'Hola';
let numero = 10;
let decimal = 10.5;
let booleano = true;
let nulo = null;
let indefinido = undefined;

// Operadores Comparativos
let mayor = 10 > 5; //true
let menor = 10 < 5; //false
let mayorIgual = 10 >= 5; //true
let menorIgual = 10 <= 5; //false
let igual = 10 == 5; //false
let diferente = 10 != 5; //true
let exactamenteIgual = 10 === 5; //false
console.log(mayor, menor, mayorIgual, menorIgual, igual, diferente, exactamenteIgual)

// Operadores Logicos
let and = true  && false; //false
let or = true || false; //true
let not = !true; //false
console.log(and, or, not)

// Operadores aritmeticos
let suma = 10 + 5 //15
let resta = 10 - 5 //5
let multiplicar = 10 * 5 //50
let dividir = 10 / 5 //2
let modulo = 10 % 5 //0
let exponente = 10 ** 5 //100000
console.log(suma, resta, multiplicar, dividir, exponente, modulo)

// Operadores de asignacion 
let asignacion = 10 //10
let sumar =+ 10 //20

// Condicionales
let condicion = 10 > 5;

if(condicion){
    console.log("Hola");
} else if (condicion){
    console.log("Adios")
} else {
    console.log("nada")
}