// Try Catch
/* 
    El try catch es una estructura que nos permite manejar 
*/

// Ejemplo 1

try {
    let x = 0
    let y = 0
    console.log(x / y)
} catch (error) {
    console.error(error);
}

// Asincronismo
/* 
    es una caracteristica de javascript que nos permite ejecutar codigo sin esperar a que se ejecute una linea de codigo
*/

// Set Interval
/* 
    Nos permite ejecutar una funcion cada cierto tiempo
*/

// Ejemplos
setInterval(() =>{
    console.log("hola")
}, 1000)

// Set TimeOut
/* 
    nos permite ejecutar una funcion despues de cierto tiempo
*/

// Ejemplo
setTimeout(() => {
    console.log("Hola");
}, 1000);

// Otras funciones asincronicas o conceptos
/* Call back es una funcion que se pasa como argumento a otra funcion */

// Promesas
/* Las promesas son una forma de trabajar con codigo asincronico de una manera mas sencilla */

// Async await
/* El async es una forma de trabajar con promesas de una manera mas sencilla */