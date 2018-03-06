//Variables Operación
var operandoa;
var operandob;
var operacion;

function init(){

  //Variables
  var display = document.getElementById('display');
  var reset = document.getElementById('on');
  var sign = document.getElementById('sign');
  var raiz = document.getElementById('raiz');
  var division = document.getElementById('dividido');
  var siete = document.getElementById('7');
  var ocho = document.getElementById('8');
  var nueve = document.getElementById('9');
  var multiplica = document.getElementById('por');
  var cuatro = document.getElementById('4');
  var cinco = document.getElementById('5');
  var seis = document.getElementById('6');
  var resta = document.getElementById('menos');
  var uno = document.getElementById('1');
  var dos = document.getElementById('2');
  var tres = document.getElementById('3');
  var zero = document.getElementById('0');
  var punto = document.getElementById('punto');
  var igual = document.getElementById('igual');
  var suma = document.getElementById('mas');
  var btn = document.getElementsByClassName('tecla');


  //Eventos al dar click - Si es cero el valor inicial no concatenar -
  //Limitar Numero a 8 Digitos
  uno.onclick = function(e){
    if (display.innerHTML != 0 ){
      display.innerHTML = display.innerHTML +'1';
    }else {
      display.innerHTML = '1';
    }
    display.innerHTML=display.innerHTML.toString()//convierte dato a texto
    display.innerHTML=display.innerHTML.substring(0,8)//reduce caracteres a 8
    display.innerHTML=display.innerHTML;
  }

  dos.onclick = function(e){
    if (display.innerHTML != 0 ){
      display.innerHTML = display.innerHTML +'2';
    }else {
      display.innerHTML = '2';
    }
    display.innerHTML=display.innerHTML.toString()//convierte dato a texto
    display.innerHTML=display.innerHTML.substring(0,8)//reduce caracteres a 8
    display.innerHTML=display.innerHTML;
  }

  tres.onclick = function(e){
    if (display.innerHTML != 0 ){
      display.innerHTML = display.innerHTML +'3';
    }else {
      display.innerHTML = '3';
    }
    display.innerHTML=display.innerHTML.toString()//convierte dato a texto
    display.innerHTML=display.innerHTML.substring(0,8)//reduce caracteres a 8
    display.innerHTML=display.innerHTML;
  }
  cuatro.onclick = function(e){
    if (display.innerHTML != 0 ){
      display.innerHTML = display.innerHTML +'4';
    }else {
      display.innerHTML = '4';
    }
    display.innerHTML=display.innerHTML.toString()//convierte dato a texto
    display.innerHTML=display.innerHTML.substring(0,8)//reduce caracteres a 8
    display.innerHTML=display.innerHTML;
  }

  cinco.onclick = function(e){
    if (display.innerHTML != 0 ){
      display.innerHTML = display.innerHTML +'5';
    }else {
      display.innerHTML = '5';
    }
    display.innerHTML=display.innerHTML.toString()//convierte dato a texto
    display.innerHTML=display.innerHTML.substring(0,8)//reduce caracteres a 8
    display.innerHTML=display.innerHTML;
  }

  seis.onclick = function(e){
    if (display.innerHTML != 0 ){
      display.innerHTML = display.innerHTML +'6';
    }else {
      display.innerHTML = '6';
    }
    display.innerHTML=display.innerHTML.toString()//convierte dato a texto
    display.innerHTML=display.innerHTML.substring(0,8)//reduce caracteres a 8
    display.innerHTML=display.innerHTML;
  }

  siete.onclick = function(e){
    if (display.innerHTML != 0 ){
      display.innerHTML = display.innerHTML +'7';
    }else {
      display.innerHTML = '7';
    }
    display.innerHTML=display.innerHTML.toString()//convierte dato a texto
    display.innerHTML=display.innerHTML.substring(0,8)//reduce caracteres a 8
    display.innerHTML=display.innerHTML;
  }

  ocho.onclick = function(e){
    if (display.innerHTML != 0 ){
      display.innerHTML = display.innerHTML +'8';
    }else {
      display.innerHTML = '8';
    }
    display.innerHTML=display.innerHTML.toString()//convierte dato a texto
    display.innerHTML=display.innerHTML.substring(0,8)//reduce caracteres a 8
    display.innerHTML=display.innerHTML;
  }

  nueve.onclick = function(e){
    if (display.innerHTML != 0 ){
      display.innerHTML = display.innerHTML +'9';
    }else {
      display.innerHTML = '9';
    }
    display.innerHTML=display.innerHTML.toString()//convierte dato a texto
    display.innerHTML=display.innerHTML.substring(0,8)//reduce caracteres a 8
    display.innerHTML=display.innerHTML;
  }

  punto.onclick = function(e){
    display.innerHTML = display.innerHTML + '.';
  }
  sign.onclick = function(e){
    alert(display.innerHTML)
    if (display.innerHTML == 0) {
      display.innerHTML = display.innerHTML + "";
    }else {
      display.innerHTML = "-" + display.innerHTML;
    }

//Impide Agregar Cero's si el valor es = 0
  }
  zero.onclick = function(e){
    if (display.innerHTML >0) {
      display.innerHTML = display.innerHTML + '0';
    }
    else{
    display.innerHTML = display.innerHTML + '';
    }
  }

  //Operaciones
  reset.onclick = function(e){
     resetear();
  }
  suma.onclick = function(e){
     operandoa = display.innerHTML;
     operacion = "+";
     limpiar();
  }
  resta.onclick = function(e){
     operandoa = display.innerHTML;
     operacion = "-";
     limpiar();
  }
  multiplica.onclick = function(e){
     operandoa = display.innerHTML;
     operacion = "*";
     limpiar();
  }
  division.onclick = function(e){
     operandoa = display.innerHTML;
     operacion = "/";
     limpiar();
  }
  igual.onclick = function(e){
     operandob = display.innerHTML;
     resolver();
    }
}

//Limpiar
  function limpiar(){
    display.innerHTML = "";
  }
  function resetear(){
  display.innerHTML = "0";
  operandoa = 0;
  operandob = 0;
  operacion = "";
  }

//Resolver
  function resolver(){
    var res = 0;
    switch(operacion){
      case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
      case "-":
          res = parseFloat(operandoa) - parseFloat(operandob);
          break;
      case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
      case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
    }
    resetear();

//limita resultado a 8 digitos
    display.innerHTML = res;
    res=res.toString()//convierte dato a texto
    res=res.substring(0,8)//reduce caracteres a 8
    display.innerHTML=res//solucion
  }
