console.log("Ejercicio 4:")

function verificarNombre(){
    let name = prompt("Ingrese su nombre").toLowerCase()
    if(name == 'juan'){
        alert('Bienvenido Juan, gracias por confiar en nosotros' )
    }
    else{
        alert('Lo sentimos pero no tienes acceso a este sitio' )
    }
}