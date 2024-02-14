class User {
    constructor(name, lastname, email, phone, password){
        this.name = name
        this.lastname = lastname
        this.email = email
        this.phone = phone
        this.password = password
    }

    /* Metodos de la clase */
    sayHello(){
        console.log(`Hi, my name is ${this.name} ${this.lastname}`)
    }
}

/* Crear nuevos usuarios */
const user1 = new User("Jhon", "Doe", "hola@gmail.com", "1234567890", "1234")

user1.sayHello()

/* Herencia */

class Admin extends User{
    constructor(name, lastname, email, phone, password, role){
        super(name, lastname, email, phone, password)
        this.role = role
    }
    sayHelloAsAdmin(){
        console.log(`Hi, i am ${this.name} ${this.lastname}, and i am ${this.role}`)
    }
}

const user2 = new Admin("Jhon", "Doe", "hola@gmail.com", "1234567890", "1234", "Admin")
console.log(user2.role)
user2.sayHelloAsAdmin()

/* 
    Polimorfismo
    Es la capacidad que tiene un objeto de tomar diferentes formas
*/