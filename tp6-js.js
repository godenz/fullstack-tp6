/*  la función ​filtrarKeys​  deberá  retornar 
	una lista de las propiedades (es decir, una lista de keys)
	que contengan alguno de los elementos del array ​ ​filtros en su nombre
*/
function filtrarKeys(obj, arrFiltro, tipo) {
	"use strict"
	var listaProp = [];
	var excluye = false;
	if (arguments.length>2) {
		excluye = true;
	}

	arrFiltro.forEach(function(curEl, indice){
		if (excluye) {
			if (!obj.hasOwnProperty(curEl)) {
				listaProp.push(curEl);
			}
		}
		else {
			if (obj.hasOwnProperty(curEl)) {
				listaProp.push(curEl);
			}

		}
	});
	return listaProp;
}