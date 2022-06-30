function reporteDePasajeros(estacion){
    let pasajeros = []
    for ( let i = 0; i<= estacion; i++) {      
            
            if (i < 5) {
               let total = 200 + ( i * 20 ) 
               pasajeros.push( "En la estación " + [i] + " hay " + total + " pasajeros arriba del tren" )
               
            }
             else if (i >= 5) {
                let total = 200 + ( i * 20 ) + 20
                pasajeros.push( "En la estación " + [i] + " hay " + total + " pasajeros arriba del tren" )
               
            }
    
        
        
    }
    return pasajeros
}


console.log(reporteDePasajeros(6))
