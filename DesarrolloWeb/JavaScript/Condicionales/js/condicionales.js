/*Condicional Simple
var a=0, b=0, r=0;
a=prompt("Ingrese el valor de a: ");
b=prompt("Ingrese el valor de b: ");
if(a  > b) {
  r=a*b;
}
alert("el valor de r es: " + r);
*/

/*Condicional Doble
var a=0, b=0, r=0;
a= prompt("Ingrese el valor de a: ");
b= prompt("Ingrese el valor de b: ");

if(a>b) {
  r=a*b;
}
else {
  r=a/b;
}
alert("el valor de r es: " + r);
*/

var a=0, b=0, option=0, r=0;

a= prompt("Ingrese el valor de a: ");
b= prompt("Ingrese el valor de b: ");

option= prompt("Ingrese el numero correspondiente a la aplicacion que desee aplicar:\n 1.- Suma \n 2.-Resta \n 3.-Multiplicación \n 4.-División");

a=Number(a);
b=Number(b);
option=Number(option);

switch (option) {
  case 1:
    r=a+b;
    break;
  case 2:
    r=a-b;
    break;
  case 3:
    r=a*b;
    break;
  default:
    r=a/b;
    break;
}

alert("el valor de r: " +r)
