/*
var suma = 4 + 6
var resta = 54-33
var multiplicacion = 8 * 4
var division = 48 / 4

console.log("Suma:",suma,"Resta:",resta,"Multiplicación:",multiplicacion,"División:",division,)
*/

/*
var modulo = 9 % 3
console.log(modulo)
*/

/*
var Num = 20
var Incremento = ++Num
var Decremento = --Num
var Unary = -Num
console.log(Num,Incremento,Decremento,Unary)
*/

/*
var x = true
var Not = (!x)
console.log(Not)
*/

/*
var x = true
var y = false
console.log((x && y))
*/

/*
function evaluarPares(numero1,numero2){
  if((numero1 % 2)==0 && (numero2 % 2)==0){
    alert('Los Numeros son Pares')
  }
}
evaluarPares(2,10)
*/

/*
var x = true
var y = false
console.log((x || y))
*/

/*
function evaluarPares(numero1,numero2){
  if((numero1 % 2)==0 || (numero2 % 2)==0){
    alert('Alguno de los Numeros es Par')
  }
  else {
    alert('Ninguno de los Numeros es par')
  }
}
evaluarPares(3,7)
*/

var respuesta = "";
respuesta = respuesta + "(6>5) && (5!=6) : " + ((6>5) && (5!=6)) + "\n";
respuesta = respuesta + "(3<8) || (8==7) : " + ((3<8) || (8==7)) + "\n";
respuesta = respuesta + "!(4>5) : " + ((4>5)) + "\n";

var numero = 6;
numero++;
respuesta = respuesta + "número: " + (numero) + "\n";

var numero2 = --numero;
respuesta = respuesta + ("numero2 = " + numero2) + "\n";
respuesta = respuesta + ("numero = " + numero) + "\n";

var numero3 = numero--;
respuesta = respuesta + ("numero3= " + numero3) + "\n";
respuesta = respuesta + ("numero = " + numero) + "\n";

alert(respuesta);
