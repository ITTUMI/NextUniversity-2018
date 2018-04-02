
$(function(){
$("#vaca").hide(5000, 'linear', function(){$("#mensaje").text("Vaca")});
$("#cerdo").toggle(10000, function(){$("#mensaje").text("Cerdo")});//show or hide
$("#gallina").toggle(500,'linear', function(){$("#mensaje").text("Gallina")});
});
