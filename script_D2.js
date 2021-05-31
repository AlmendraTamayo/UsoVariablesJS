var num1 = prompt("Favor ingresar el primer número mayor a 0");
var num2 = prompt("Favor ingresar el segundo número diferente al primero y mayor a 0");

if(num1>0 && num2>0 && num1!=num2) {
var sum = parseInt(num1)+parseInt(num2);
var resta = parseInt(num1)-parseInt(num2);
var div = parseInt(num1)/parseInt(num2);
var mult = parseInt(num1)*parseInt(num2);
var mod = parseInt(num1)%parseInt(num2);

document.write(`La suma entre los números es: ${sum} <br>
                 La resta entre los números es: ${resta} <br>
                 La multiplicación entre los números es: ${mult} <br>
                 La divisón entre los números es: ${div} <br>
                 El módulo entre los números es: ${mod} `);
}else{
   alert("Favor recuerda ingresar números distintos mayores a cero"); 
}

