//argumentNames Funcion permite ver nombres de Parametros que espera la funcion
  function evalParams(elementId, tipoSelector, tiempoEspera){
  }
  var functionParams = evalParams.argumentNames()
  console.log(functionParams)

//bind reafirma que elemento mostrar
  var alertarClick = Class.create({
  initialize: function(mensaje){
    this.rsj  = mensaje
    },
    capturarClick: function(event){
      event.stop()
      alert(this.rsj)
    }
  })
  var miAlerta  = new alertarClick("Hiciste Click sobre el Boton")
  $('btnAlerta').observe('click',miAlerta.capturarClick.bind(miAlerta))

//defer ejecuta la funcion al findAll
function mostrarMensaje(mensaje){
  alert(mensaje)
}

mostrarMensaje("uno")
mostrarMensaje.defer("dos")
mostrarMensaje("tres")

//delay en segundos
function mostrarMensaje(mensaje){
  alert(mensaje)
}

mostrarMensaje.delay(4,"5sec")
mostrarMensaje.delay(5,"6sec")
mostrarMensaje.delay(6,"7sec")

//is object? busqueda de objetos
// isArray
// isElement
// isString
// isDate

 var mArray = ['pera', 'manzana','naranja','mandarina']
 var tipo = Object.isArray(mArray)
 console.log(tipo)

//Buscar mString
var mString = 'hello-world'
var mStringCam  = mString.camelize()//Quita el guion y camia a Mayus la W
console.log(mStringCam)

var mString1 = 'hello world'
var mString1Cap  = mString1.capitalize()//Mayus a la H
console.log(mString1Cap)

var mString2 = ''
var mString2Empty  = mString2.empty()//Busca si esta vacia la variable
console.log(mString2Empty)

var mString3 = 'Framework Javascript'
var mString3Include  = mString3.include('Java')//Busca texto en la variable
console.log(mString3Include)
