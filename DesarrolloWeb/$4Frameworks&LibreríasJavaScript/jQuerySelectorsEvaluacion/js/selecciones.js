$( document ).ready(function() {
  $("body").click(function(){
    //Realiza las selecciones en este bloque de código
    $("div h1").css("color","yellow");
    $("div span i").css("color","yellow");
    $("#fh5co-main-nav").find(":contains('Home')").css("color","yellow");
    $("img[src$='_2.jpg']+a").find(":contains('15 images')").css("color","yellow");
    $("h2:contains('Jean Smith')~p").css("color","yellow");
    $(".btn-lg").css("color","yellow");
    $("cite").css("color","yellow");
    $(".fh5co-footer-widget p:last-of-type").css("color","yellow");
  });
});
