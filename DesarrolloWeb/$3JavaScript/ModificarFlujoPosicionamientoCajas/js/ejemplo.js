
var tarjetas = document.getElementsByClassName('card');

tarjetas[0].style.order='4';
tarjetas[3].style.order='1';

/*//row-reverse
document.getElementById('contenedor_tarjetas').style.flexflow="row-reverse nowrap";
*/
//column
document.getElementById("contenedor_tarjetas").style.flexflow = 'column nowrap';
