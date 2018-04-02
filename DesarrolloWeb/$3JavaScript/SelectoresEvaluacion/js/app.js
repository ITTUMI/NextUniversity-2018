var usuario = {
  nombreCompleto: '',
  nombreUsuario: '',
  contraseña: '',
  email: '',
  fechaNacimiento: '',
  descripcion: '',
  suscripcion: '',
  ciudad: '',
  direccion: '',
  telefono: '',
  celular: '',
  nacionalidad: '',
  masculino: false,
  femenino: false,
  efectivo: false,
  credito: false,
  imprimirDatos: function(){
    console.log('Nombre Completo: '+this.nombreCompleto);
    console.log('Nombre Usuario: '+this.nombreUsuario);
    console.log('E-mail: '+this.email);
    console.log('Fecha Nacimiento: '+this.fechaNacimiento);
    console.log('Descripción: '+this.descripcion);
    console.log('Suscripción: '+this.suscripcion);
    console.log('Ciudad: '+this.ciudad);
    console.log('Dirección: '+this.direccion);
    console.log('Teléfono: '+this.telefono);
    console.log('Celular: '+this.celular);
    console.log('Nacionalidad: '+this.nacionalidad);
    console.log('Genero: '+this.masculino);
    console.log('Genero: '+this.femenino);
    console.log('Efectivo: '+this.efectivo);
    console.log('Credito: '+this.credito);
  }
}


document.getElementById('submit').addEventListener("click", function(){
  usuario.nombreCompleto = document.getElementsByClassName('nombre')[0].value;
  usuario.nombreUsuario = document.getElementsByClassName('nombre_usuario')[0].value;
  usuario.contraseña = document.getElementsByClassName('password')[0].value;
  usuario.email = document.getElementsByName('email')[0].value;
  usuario.fechaNacimiento = document.getElementsByName('fecha_nacimiento')[0].value;
  usuario.ciudad = document.getElementsByName('ciudad_residencia')[0].value;
  usuario.descripcion = document.getElementsByTagName('textarea')[0].value;
  usuario.suscripcion = document.getElementsByTagName('select')[0].value;
  usuario.direccion = document.querySelector('input[name="direccion"]').value;
  usuario.telefono = document.querySelector('input[name="telefono"]').value;
  usuario.celular = document.querySelectorAll("input[name='celular']")[0].value;
  usuario.nacionalidad = document.querySelectorAll('input[name="nacionalidad"]')[0].value;
  usuario.masculino = document.getElementById('masculino').checked;
  usuario.femenino = document.getElementById('femenino').checked;
  usuario.efectivo = document.getElementById('efectivo').checked;
  usuario.credito = document.getElementById('credito').checked;

  usuario.imprimirDatos();
})
