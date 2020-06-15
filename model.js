let mongoose = require('mongoose');
let bcrypt = require('bcryptjs');

mongoose.Promise = global.Promise;


let finanzasSchema = mongoose.Schema({
	name: { type : String },
	ServiciosPresupuesto: { type : Number },
	ServiciosGastado: {type : Number},
	ServiciosPlanificado: {type : Number},
	ConsultoríaPresupuesto: {type : Number},
	ConsultoríaGastado: {type : Number},
	ConsultoríaPlanificado: {type : Number},
	ServiciosPúblicosPresupuesto: { type : Number },
	ServiciosPúblicosGastado: {type : Number},
	ServiciosPúblicosPlanificado: {type : Number},
	ServiciosExternosPresupuesto: {type : Number},
	ServiciosExternosGastado: {type : Number},
	ServiciosExternosPlanificado: {type : Number},
	GastosDeViajesPresupuesto: { type : Number },
	GastosDeViajesGastado: {type : Number},
	GastosDeViajesPlanificado: {type : Number},
	OtrosGastosPresupuesto: {type : Number},
	OtrosGastosGastado: {type : Number},
	OtrosGastosPlanificado: {type : Number},
	GastosOperativosPresupuesto: { type : Number },
	GastosOperativosGastado: {type : Number},
	GastosOperativosPlanificado: {type : Number},
	SueldosYSalariosPresupuesto: {type : Number},
	SueldosYSalariosGastado: {type : Number},
	SueldosYSalariosPlanificado: {type : Number},
	TotalPresupuestoOpex: { type : Number },
	TotalGastadoOpex: {type : Number},
	TotalPlanificadoOpex: {type : Number},
	PresupuestoAñoanterior: {type : Number},
	GastadoAñoAnterior: {type : Number},
	ConsultoríaPresupuestoProyecto: {type : Number},
	ConsultoríaGastadoProyecto: {type : Number},
	GastosOperativosPlanificado: {type : Number},
	ConsultoríaPlanificadoProyecto: {type : Number},
	SueldosYSalariosPresupuestoProyecto: {type : Number},
	SueldosYSalariosGastadoProyecto: {type : Number},
	OtrosGastosDeProyectoPresupuestoProyecto: { type : Number },
	OtrosGastosDeproyectoGastadoProyecto: {type : Number},
	OtrosGastosDeProyectoPlanificadoProyecto: {type : Number},
	ComprometidoALaFecha: {type : Number},
	TotalPresupuestoProyecto: {type : Number},
	TotalGastadoProyecto: {type : Number},
	TotalPlanificadoProyecto: {type : Number}
});

// let userSchema = mongoose.Schema({
// 	username : { type : String, 
// 				 required : true, 
// 				 unique : true },
// 	password : { type : String,
// 				 required : true }
// })

let Vicepresidencia = mongoose.model( 'finanzas', finanzasSchema );
// let User = mongoose.model( 'User', userSchema );

// let UserList = {
// 	register : function( user ){
// 		return User.find( {username : user.username} )
// 			.then( checkUser => {
// 				if ( checkUser.length == 0 ){
// 					return bcrypt.hash(user.password, 10)
// 				}
// 			})
// 			.then( hashPassword =>{
// 				return User.create({
// 					username : user.username, 
// 					password : hashPassword
// 				})
// 				.then( newUser => {
// 					return newUser;
// 				})
// 				.catch( error => {
// 					throw Error( error );
// 				});
// 			})
// 			.catch( error => {
// 				throw Error( error );
// 			});
// 	},
// 	login : function( user ){
// 		return User.findOne( {username : user.username} )
// 			.then( checkUser => {
// 				if ( checkUser ){
// 					return bcrypt.compare(user.password, checkUser.password)
// 				}
// 			})
// 			.then( validUser => {
// 				if( validUser ){
// 					return "Valid User";
// 				}
// 				else{
// 					throw Error("Invalid User");
// 				}
// 			})
// 			.catch( error => {
// 				throw Error( error );
// 			});
// 	}
// }


let VPList = {
	get : function(){
		return Vicepresidencia.find()
				.then( datosVP => {
					return datosVP;
				})
				.catch( error => {
					throw Error( error );
				});
	}
	
};

module.exports = { VPList };


