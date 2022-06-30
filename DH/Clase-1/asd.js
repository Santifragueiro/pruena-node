function masMenos(x){
    let acumulador = 0
    let positivo = 0
    let cero = 0
    for( let i = 0; i < x.length ; i++){
        if(x[i] > 0){
            acumulador = acumulador + 1
            positivo = acumulador / x.length
                                  
        } else if (x [i] = 0) {
            acumulador = acumulador + 1
            cero = acumulador / x.length
        }
        
    }return positivo
}

console.log (masMenos([1, 2, 0, -1]))