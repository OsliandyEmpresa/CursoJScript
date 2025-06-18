//Declaracion -- Calve Valor

let map = new Map()

//Iniciacion

map = new Map([
    ["nombre", "Osliandy"],
    ["apellido", "Sierra"],
    ["ciudad", "habana"],
    ["edad", 10], 
])

//Metodos

//set -- modifica o agraga elementos, si existe la clave cambia el valor

map.set("juego", "Dota")

//get -- acceder a un valor mediante su clave

map.get('nombre')

//has -- si existe la clave

map.has('nombre')

// delete elimina el elmento mediante la clave

map.delete("apellido")

// clear -- borrar el mapa 

map.clear()

// keys -- retorna un listado de todas las claves
// values -- retora un listadod e los valores
// entris -- muestrta todas la claves y valores 
// size -- longitud del mapa
map.keys()
map.values()
map.entries()
map.size