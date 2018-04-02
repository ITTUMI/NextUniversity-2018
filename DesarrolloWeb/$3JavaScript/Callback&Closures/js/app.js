/*
function inicializa(){
  var prop = 42

  function monstrarProp(){
    alert(prop)
  }
  monstrarProp()
}
inicializa()
*/
/*Callout
var calculadora = (function(num1,num2){
  var resultado = 0

  function actualizarResultado(nuevoResultado){
    resultado = nuevoResultado
  }

  return {
    sumar: function(){
      var resultado = num1 + num2
      actualizarResultado(resultado)
    },
    restar: function(){
      var resultado = num1 - num2
      actualizarResultado(resultado)
    },
    multiplicar: function(){
      var resultado = num1 * num2
      actualizarResultado(resultado)
    },
    dividir: function(){
      var resultado = num1 / num2
      actualizarResultado(resultado)
    },
    resultado: function() {
      return resultado
    }
  }
})
*/

/*
function aviso(mensaje){
  alert(mensaje)
}
function Operacionlarga(param1, param2, aviso){
  aviso('Término de realizar operaciones')
}
*/

/*
function ejecutaProceso(miCallback){
  miCallback('Devolver un valor')
}

ejecutaProceso(function(valorDevuelto){
  console.log('Término de hacer algo y responio con: ' + valorDevuelto)
})
*/
function uno(mensaje){
  alert(mensaje)
}
function dos(mensaje){
  alert(mensaje)
}
function tres(mensaje){
  alert(mensaje)
}
function funcionCompleja(callback1, callback2, callback3){
  callback1('Termino el Proceso 1')
  callback2('Termino el Proceso 2')
  callback3('Termino toda la funcion')
}

funcionCompleja(uno, dos, tres)
