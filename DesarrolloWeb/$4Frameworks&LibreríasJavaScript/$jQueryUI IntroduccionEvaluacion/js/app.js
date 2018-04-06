$( function() {
    $( "#menu" ).menu();
  } );

$( function() {
    $( "#descripciones" ).accordion();
  } );

$( "#all" ).on("click", function(){
  $(".flores, .deporte, .autos, .avion, .paisaje").show("fade",1000);
})
$( "#flores" ).on("click", function(){
  $(".flores").show("fade",1000);
  $(".deporte, .autos, .avion, .paisaje").hide();
})
$( "#deportes" ).on("click", function(){
  $(".deporte").show("fade",1000);
  $(".flores, .autos, .avion, .paisaje").hide();
})
$( "#autos" ).on("click", function(){
  $(".autos").show("fade",1000);
  $(".deporte, .flores, .avion, .paisaje").hide();
})
$( "#aviones" ).on("click", function(){
  $(".avion").show("fade",1000);
  $(".deporte, .autos, .flores, .paisaje").hide();
})
$( "#paisajes" ).on("click", function(){
  $(".paisaje").show("fade",1000);
  $(".deporte, .autos, .avion, .flores").hide();
})

$(".imgBox").on("click", function(){
var imgSelect = $(this).dialog()
// $("div"+imgSelect+).dialog()
})
// function imgGroup(){
//   var imgDiv = $(".imgBox");
//   var nombres= new Array(28);
//   for (var i = 0; i < imgDiv.length; i++) {
//     nombres[i]=$(imgDiv[i]).html();
//   };
// }
