//Busca todos los h2
$('formulario').select('h2')
$$('div.item-form')
//busca todos los input
$$('div.item-form')[4].select('input')
//crear var para busqueda
var s = new Selector('label')
s.findElements($$('.item-form:first')[0])
//match true false
s.match($$('.titulo-row')) //false
s.match($$('.item-form label')[0]) //TRUE
