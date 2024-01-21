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