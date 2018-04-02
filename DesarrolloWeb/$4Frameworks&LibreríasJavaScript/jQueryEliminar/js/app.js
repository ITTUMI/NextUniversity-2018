$(function(){
  $(".card").mouseover(function(){
    $(this).removeClass("blue");
    $(this).addClass("yellow");
  });
  $(".card").mouseout(function(){
    $(this).removeClass("yellow");
    $(this).addClass("blue");
  });

//Eliminar elemento sin que guarde estilos
// var tmp = $("#c2").remove();
// $("#r1col2").append(tmp);

//Eliminar elementos guardando estilos
// var tmp = $("#c2").detach();
// $("#r1col1").append(tmp);

//Eliminar todos los elementos indicados del documento
// $(".card-title").empty();

//Elimina al padre directo y sube un nivel
$("#c4 .card-content").unwrap();
})
