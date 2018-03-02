var Estructura = {
  "personas": [
    {
      "Nombre": "Mateo",
      "Edad": 24,
      "Direccion": "Jose Chavez Morado",
      "Telefono": "5547339005",
      "Estudios":[
        {
          "Escuela Primaria":{
            "Lugar": "ITESM Campus Toluca",
            "Fecha": "2009-2015",
          }
        },
        {
          "Escuela Secundaria":{
            "Lugar": "ITESM Campus Toluca",
            "Fecha": "2015-2018",
          }
        }
      ]
    },
    {
      "Nombre": "Adham",
      "Edad": 25,
      "Direccion": "Providencia Caceres",
      "Telefono": "5547339005",
      "Estudios":[
        {
          "Escuela Primaria":{
            "Lugar": "ITESM Campus Queretaro",
            "Fecha": "2009-2015",
          }
        },
          {
          "Escuela Secundaria":{
            "Lugar": "ITESM Campus Cancun",
            "Fecha": "2015-2018",
            }
          }
      ]
    }
  ]
}

var persona1 = Estructura.personas[0];
var persona2 = Estructura.personas[1];

var telefono1 = persona1.Telefono;
var telefono2 = persona2.Telefono;

var estudiosPersona1 = persona1.Estudios[1];
var estudiosPersona2 = persona2.Estudios[1];
