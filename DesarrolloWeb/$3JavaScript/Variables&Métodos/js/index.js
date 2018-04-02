var paciente={
  nombre:"Adham Garcia",
  ciudad:"Metepec",
  entidadSalud:"Salud para Ti",
  peso:"85",
  estatura:"1.75",
  fechaNacimiento: new Date ("November 11,1993"),

  ultimaConsulta:{
  fecha: new Date ("July 10,2017"),
  anotaciones: ["El paciente no presenta signos de dolor en las cicatrices de la cirugía",
                  "Presión arterial media normal",
                  "Se mencionan repetidos dolores en la zona abdominal"]
  },

  historiaClinica:[
    ["Fractura de fémur", "3/11/2015"],
    ["Apendicitis" , "22/8/2015"],
    ["Insuficiencia Renal", "1/3/2013"],
  ],

  calcularIMC: function(){
    var imc = this.peso / Math.pow(this.estatura,2);
    return imc.toFixed(2);
  },
  calcularEdad: function(){
    var hoy = new Date();
    var edad = hoy.getFullYear()-this.fechaNacimiento.getFullYear();
    return edad;
  },
  imprimirDatos: function(){
    console.log("Nombre: "+this.nombre);
    console.log("Ciudad: "+this.ciudad);
    console.log("Entidad de Salud: "+this.entidadSalud);
    console.log("Peso: "+this.peso);
    console.log("Estatura: "+this.estatura);
    console.log("Fecha de Nacimiento: "+this.fechaNacimiento.toString());
    console.log("Fecha Última consulta: "+this.ultimaConsulta.fecha.toString());
    console.log("Anotaciones ultima consulta: "+this.ultimaConsulta.anotaciones[0]+", "+this.ultimaConsulta.anotaciones[1]+", "+this.ultimaConsulta.anotaciones[2]);
    console.log("Historia Clinica: "+this.historiaClinica[0][0]+" - "+this.historiaClinica[0][1]+"   "+this.historiaClinica[1][0]+" - "+this.historiaClinica[1][1]+"   "+this.historiaClinica[2][0]+" - "+this.historiaClinica[2][1]+"");
    console.log("Calculos: ");
    console.log("- Edad: "+this.calcularEdad());
    console.log("- Indice de masa Corporal: "+this.calcularIMC());
  }
  }

document.getElementById('boton-perfil').addEventListener("click", function(){
  paciente.imprimirDatos();
})
