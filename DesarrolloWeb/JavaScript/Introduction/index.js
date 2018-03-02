var nombres = ["Andres", "Juan", "Alberto", "Camilo", "Felipe", "Augusto"];

var respuesta = "";
for (var i=0; i < nombres.length; i++){
  	if ((i%2)==0){
      continue;
    }
  	respuesta = respuesta + nombres [i] + "\n";
}
console.log(respuesta);
