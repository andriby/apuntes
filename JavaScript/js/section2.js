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
// Verificar si una cadena contiene un texto
console.log(cadena.includes("Mundo"))
// Reemplazar texto de una cadena
console.log(cadena.replace("mundo", "a todos"))
/* cadena =  cadena.replace("mundo", "a todos")*/

// Cortar un string 
console.log(cadena.slice(0, 4))

// Cortar un string 
console.log(cadena.substring(0, 4))