$(function(){

//Mostrar animales y agregar texto
  $("#btn-vaca").click(function(){
    cursorNormal();
    $("#vaca").toggle(10000, function(){$("#mensaje").text("La vaca hace muuu")});
  });

  $("#btn-cerdo").click(function(){
    cursorNormal();
    $("#cerdo").toggle(10000, function(){$("#mensaje").text("El cerdo hace oink")});
  });

  $("#btn-gallina").click(function(){
    cursorNormal();
    $("#gallina").toggle(10000, function(){$("#mensaje").text("La gallina hace cloac")});
  });

  $("#btn-oveja").click(function(){
    cursorNormal();
    $("#oveja").toggle(10000, function(){$("#mensaje").text("La oveja hace beee")});
  });

//Boton Recortar
$("#bCorte").click(function(){
  $(".animal, #mensaje").hide();
  $("body").addClass("cursorCorte");
  $("body").removeClass("cursorConstruir");

});
//desaparecer arbustos boton Recortar
$(".arbusto").click(function(){
  if($("body").hasClass("cursorCorte")){
  $(this).hide();
  }
});
//Boton Herramienta
  $("#bConstruir").click(function(){
    $(".animal, #mensaje").hide();
    $("body").addClass("cursorConstruir");
    $("body").removeClass("cursorCorte");
    $(".cerca , .animalP").toggle();
    $("h1").text("Construye una Cerca");
  });
//Funcion para mover items con click
$(".cerca, .animalP").mousedown(function(){
  var self  = $(this);
  $(this).on('dragstart', function(event){
  event.preventDefault();
  });

//Funcion para asignar nuevas coordenadas
  $("body").mousemove(function(event){
    self.css("left", function(){
      var newLeft = event.pageX;
      return newLeft+"px";
      });
    self.css("top", function(){
      var newTop = event.pageY;
      return newTop+"px";
      });
  });
});

//Funcion para evento al soltar el click
$("body").mouseup(function(event){
    $(this).off("mousemove");
});

//Funcion para el boton OK
$("#bCursor").click(function(){
  cursorNormal();
  $(".animalP, #mensaje, .cerca, .animal").hide(1000, function(){
    $("#mensaje").text("Muy Bien!");
  });
});
//Funcion que regresa el cursor a normal
function cursorNormal(){
  $("body").removeClass("cursorConstruir");
  $("body").removeClass("cursorCorte");
};

})
