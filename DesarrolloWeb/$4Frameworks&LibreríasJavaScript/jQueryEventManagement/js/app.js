$( document ).ready(function() {

  alert("La página se ha cargado");

  $( window ).resize(function() {
    $( "h4" ).html( "El ancho de la página es: " + $( window ).width()+ " y el alto es  :  "+ $( window ).height());
    // $( "h4" ).html( "El ancho de la página es: " + $( window ).width() + "y el alto es:"+ $( window ).height();
  });

  $( window ).scroll(function(){
    $( "h4" ).html("La posición vertical es: "+ $(window).scrollTop());
  });



});
