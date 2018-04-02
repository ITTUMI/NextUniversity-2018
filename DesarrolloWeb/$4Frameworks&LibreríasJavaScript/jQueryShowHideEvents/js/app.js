$(function(){


  $("#btn-vaca").click(function(){

    $("#vaca").toggle("slow");

  });
  $("#btn-gallina").click(function(){

    $("#gallina").toggle(10000, function(){$("#mensaje").text("Gallina")});

  });




  //CODIGO PARA LA CAPTURA
  //
  // $("selectorDisparador").evento(function(){
  //
  //   $("selectorObjetivo").show();
  //
  // });
  //
  //
  // function funcionDefinida(){
  //   $("selectorObjetivo").show();
  // };
  //
  // $("selectorDisparador").evento(funcionDefinida());
  //


  // $("selectorDisparador").evento(function(){
  //
  //   $(this).show();
  //
  // });



})
