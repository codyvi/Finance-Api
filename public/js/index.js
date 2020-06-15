
function init(){
	let url = '/api/finanzas';
	let settings = {
		method: 'GET'
	}



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