$(document).ready(function(){
  $("#buttonOC").on("click", function(){
    $("#OCtabla").removeClass('d-none')
    $("#OCform, #CFDIForm").toggleClass('d-none')
    $("#filterButtonForm").toggleClass('d-none')
    $("#OCbuttons").toggleClass('d-none')
  })
  $("#filterButtonForm").on("click", function(){
    $("#OCform, #CFDIForm").toggleClass('d-none')
    $("#filterButtonForm").toggleClass('d-none')
  })
});
