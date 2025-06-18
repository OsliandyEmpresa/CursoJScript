//Declaracion -- Diferencia de Array(No admite duplicados)

let set = new Set()

//Inicialisacion
set = new Set(["Osliandy" ,"Sierra", "Suarez"])

//Metodos Comunes

//Add y delete -- Agragar al final y Eliminar un elemento especifico
set.add("Pedro")
set.delete("Oslaindy")

//has -- Compueba si existe
set.has("Osliandy")

//size -- Longitud
set.size

//Convetir Set en Array
let array = new Array.from(set)

//Contrario
set = new Set(array)
