function verificarDia(){
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