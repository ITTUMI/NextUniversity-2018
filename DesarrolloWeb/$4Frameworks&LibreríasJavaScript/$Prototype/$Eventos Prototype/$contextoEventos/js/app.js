
document.observe("dom:loaded", function(){
//
//   // var cuadros = $$('.cuadro');
//   //
//   // for (var i = 0; i < cuadros.length; i++) {
//   //   cuadros[i].observe('click',function(){
//   //     this.down().setStyle({display: 'block'});
//   //   })
//   // }
//
// // //event.findElement
// //   $('tablero').observe('click', function(event){
// //     var bloqueClickeado = event.findElement();
// //     bloqueClickeado.down().setStyle({display: 'block'});
// //   })


    $('tablero').observe('click', function(event){
      this.setStyle({
        background: 'black',
        width:' 50%',
        borderRadius: '50px'

    });
      event.findElement().setStyle({
      background: 'yellow',
      borderRadius: '12px'
    });
    })

})
