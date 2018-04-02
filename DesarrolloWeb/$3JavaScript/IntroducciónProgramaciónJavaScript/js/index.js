
/*Matrices Vectores*/
var fila1=["Carlos", 12,40];
var fila2=["Adham", 45,76];
var fila3=["Said", 45,73];
var fila4=["Aldo", 78,80];
var matriz=[fila1,fila2,fila3,fila4];

/*Recetas*/
document.getElementById('boton-receta1').addEventListener('click', function(){
var ingredientes = ["Claras de Huevo", "Azucar Blanca", "Leche Condensada", "Gelatina sin sabor", "Limones"];
var unidadesClarasdeHuevo = 5;
var gramosAzucarBlanca    = 150;
var gramosLecheCondensada = 200;
var sobresGelatina        = 1;
var unidadesLimon         = 4;

console.log("Adicionar las "+unidadesClarasdeHuevo+" "+ingredientes[0]+" en un Bol y batir con los "+gramosAzucarBlanca+" gramos de "+ingredientes[1]+".");
console.log("Adicionar los "+gramosLecheCondensada+" gramos de "+ingredientes[2]+"y batir bien.")
console.log("Adiciona el zumo de los "+unidadesLimon+" "+ingredientes[4]+" y "+sobresGelatina+" sobre de "+ingredientes[3]+" sin sabor hidratada en agua tibia.")
console.log("Deposita la mezcla en moldes individaules y mételo a la nevera. ¡En 30 minutos to postre estará listo!")

})

document.getElementById('boton-receta2').addEventListener('click', function(){
  var ingredientes = ["Ginebra", "Vermouth Seco", "Aceituna"];
  var cantidadGinebra        = 2.5;
  var cantidadVermouth       = 0.5;
  var unidadesAceituna       = 1;

  console.log("Vertir las "+cantidadGinebra+" onzas de "+ingredientes[0]+" en una coctelera y añadir las "+cantidadVermouth+" onzas de "+ingredientes[1]+".")
  console.log("Pon la mezcla en una copa tipo Martini y añade "+unidadesAceituna+" "+ingredientes[2]+".")

})
