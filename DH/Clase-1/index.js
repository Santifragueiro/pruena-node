//let edad = 370
//let genero = "M"
//let aportes = "36"


//let unArray = [1, 2, 3];
//let otroArray = [4, 5];

//function trasladar(unArray,otroArray){     
  //   let eliminado = unArray.pop();
    // unArray.pop()
     //otroArray.push(eliminado);
//}

//console.log(unArray)
//console.log(otroArray)

// valor de cada moneda es de 0.25
function sumarMonedas (cantidadDeMonedas){

     let acumulador = 0
     for ( i = 0 ;i < cantidadDeMonedas; i++ ) {
          acumulador = acumulador + 0.25
     }
     return acumulador
}
sumarMonedas (10)


let alumnos = ["nacho", "pedro", "carlos", "nacho", "pedro" ];

function contarNachos (conjuntoDeAlumnos){
     let acumulador = 0
     for (i = 0; i < conjuntoDeAlumnos.length; 1++){
          if(conjuntoDeAlumnos[i] === "nacho"){
               acumulador = acumulador + 1
          }

     } return acumulador
}

let fraseExplotada = ["h", "o", "l", "a"];
function acumularTexto (textoEnPartes) {
     let acumulador = "";
      for (let i = 0; i < textoEnPartes.length ; i++) {
          acumulador = acumulador + textoEnPartes [i]
     } return acumulador
}



let mesesContables = [500, 0, 1200, -600, 400, 1200, 500, 200, -100]

function datosEnArray (arrayOriginal){
     let acumulador = []//porque me pide devovler un conjunto de datos
     
     for (i = 0; i < arrayOriginal.length; i++){
          if (arrayOriginal[i] > 0){
               acumulador.push(arrayOriginal[i])
          }
     }
      return acumulador;
}

datosEnArray(mesesContables)


let unArray = [1, 2, 3];
let otroArray = [3, 4];

function trasladar (unArray,otroArray){ 
let eliminado = unArray.pop();
otroArray.push(eliminado);
}

