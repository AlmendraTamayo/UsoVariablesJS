
var celsius = prompt("Favor ingresar los grados celsius que deseas convertir");
const kelvin = 273.15;
const far1 = 9/5;
const far2 = 32;

var k = parseInt(celsius)+kelvin;
var f = parseInt(celsius)*far1+far2;

document.write(`${celsius}°C corresponden a ${k}K y a ${f}°F`) 
