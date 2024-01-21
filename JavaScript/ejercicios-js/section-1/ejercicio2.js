console.log("Ejercicio 2:")

function dia(d){
    if(d == 'Lunes' || d == 'Martes' || d == 'Miercoles' || d == 'Jueves' || d == 'Viernes') return 'Es un dia de la semana'
    else if(d == 'Sabado' || d == 'Domingo') return 'Es un fin de semana'
    else return 'Por favor ingrese un dia de la semana valido'
}

console.log(dia('Lunes'))