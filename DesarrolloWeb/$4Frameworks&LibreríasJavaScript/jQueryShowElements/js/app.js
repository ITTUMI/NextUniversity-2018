
$(function(){
$("#vaca").show();
$("#cerdo").show(10000);
$("#gallina").show(20000,'linear', function(){$("#mensaje").text("Gallina")});
});
