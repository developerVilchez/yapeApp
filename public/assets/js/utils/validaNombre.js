"use strict";
const numeros="0123456789";

function tiene_numeros(texto){
   for(var i=0; i<texto.length; i++){
      if (numeros.indexOf(texto.charAt(i),0)!=-1){
         return 1;
      }
   }
   return 0;
}




