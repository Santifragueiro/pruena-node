//Crear un archivo dividir.js que contenga una función llamada dividir, la cual debe ser
//exportada al final del archivo. Esta función deberá recibir 2 parámetros y retornar la
///división de los mismos. Importante:
//a. Contemplar el escenario donde si alguno de los dos parámetros es cero, la
//función retornará "No se puede dividir por cero". 


function dividir (numero1, numero2){
    if (numero1 == 0 || numero2 == 0){
        return "No se puede dividir por cero";
    }
    return numero1 / numero2
}

module.exports = dividir
