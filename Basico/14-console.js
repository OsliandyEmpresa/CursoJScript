//Mostrar ingormacion mas general
console.log("Dotaaaaaaaaaaa")

//Solo para errores
console.error("Solo para errores")

//Avertencias
console.warn("Esto es para advertencias")

//Adicional
console.info("Solo para informacion adicionesl")

//Forma tabla
let data = [
    {nombre : "Pedro", edad : 14},
    {nombre : "Oslo", edad : 4},
]
console.table(data)

//Mostrar informacion de una cosa espesifica
console.group("Usuario: ")
console.log("Osliandy")
console.log("Osliandy")
console.log("Osliandy")
console.log("Osliandy")
console.groupEnd

//Medir tiempo de ejecucuion 
console.time("Tiempo de ejecucion")
console.timeEnd("Tiempo de ejecucion")


//Contador
console.count("Click")
console.count("Click")
console.count("Click")
console.count("Click")
console.count("Click")

//Seguimento de ejecucion
console.trace("Seguimiento de ejecucion")

//Borrar consola
console.clear()

