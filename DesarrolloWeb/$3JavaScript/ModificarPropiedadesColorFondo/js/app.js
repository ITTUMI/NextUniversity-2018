document.getElementsByClassName('encabezado')[0].style.background="url('img/logoNextU.png')no-repeat left top";
document.getElementsByClassName('encabezado')[0].style.backgroundSize="250px";
document.getElementsByClassName('promoNextU')[0].style.background="#33cccc";
document.getElementsByClassName('promoNextU')[0].style.color="#000";
document.getElementsByClassName('promoNextU')[0].style.borderRadius="20px";
document.getElementsByClassName('promoNextU')[0].style.boxShadow="2px 3px 5px 7px rgba(0,0,0,0.3)";
document.getElementsByTagName('footer')[0].style.background="url('img/papel_doblado.jpg')repeat right";

/*Cambiar bordes de nav usando ciclo
var listamenu = document.getElementsByTagName('nav')[0].getElementsByTagName('li');
for (var i = 0; i < listamenu.length; i++) {
  listamenu[i].style.borderRadius="20px";
}
*/
//Cambiar bordes ligando hoja de estilos
var hojaEstilos = document.createElement('style');
hojaEstilos.innerHTML = 'nav ul li{border-radius: 10px}';
document.head.appendChild(hojaEstilos);
