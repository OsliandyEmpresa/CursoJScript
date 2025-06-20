let persona = {
    nombre : "Pedro",
    edad : 10,
    telefono : 59231606,
    job : {
        nombre : "Programador",
        tiempo : 1,
    },

    caminar : function () {
        console.log('Dotas')
    } 
}

// LLamada por punto

persona.nombre

// Modificacion atributos

persona.nombre = "Juan"

//Eliminar propiedades

delete persona.nombre

//Agregar propiedad
//Ahi q agregar una clave q no exista sino la modifica
persona.poder = 100

//Metodos
persona.caminar()

