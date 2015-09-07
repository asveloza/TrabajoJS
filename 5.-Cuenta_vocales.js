var texto = prompt("Ingrese texto");
var cuenta = 0;
for (var i = 0; i < texto.length; i++) {
	if ((texto[i] == 'a') || (texto[i] == 'e') || (texto[i] == 'i') || (texto[i] == 'o') || (texto[i] == 'u')) 
		{cuenta++;}; 
};
confirm("El texto '"+texto+"' tiene "+cuenta+" vocales");