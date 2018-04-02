$( document ).ready(function() {

  //Evento para el botón mas (+)
  $("#mas").click(function(){
    $(".carta:last-of-type").after("<img src='image/back.jpg' class='carta'/>");
 });


  //Evento para el botón menos (-)
  $("#menos").click(function(){
    $(".carta:last-of-type").remove();
  });

  //Evento al hacer click en una carta
  $(document).on("click", "img.carta", function(){
    $(this).attr("src",function(){
    var numero = Math.floor((Math.random() * 52) +1);
    var ruta   = "image/"+numero+".png";
    $("#contenido-pantalla").html("La carta es la numero : <b>"+numero+"<b> de la baraja")
    return ruta;

  });

});

  //Evento de hover
  $(document).on("mouseenter", "img.carta", function(){
    //Función al mouse estar sobre la carta
    // $("img.carta").mouseenter(function(){
    $(this).addClass("carta-seleccionada");
    $(this).css("border","5px solid yellow");
  });
  $(document).on("mouseleave", "img.carta", function(){
    $(this).removeClass("carta-seleccionada");
    $(this).css("border","");
  });
//     // //Función al mouse dejar la carta
//     // mouseleave: function(){
//     //
//     // }
//   }, "img.carta");
//
//
});
