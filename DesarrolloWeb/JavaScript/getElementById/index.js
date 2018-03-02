
var nombre;
var apellido;
var email;
var usuario;
var password;
var boton;

//Asignación

nombre = document.getElementById("nombre");
apellido = document.getElementById("apellido");
email = document.getElementById("email");
usuario = document.getElementById("usuario");
password = document.getElementById("password");
boton = document.getElementById("btn-guardar");

//Mostrar objeto en consola
console.log(password, apellido);

//Function que se ejecuta en el evento
 function monstrarAlerta(mensaje){
   alert('El usuario realizo click en el boton de envio')
 }

 //Asignación del evento al boton
 boton.addEventListener('click', monstrarAlerta);
