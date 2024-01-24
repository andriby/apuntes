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