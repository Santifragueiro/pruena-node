function masMenos(x){
    let acumulador = 0
    for( let i = 0; i < x.length ; i++){
        if(x[i] > 0){
            let positivo = acumulador + x [i]
            positivo.push(x)
            
        } else if ( x [i] == 0){
            let cero = acumulador + x [i]

        } else if (x[i] < 0) {
            let negativo = acumulador + x [i]
        }   
        
    }return positivo
}