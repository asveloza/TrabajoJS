var base = prompt("ingrese la base del triangulo");
var altura = prompt("ingrese la altura del triangulo");
var res = (base*altura)/2;
res > 0 ? confirm("El area del triangulo es: "+res) : confirm("Ingrese numero valido");