var num1 = parseFloat(prompt("Digite un aleatorio:"));
var num2 = parseFloat(prompt("Digite otro aleatorio:"));
var elevado = Math.pow(num1, num2);

document.getElementById("num1").innerHTML=": "+ num1;
document.getElementById("num2").innerHTML=": "+ num2;
document.getElementById("elevado").innerHTML=": "+ elevado;



var aleatorio = Math.floor(Math.random() * 20) + 1;


var num_aleatorio;
switch (aleatorio) {
case 1:
    num_aleatorio = "uno";
    break;
case 2:
    num_aleatorio = "dos";
    break;
case 3:
    num_aleatorio = "tres";
    break;
case 4:
    num_aleatorio = "cuatro";
    break;
case 5:
    num_aleatorio = "cinco";
    break;
case 6:
    num_aleatorio = "seis";
    break;
case 7:
    num_aleatorio = "siete";
    break;
case 8:
    num_aleatorio = "ocho";
    break;
case 9:
    num_aleatorio = "nueve";
    break;
case 10:
    num_aleatorio = "diez";
    break;
case 11:
    num_aleatorio = "once";
    break;
case 12:
    num_aleatorio = "doce";
    break;
case 13:
    num_aleatorio = "trece";
    break;
case 14:
    num_aleatorio = "catorce";
    break;
case 15:
    num_aleatorio = "quince";
    break;
case 16:
    num_aleatorio = "dieciséis";
    break;
case 17:
    num_aleatorio = "diecisiete";
    break;
case 18:
    num_aleatorio = "dieciocho";
    break;
case 19:
    num_aleatorio = "diecinueve";
    break;
case 20:
    num_aleatorio = "veinte";
    break;
}
document.getElementById("num_aleatorio").innerHTML= num_aleatorio;