console.log('Section 2')

// FUNCIONES

/* 
    Una funcion es un bloque de codigo reutilizable
    que se puede ejecutar cada vez que se necesite
*/

function saludar(){
    console.log("Hola desde una funcion")
}

saludar()

// Codigos de colores (Curiosidad)
let variable = "Hola"
console.log("Hola desde un archivo")

// Funciones con parametros

function saludarConParametros(nombre = "Jhon", apellido = "Doe"){
    alert(`Hola ${nombre} ${apellido}`)
}

//Ejecutar funciones con parametros
/* saludarConParametros('Adrian', 'Campos')
saludarConParametros('Xavier', 'Fuentes')
saludarConParametros('Desire')
saludarConParametros() */

// Funcion recursiva

function recursiva(){
    alert("Hola desde una funcion recursiva")
    recursiva()
}

// Funciones con retorno de valores

function retornar(condicion = false){
    let mensaje = "Hola desde retornar"
    if (condicion) {
        return mensaje
    } else {
        return "La condicion no se cumple"
    }
}

console.log(retornar(true))

// Alcance de variables

if (true) {
    /* Variables locales: solo funcionan dentro del bloque de codigo donde fue declarado */
    let variable1 = "Hola"
    /* Variables globales: se pueden utilizar en cualquier parte del codigo */
    var variable2 = "Hola2"
}

console.log( variable2)

// Alcance de funciones

function alcance(){
    var prueba_alcance = "hola"
    return (prueba_alcance)
}

// Ejecucion 
console.log(alcance())
console.log(alcance)

// Metodos de cadenas de texto (strings)
let cadena = "Hola mundo mundo"
// Longitud de la cadena
console.log(cadena.length)
// Transformar a mayusculas
console.log(cadena.toUpperCase())
// Transformar a minusculas
console.log(cadena.toLowerCase())
// Obtener caracter de una cadena
console.log(cadena.charAt(5))
// Obtener el utlimo caracter de una cadena
console.log(cadena.charAt(cadena.length -1))
// Verificar si una cadena contiene un texto
console.log(cadena.includes("Mundo"))
// Reemplazar texto de una cadena
console.log(cadena.replace("mundo", "a todos"))
/* cadena =  cadena.replace("mundo", "a todos")*/

// Cortar un string 
console.log(cadena.slice(0, 4))

// Cortar un string 
console.log(cadena.substring(0, 4))

// Arreglos (Arrays)
// Los arreglos se empiezan a contar desde 0
//                0         1       2        3
let frutas = ["Manzana", "Mango", "Pera", "Fresa"]
console.log(frutas)
// Imprimir alguna posicion del arreglo
console.log(frutas[0])

// El arreglo puede ser de varios tipos
let aleatorio = [1, "Hola", true, 2.5, [1, 2, 3]]
console.log(aleatorio)

// Arreglo de arreglos
let compras= [
    ["Manzana", "Pera"], 
    ["jamon", "queso"], 
    ["carne", "pollo"]
]

// Imprimir elementos del arreglo de arreglos
console.log(compras[1][0])

// Metodos de arreglos
let listaFrutas = ["Manzana", "Mango", "Pera", "Fresa"]
// Agregar un elemento al final del arreglo
listaFrutas.push("Uva")
console.log(listaFrutas)
// Eliminar el ultimo elemento
listaFrutas.pop()
console.log(listaFrutas)
// Agregar un elemento al principio del arreglo
listaFrutas.unshift("Uva")
console.log(listaFrutas)
// Eliminar el primer elemento
listaFrutas.shift()
console.log(listaFrutas)
// Eliminar un elemento por el indice
listaFrutas.splice(2, 1)
console.log(listaFrutas)
// Obtener el indice de un elemento
console.log(listaFrutas.indexOf("Manzana"))
// Reemplazar un elemento por su indice
listaFrutas[1] = "Uva"
console.log(listaFrutas)
// Ordenar un arreglo alfabeticamente
listaFrutas.sort()
console.log(listaFrutas)
// Invertir el orden de un arreglo
listaFrutas.reverse()
console.log(listaFrutas)
// Obtener un SubArreglo
console.log(listaFrutas.slice(0,2))
// Obtener la longitud de un arreglo
console.log(listaFrutas.length)

// Bucles, loops, ciclos
for (let i = 0; i < 10; i++) {
    console.log(i)
}

// Recorrer un arreglo
for (let i = 0; i < listaFrutas.length; i++) {
    console.log(listaFrutas[i])
}