
	CallApiIp();

	function CallApiIp(){

		rRegion = "";
		rIp = "";
		var requestOptions = {
		  method: 'GET',
		  redirect: 'follow'
		};

		fetch("https://ipapi.co/json", requestOptions)
		  .then(response => response.json())
		  .then(result => {
		  	rRegion = result.city + " " + result.region + ", " + result.country_name + ".";
		  	rIp = result.ip;
		  	document.querySelector("#idRegion").innerHTML = rRegion;
		  	document.querySelector("#idIp").innerHTML = rIp;
		  })
		  .catch(error => console.log('error', error));
	}


	function CallApiRest()
	{
		FilasRespuesta = "";

		var requestOptions2 = {
		  method: 'GET',
		  redirect: 'follow'
		};

		//Uso  del servicio propio otorgado por el ejercicio 2
		fetch("http://10.200.3.35/evaluacion_desarrollador_servicio_4_0/", requestOptions2)
		  .then(response => response.json())
		  .then(result => {

		  	// Implementación de un for para recorrer el array de objetos dentro del objeto listaobjetos
		  	for (let i = 0; i < 6; i++) {
		  		FilasRespuestaTipo = result.listaobjetos[i]["tipo"];
		  		FilasRespuestaColor = result.listaobjetos[i]["color"];
		  		FilasRespuestaTamanio = result.listaobjetos[i]["tamanio"];

		  		// Pasamos las variables directo aprovechando el uso backtiks
			  	FilasRespuesta 	+= 	"<tr>" +
			        				`<td class = "filas">${FilasRespuestaTipo}</td>` +
			            			`<td class = "filas">${FilasRespuestaColor}</td>` +
			            			`<td class = "filas">${FilasRespuestaTamanio}</td>` +
			            		"</tr>";
		  	}
	 	   document.querySelector("#filaRespuesta").innerHTML = FilasRespuesta;
		  })
		  .catch(error => console.log('error', error));

		

	}