$(function(){

  $(".caja").draggable()

  $(".contenedor")
    .droppable({
      accept: ".izq, .der",
      drop: function(event,ui){
        $(this).addClass("ui-state-highlight")
        alert("Correcto!")
      }
    })
    .resizable({
      animate: true
    })

  $(".lista").sortable({
    placeholder: "ui-widget-overlay"
  })

})
