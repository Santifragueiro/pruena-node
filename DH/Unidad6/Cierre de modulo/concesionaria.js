const autos = require('./autos')/* requerir módulo autos */

const concesionaria = {
    autos: autos,
    buscarAuto: function buscarAuto (patente){
        for(i=0 ; i< autos.length; i++) { 
          if(patente === autos[i].patente)
            return autos[i];
        } return null
    },
    venderAuto: function venderAuto (patente, buscarAuto) {
        for(i=0 ; i< autos.length; i++) { 
            if(patente === autos[i].patente){
               return autos[i].vendido = true
            }
        } return null
  
    }
   // autosParaLaVenta: autos.filter(vendido == false),
}


//console.log(venderAuto("JaJK116","Toyota"))


//console.log(buscarAuto("JJK116"))






