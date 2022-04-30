

var arrayImages = ["img", "img", "img", "img", "img"];


var arrayNombres = ["name", "mame", "name", "name", "name"];


var arrayVersiones = ["1.12.3", "img", "img", "img", "img"];


var arrayDesarrolladores = ["name", "mame", "name", "name", "name"];

var clave = "";



var numberRandom = aleatorio(1, 9);

var mmm = numberRandom*69729;



clave = ""+mmm+numberRandom;


enviar();
function enviar() {
  AndroidInterface.obtenerDatos(arrayImages, arrayNombres, arrayVersiones, arrayDesarrolladores, clave);
}




//Generar números aleatorios
function aleatorio(inferior, superior) {
  var numPosibilidades = superior - inferior;
  var aleatorio = Math.random() * (numPosibilidades + 1);
  aleatorio = Math.floor(aleatorio);
  return inferior + aleatorio;
} 






