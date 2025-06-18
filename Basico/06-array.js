//Declaracion
let array = []//Mas recomendada
let array1 = new Array()//Menos recomendada

//Inicializacion
array = [1, 2, 3]
array1 = new Array(3)

//Inicializacion por posiciones
//Array0
array[0] = 10
array[1] = 4
array[2] = true

//Array1
array1[0] = 20
array1[1] = true
array1[2] = `Hola`

//Metodo comunes

//push -- Inserta los elementos en la ultima pisicion del Array
array.push(20)
array.push(10)
array.push(0)

//pop -- Elimina el ultimo elemento del Array y lo devuelve
array.pop()

//shift -- Elimina el primer elemento de la Array y lo devuelve
array.shift()

//onshift -- Agragar uno o mas elementos en el inicio del Array
array.unshift(`Osliandy` ,`Sierra`)

//length -- Muestra la longitud del Array
array.length

//Borrar Array
array = []

//slice -- Devuelve una copia de una porcion del Array,ceunta el primer indice y el segundo no cuenta
array.slice(1 ,2)