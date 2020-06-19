
function init(){
	let url = '/api/finanzas';
	let settings = {
		method: 'GET'
	}

	document.getElementById("post6").addEventListener("click", function(e) {
		var id  = document.getElementById("Name6").value;
		var dExp = document.getElementById("dExp").value;


		console.log(typeof(dExp))

		let url2 = '/api/finanzasAn1'
		let settings2 = {
			method: 'POST',
			body: JSON.stringify({
				id: id,
				exp: dExp
			}),
			headers: {
				'Content-Type': 'application/json'
			},
		}

		fetch(url2, settings2)
		.then( response => {
			if ( response.ok ){
				return response.json();
			}

			throw new Error ( response.statusText );
		})
		.then( responseJSON => {

			console.log(responseJSON);
		})
		.catch( err => {
			console.log( err );
		})
		// alert(document.getElementById("tiempoini").value);
	});




	fetch(url, settings)
		.then( response => {
			if ( response.ok ){
				return response.json();
			}

			throw new Error ( response.statusText );
		})
		.then( responseJSON => {

			for ( let i = 0; i < responseJSON.length; i ++ ){
				$('.listOfVPs').append(`<li>
				${responseJSON[i].name} - Servicios presupuesto: ${responseJSON[i].ServiciosPresupuesto} 
										- Servicios Gastados: ${responseJSON[i].ServiciosGastado}</li>`)
			}
		})
		.catch( err => {
			console.log( err );
		})
}

init();