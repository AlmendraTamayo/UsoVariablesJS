
 let dias;
do{
   dias = +prompt("Favor ingresar una cantidad de días (número positivo y entero)");
} while (dias<0);


const año=365;
const sem=7;


    var cantidadaños = Math.floor(dias/año);

    var cantidadsemanas = Math.floor((dias%año)/sem);

    var cantidaddias = Math.floor((dias%año)%sem);


document.write(`La cantidad de dias corresponden a ${cantidadaños} año(s), ${cantidadsemanas} semana(s) y ${cantidaddias} día(s).`) 
