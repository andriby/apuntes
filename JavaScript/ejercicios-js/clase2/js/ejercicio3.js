function parImpar(){
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