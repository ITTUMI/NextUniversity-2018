var  tarjetas_amarillas = document.getElementsByClassName('card-panel yellow');

//Cambio de Texto al primer div
tarjetas_amarillas[0].getElementsByClassName('texto_tarjeta')[0].innerHTML='Nuevo Texto';

//Cambio Texto a los 3 div
for (var i = 0; i < tarjetas_amarillas.length; i++) {
  tarjetas_amarillas[i].getElementsByClassName('texto_tarjeta')[0].innerHTML='Nuevo Texto '+i;
}
