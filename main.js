
var arrayImages = ["img", "img", "img", "img", "img", "img", "img", "img", "img", "img", "img", "img"];


var arrayNombres = ["PPSSPP - PSP Emulador", "PPSSPP Gold - PSP Emulator", "AetherSX2", "Dolphin Emulator", "Dolphin MMJR2", "DuckStation", "Nostalgia.NES (NES Emulador)", "DraStic DS Emulator", "My Boy!", "img", "img", "img"];


var arrayVersiones = ["img", "img", "img", "img", "img", "img", "img", "img", "img", "img", "img", "img"];


var arrayDesarrolladores = ["img", "img", "img", "img", "img", "img", "img", "img", "img", "img", "img", "img"];

var clave = "";



var numberRandom = aleatorio(1, 9);

var mmm = numberRandom*8755;
var ddd = (mmm/2)*1.5;
var mmmm = parseInt(ddd*2.5);

clave = ""+mmmm+numberRandom;


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

