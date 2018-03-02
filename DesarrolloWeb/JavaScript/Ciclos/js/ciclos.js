/*Ciclo Do While
var lista_nombres=["Adham","Rodolfo","Aldo","Valerio","Jason","Jesus","Raul","Pepe","Daniel","Ricardo"];

var i=5;

var resultado="";

do {
  resultado = resultado + lista_nombres[i] + "\n" ;
  i=i+1;
} while (i<10);

alert(resultado);
*/

/*Ciclo While
var lista_nombres=["Adham","Rodolfo","Aldo","Valerio","Jason","Jesus","Raul","Pepe","Daniel","Ricardo"];

var i=5;

var resultado="";

while (i<10) {
  resultado = resultado + lista_nombres[i] + "\n" ;
  i=i+1;
}
alert(resultado);
*/

/*Cilo For
var lista_nombres=["Adham","Rodolfo","Aldo","Valerio","Jason","Jesus","Raul","Pepe","Daniel","Ricardo"];

var resultado="";

for (var i = 5; i < 10; i++) {
  resultado= resultado + lista_nombres[i] + "\n";
}
alert(resultado);
*/

/*For In*/
var lista_nombres=["Adham","Rodolfo","Aldo","Valerio","Jason","Jesus","Raul","Pepe","Daniel","Ricardo"];

var resultado="";

for (nombre_temp in lista_nombres) {
  resultado= resultado + lista_nombres[nombre_temp] + "\n";
  }
  alert(resultado);
