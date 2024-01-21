function verificarEdad(){
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

