function enviar(){
    let nombre = document.getElementById("nombre").value
    let edad = document.getElementById("edad").value
    let puesto = document.getElementById("puesto").value

    if (puesto==1){
        document.getElementById("mostrarNombre").innerHTML = nombre
        document.getElementById("mostrarEdad").innerHTML = edad
    }
    if (puesto==2){
        document.getElementById("mostrarNombre2").innerHTML = nombre
        document.getElementById("mostrarEdad2").innerHTML = edad
    }
    if (puesto==3){
        document.getElementById("mostrarNombre3").innerHTML = nombre
        document.getElementById("mostrarEdad3").innerHTML = edad
    }
}
