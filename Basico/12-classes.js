class Persona{
    #nombre // Privada
    constructor(nombre){
        this.#nombre = nombre
    }

    saludar() {
       console.log("Hola") 
    }

    get nombre(){
        return this.#nombre
    }

    set nombre(nombre){
        this.#nombre = nombre
    }
}

//Herencia

class Hombre extends Persona{
    constructor(nombre, edad){
        super(nombre)
        this.edad = edad
    }

    saludar(){
        console.log('Dotaaaaa')
    }
}

//Metodos estaticos

class OperacionMate{
    
    static suma(a, b){
        return a + b
    }

}