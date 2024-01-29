// SECTION 1

// Ejercicio 1
function edad(e){
    if(e >= 0 && e <= 5) return 'bebe'
    else if(e <= 11) return 'niño'
    else if(e <= 18) return 'adolescente'
    else if(e <= 30) return 'joven'
    else if(e <= 64) return 'adulto'
    else if(e <= 120) return 'adulto mayor'
    else return 'La edad no es valida (Eres una imposibilidad en este mundo)'
}
console.log("Eres un ", edad(1))

// Ejercicio 2
function dia(d){
    if(d == 'Lunes' || d == 'Martes' || d == 'Miercoles' || d == 'Jueves' || d == 'Viernes') return 'Es un dia de la semana'
    else if(d == 'Sabado' || d == 'Domingo') return 'Es un fin de semana'
    else return 'Por favor ingrese un dia de la semana valido'
}
console.log(dia('Lunes'))

// Ejercicio 3
function parImpar(n){
    if(n % 2 == 0) return 'El numero es par' 
    else if(n % 2 == !0) return 'El numero es impar' 
    else return 'Por favor ingrese un numero entero' 
}
console.log(parImpar(2))

// Ejercicio 4
function nombre(name){
    if(name == 'Juan') return 'Bienvenido Juan, gracias por confiar en nosotros' 
    else return 'Lo sentimos pero no tienes acceso a este sitio' 
}
console.log(nombre('Juan'))

// Ejercicio 5
function verificarDiaNavegador(){
    let d = prompt('ingrese el dia de la semana').toLowerCase()
    if(d == 'lunes' || d == 'martes' || d == 'miercoles' || d == 'jueves' || d == 'viernes'){
        alert( 'Es un dia de la semana')
    }
    else if(d == 'sabado' || d == 'domingo'){
        alert('Es un fin de semana')
    }
    else{
        alert('Por favor ingrese un dia de la semana valido')
    }
}

// Ejercicio 6
function parImparNavegador(){
    let n = prompt('Ingrese un numero')
    if(n % 2 == 0){
        alert('El numero es par' )
    }
    else if(n % 2 == !0){
        alert('El numero es impar' )
    }
    else{
        alert('Por favor ingrese un numero entero')
    }
}

// Ejercicio 7
function verificarNombreNavegador(){
    let name = prompt("Ingrese su nombre").toLowerCase()
    if(name == 'juan'){
        alert('Bienvenido Juan, gracias por confiar en nosotros' )
    }
    else{
        alert('Lo sentimos pero no tienes acceso a este sitio' )
    }
}

// Ejercicio 8
function verificarEdadNavegador(){
    let e = prompt("Ingrese su edad")
    if(e >= 0 && e <= 5){
        alert("Eres un bebe")
    }
    else if(e <= 11){
        alert("Eres un niño")
    }
    else if(e <= 18){
        alert("Eres un adolescente")
    }
    else if(e <= 30){
        alert("Eres un joven")
    }
    else if(e <= 64){
        alert("Eres un Adulto")
    }
    else if(e <= 120){
        alert("Eres un Adulto Mayor")
    }
    else{
        alert ('La edad no es valida (Eres una imposibilidad en este mundo)')
    }
}

// SECTION 2

// Ejercicio 1
function mayusculas(){
    let str = prompt("Ingrese una palabra")
    alert(str.toUpperCase())
}

// Ejercicio 2
function minusculas(){
    let str = prompt("Ingrese una palabra")
    alert(str.toLowerCase())
}

// Ejercicio 3
function longitud(){
    let str = prompt("Ingrese una palabra")
    alert(str.length)
}

// Ejercicio 4
function primeraLetra(){
    let str = prompt("Ingrese una palabra")
    alert(str.charAt(0))
}

// Ejercicio 5
function ultimaLetra(){
    let str = prompt("Ingrese una palabra")
    alert(str.charAt(str.length - 1))
}

// Ejercicio 6
function eliminarPrimeraLetra(){
    let str = prompt("Ingrese una palabra")
    alert(str.slice(1, str.length))
}

//  Ejercicio 7
var numeros = [4, 2, 3, 6]

function imprimirElementos(arreglo){
    for (let i = 0; i < arreglo.length; i++) {
        console.log(numeros[i])
    }
}

imprimirElementos(numeros)

//  Ejercicio 8
function sumaArrays(arreglo){
    let suma = 0
    for (let i = 0; i < arreglo.length; i++) {
        suma = suma + arreglo[i]
    }
    console.log(suma)
}
sumaArrays(numeros)


//  Ejercicio 9
function promedio(arreglo){
    let promedio = 0
    for (let i = 0; i < arreglo.length; i++) {
        promedio = promedio + arreglo[i]
    }
    promedio = promedio / arreglo.length
    console.log(promedio)
}
promedio(numeros)

//  Ejercicio 10
function numeroMayor(arreglo) {
    let numeroMayor = arreglo[0]
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] > numeroMayor) {
            numeroMayor = arreglo[i]
        }
    }
    console.log(numeroMayor)
}
numeroMayor(numeros)

//  Ejercicio 11
function numeroMenor(arreglo) {
    let numeroMenor = arreglo[0]
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] < numeroMenor) {
            numeroMenor = arreglo[i]
        }
    }
    console.log(numeroMenor)
}
numeroMenor(numeros)


//  Ejercicio 12
function pares(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 == 0) {
            console.log(arreglo[i])
        }
    }
}

pares(numeros)

// EJercicio 13

function impares(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 == !0) {
            console.log(arreglo[i])
        }
    }
}

impares(numeros)

// Ejercicio 14
var frutas = ["Uva" ,"Banana", "Fresa", "Mango", "Guayaba"]
function masLenght(arreglo) {
    let max = arreglo[0]
    for (let i = 0; i < arreglo.length; i++) {
        if (max.length < arreglo[i].length) {
            max = arreglo[i]
        }
    }
    console.log(max)
}

masLenght(frutas)

// Ejercicio 15

function fibonacci() {
    let numero1 = 1
    let numero2 = 1
    for (let i = 0; i < 10; i++) {
        numero1 = numero1 + numero2
        numero2 = numero1 + numero2
        console.log(numero1)
        console.log(numero2)
    }
}

fibonacci()

//Segun el siguiente arreglo de objetos:

const personas = [
{
    nombre: "Juan",
    apellido: "Perez",
    edad: 25,
    hobbies: ["correr", "saltar", "dormir"],
    direccion: {
    direccion_antigua: {
        calle: "calle 1",
        numero: 1,
        barrio: "barrio 1",
    },
    direccion_actual: {
        calle: "calle 2",
        numero: 2,
        barrio: "barrio 2",
    },
    },
},
{
    nombre: "Maria",
    apellido: "Lopez",
    edad: 30,
    hobbies: ["correr", "saltar", "dormir"],
    direccion: {
    direccion_antigua: {
        calle: "calle 3",
        numero: 3,
        barrio: "barrio 3",
    },
    direccion_actual: {
        calle: "calle 4",
        numero: 4,
        barrio: "barrio 4",
    },
    },
},
{
    nombre: "Pedro",
    apellido: "Martinez",
    edad: 35,
    hobbies: ["correr", "saltar", "dormir"],
    direccion: {
    direccion_antigua: {
        calle: "calle 5",
        numero: 5,
        barrio: "barrio 5",
    },
    direccion_actual: {
        calle: "calle 6",
        numero: 6,
        barrio: "barrio 6",
    },
    },
},
]

// Ejercicios con Objetos

// Ejercicio 1
for (const persona of personas) {
    console.log('Nombre:', persona.nombre)
}

// Ejercicio 2
for (const persona of personas) {
    for (const hobbie of persona.hobbies) {
        console.log(hobbie)
    }
} 

// Ejercicio 3

for (const persona of personas) {
    console.log(`Direcciones de ${persona.nombre}`)
    console.log('Direccion actual: ')
    for (const direccion in persona.direccion.direccion_actual) {
        console.log(`${direccion}: ${persona.direccion.direccion_actual[direccion]}`)
    }
    console.log('Direccion antigua: ')
    for (const direccion in persona.direccion.direccion_antigua) {
        console.log(`${direccion}: ${persona.direccion.direccion_antigua[direccion]}`)
    }
} 

// Ejercicio 4
for (const persona of personas) {
    console.log(`Direcciones de ${persona.nombre}`)
    console.log('Direccion actual: ')
    for (const direccion in persona.direccion.direccion_actual) {
        console.log(`${direccion}: ${persona.direccion.direccion_actual[direccion]}`)
    }
}

// Ejercicio 5
for (const persona of personas) {
    console.log(`Direcciones de ${persona.nombre}`)
    console.log('Direccion antigua: ')
    for (const direccion in persona.direccion.direccion_antigua) {
        console.log(`${direccion}: ${persona.direccion.direccion_antigua[direccion]}`)
    }
}
