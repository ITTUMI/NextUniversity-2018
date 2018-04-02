//button On
document.getElementById('activar_rb').checked="true";
//button disabled en on
document.getElementById('activar_rb').disabled="true";
//button animales on
document.getElementById('animales').checked="true";
//button musica preferencia on
document.getElementById('musica').checked="true";
//button postres disabled
document.getElementById('postres').disabled="true";

document.getElementById('sel_animales').disabled="true";
//Selecciona la opcion helado de postres
document.getElementById('sel_postres').querySelector("option[value='helado']").selected="true";
document.getElementById('sel_postres').querySelector("option[value='torta_chocolate']").selected="true";

//innerHTML Cambiar texto h5
document.getElementsByTagName('h5')[1].innerHTML="Selecciona tu animal favorito y tu postre preferido";
//Agregar una nueva lista desplegable
document.getElementById('lista_animales').className="input-field col s4";
document.getElementById('lista_postres').className="input-field col s4";

var con_lista_nueva = document.createElement("div");
con_lista_nueva.id="lista_musica"
con_lista_nueva.className="input-field col s4"
document.getElementById('contenedor_listas').appendChild(con_lista_nueva);

var lista_musica = document.createElement("select");
lista_musica.id="sel_musica";
lista_musica.className="icons";

var disp_op = document.createElement("option");
disp_op.value="";
disp_op.disabled="true";
disp_op.selected="true";
disp_op.innerHTML="Selecciona tu instrumento preferido";

var op_trompeta = document.createElement("option");
op_trompeta.value="trompeta";
op_trompeta.dataset.icon="img/trompeta.png";
op_trompeta.nameClass="left circle";
op_trompeta.innerHTML="Trompeta";

var op_clarinete = document.createElement("option");
op_clarinete.value="clarinete";
op_clarinete.dataset.icon="img/clarinete.png";
op_clarinete.nameClass="left circle";
op_clarinete.innerHTML="Clarinete";

var op_piano = document.createElement("option");
op_piano.value="piano";
op_piano.dataset.icon="img/piano.png";
op_piano.nameClass="left circle";
op_piano.innerHTML="Piano";

var op_violin = document.createElement("option");
op_violin.value="violin";
op_violin.dataset.icon="img/violin.png";
op_violin.nameClass="left circle";
op_violin.innerHTML="Violin";

lista_musica.appendChild(disp_op);
lista_musica.appendChild(op_trompeta);
lista_musica.appendChild(op_clarinete);
lista_musica.appendChild(op_piano);
lista_musica.appendChild(op_violin);

con_lista_nueva.appendChild(lista_musica);
