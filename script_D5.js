
function suma(){
    var num1 = parseInt(document.getElementById("numero1").value);
    var num2 = parseInt(document.getElementById("numero2").value);
    var num3 = parseInt(document.getElementById("numero3").value);
    var num4 = parseInt(document.getElementById("numero4").value);
    var num5 = parseInt(document.getElementById("numero5").value);
    var resultado = num1 +num2+num3+num4+num5;
    return resultado;
}

function prom(){
    var num1 = parseInt(document.getElementById("numero1").value);
    var num2 = parseInt(document.getElementById("numero2").value);
    var num3 = parseInt(document.getElementById("numero3").value);
    var num4 = parseInt(document.getElementById("numero4").value);
    var num5 = parseInt(document.getElementById("numero5").value);
    var resultado2 = (num1 +num2+num3+num4+num5)/5;
    return resultado2;
}

