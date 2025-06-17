let edad = 10

//Condicional if // else
if (edad > 10) {
    console.log(`Tienes una edad mayor 10`)
}else{
    console.log(`Tienes una edad menor 10`)
}

//Condicional if // else if // else
if (edad == 10) {
    console.log(`Tienes una edad igual 10`)
}
else if(edad == 11){
    console.log(`Tienes una edad igual 11`)

}
else{
    console.log(`Tienes una edad menor 10`)
}

//Condicional switch
switch(edad){
    case 1:
        console.log(`Tienes una edad menor 1`)
        break

    case 2:
        console.log(`Tienes una edad menor 2`)
        break

    case 3:
        console.log(`Tienes una edad menor 3`)
        break

    case 4:
        console.log(`Tienes una edad menor 4`)
        break     
}

//Condicional Ternario

let verificacion = edad == 10 ? `Tienes 10 anos` : `No tiebnes 10 anos`
console.log(verificacion)