// import { paisesSudamericanos, ciudadesSudamericanas } from "./constants"; 

// Lista de países sudamericanos
let paisesSudamericanos = [
    { id: 1, nombre: "Argentina" },
    { id: 2, nombre: "Brasil" },
    { id: 3, nombre: "Chile" },
    { id: 4, nombre: "Colombia" },
    { id: 5, nombre: "Perú" },
    { id: 6, nombre: "Ecuador" },
    { id: 7, nombre: "Uruguay" },
    { id: 8, nombre: "Paraguay" },
    { id: 9, nombre: "Venezuela" },
    // ...otros países sudamericanos
];

  // Lista de ciudades con su ID y país relacionado
let ciudadesSudamericanas = [
    { id: 1, nombre: "Buenos Aires", idPais: 1 },
    { id: 2, nombre: "Córdoba", idPais: 1 },
    { id: 3, nombre: "Río de Janeiro", idPais: 2 },
    { id: 4, nombre: "Sao Paulo", idPais: 2 },
    { id: 5, nombre: "Santiago", idPais: 3 },
    { id: 6, nombre: "Valparaíso", idPais: 3 },
    { id: 7, nombre: "Bogotá", idPais: 4 },
    { id: 8, nombre: "Medellín", idPais: 4 },
    { id: 9, nombre: "Lima", idPais: 5 },
    { id: 10, nombre: "Cusco", idPais: 5 },
    { id: 11, nombre: "Quito", idPais: 6 },
    { id: 12, nombre: "Guayaquil", idPais: 6 },
    { id: 13, nombre: "Montevideo", idPais: 7 },
    { id: 14, nombre: "Punta del Este", idPais: 7 },
    { id: 15, nombre: "Asunción", idPais: 8 },
    { id: 16, nombre: "Ciudad del Este", idPais: 8 },
    { id: 17, nombre: "Caracas", idPais: 9 },
    { id: 18, nombre: "Maracaibo", idPais: 9 },
    // ...otras ciudades sudamericanas y sus respectivos países
];


paisesSudamericanos.map(
    (pais) => {
    (console.log(`Pais: ${pais.nombre}`)),
    ciudadesSudamericanas.map(
        (ciudad) => {
            if (ciudad.idPais == pais.id) {
                console.log(`${ciudad.nombre}`)
            }
        }
    )
})

// spread operator

let paises = [...paisesSudamericanos, {id: 10, nombre: "Mexico"}]

// Censurar las malas palabras de un texto 
let malasPalabras = ['chispitas', 'centellas', 'caracolas', 'rayos', 'recorcholis']
let texto = "Diablos viejo, esto es un infierno lleno de chispitas y caracolas"

malasPalabras.map(
    (palabra) => {
        while(texto.includes(palabra)){
            texto = texto.replace(palabra, '*****')
        }
    }
)
    console.log(texto)

    // Expresiones regulares 
    // REGEX
    // son patrones que se utilizan para validar texto, buscar texto, reemplazar texto, etc

let regex = /chispitas/gi
console.log(texto.replace(regex, '***'))

// Ejemplo de expresion regular para validar nombre
let nombre = "juan"
let regexNombre = /^[a-zA-Z]$/
console.log(regexNombre.test(nombre))

// Validar telefono
let telefono = '0412-1234567'
let regexTelefono = /^\d{4}-\d{7}$/
console.log(regexTelefono.test(telefono))