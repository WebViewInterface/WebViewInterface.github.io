
var arrayImages = ["img", "img", "img", "img", "img"];


var arrayNombres = ["name", "mame", "name", "name", "name"];


var arrayVersiones = ["1.12.3", "img", "img", "img", "img"];


var arrayDesarrolladores = ["name", "mame", "name", "name", "name"];

var clave = "";



var numberRandom = aleatorio(1, 9);

var mmm = numberRandom*8755;
var ddd = (mmm/2)*1.5;
var mmmm = parseInt(ddd*2.5);

clave = ""+mmmm+numberRandom;

AndroidInterface.obtenerDatos();
enviar();
function enviar() {
   
}




//Generar números aleatorios
function aleatorio(inferior, superior) {
  var numPosibilidades = superior - inferior;
  var aleatorio = Math.random() * (numPosibilidades + 1);
  aleatorio = Math.floor(aleatorio);
  return inferior + aleatorio;
} 

