
function saludo() {
    console.log('Hola modo')
}

function saludoNombre(nombre) {
    console.log(`Hola ${nombre}`)
}

//Duncion anonima

 const hola = function(name) {
    console.log(`Hola ${name}`)
}

hola('Dota')

//Funcion flecha
    
const aa = (nombre) => {console.log(`Hola ${nombre}`)}

//Valores de retorno

function suma(a , b) {
    return a + b
}

//Funcion anidada

function externa() {
    function interna() {
        console.log('HOla')
    }
    interna()
}

//Fuancion de orden superior
//esto es una funcion q recibe una funcion como parametro
function name(params , parametro) {
    params(parametro)
}