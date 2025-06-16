//String

let nombre = "Osliandy"
let apellido = 'Sierra'
let saludo = "Hola, " + nombre +" "+apellido

console.log(saludo)

//Longitud de a cadena
console.log(nombre.length)

//Acceso a caracteres
console.log(nombre[7])

//Metodo comunes
//Todo Mayusculas
console.log(nombre.toLocaleUpperCase())
//Todo Minusculas
console.log(nombre.toLocaleLowerCase())
//Muestra la posicion en la q se encuentra la palabra
console.log(nombre.indexOf("Osliandy"))
//Si la palabra esta incluida
console.log(nombre.includes("Hola"))
//Muestra los elemtons q estand entro de esa posiciones incluyendolas
console.log(nombre.slice(1,7))
//Si encuentras una palabra la remplaza por otra
console.log(nombre.replace("Osliandy" , "Pedro"))


// Template literalz (Platilla literal)

//Con el asento invertido se puede escribir la cadena de texto en varias lineas respetando los saltos de linea y espacios
let parrafo =   `Hola,Beunas tardes perro
todo esta bien si es con asento invertido`

console.log(parrafo)

//Intiducion de las variables en cadenas de texto mediante el hacentoi invertido  y el signo de dolar con llaves
let mensaje = `Hola, soy ${nombre} ${apellido}`

console.log(mensaje)


