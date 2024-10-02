//repaso clase pasada

// Simulación de múltiples callbacks y uso combinado de setTimeout y clearInterval:
// Crea una función llamada simulacionProceso que acepte un callback y un intervalo de tiempo. Usa setInterval para llamar repetidamente al callback cada 2 segundos, y después de 10 segundos usa clearInterval para detener el proceso y mostrar un mensaje final en la consola.


// function simulacionProceso(callback, intervaloTiempo) {
//     const intervalo = setInterval(()=>{
//         callback()
//     }, intervaloTiempo)
//     setTimeout(()=>{
//         clearInterval(intervalo) 
//         console.log("poroceso finalizado despues de 10 segundos")
//     },10000)
// } 


// simulacionProceso(()=>{
//     console.log("Ejecutando proceso...")
// },2000)

// Simulación de actualización de datos periódica con setInterval y finalización con clearTimeout:
// Escribe una función llamada actualizacionDatos que acepte un callback. Usa setInterval para simular la actualización de datos cada 3 segundos. Usa setTimeout para detener el proceso después de 15 segundos y muestra un mensaje en la consola cuando se detenga.


// function actualizacionDatos (callback){
//     const intervalo = setInterval(()=>{
//         callback();
//     },3000)
//     setTimeout(()=>{
//         clearInterval(intervalo);
//         console.log("Actualizacion de datos")
//     },15000)
// }

// actualizacionDatos(()=>{
//     console.log("Datos Actualizados")
// })


//Clase 10 sesion 7

//Promesas
// Una promesa es un objeto que representa la eventual finalización o fallo de una operación asíncrona. Las promesas tienen tres estados:

// Pendiente: la operación no ha finalizado.
// Cumplida: la operación fue exitosa.
// Rechazada: la operación falló.
// ¿Para qué sirven? Las promesas simplifican la gestión de operaciones asíncronas en JavaScript. Son útiles  para operaciones como el acceso a bases de datos, la lectura de archivos o la realización de peticiones HTTP.


// //Sintaxis
// let promesa = new Promise(function(resolve, reject){
//     //operacion asíncrona..
//     let exito = true
//     if(exito){
//         resolve(valor)
//     } else {
//         reject(error)
//     }
// })

// Ejemplo:
// function obterDatos(){
//     return new Promise(function(resolve, reject){
//             setTimeout(()=>{
//                 let exito = true
//                 if(exito){
//                     resolve("Datos recibidos")
//                 } else {
//                     reject("error al obtener los datos ")
//                 }

//             },3000)

//         })
// }


// obterDatos().then(datos =>console.log(datos)).catch(error => console.log(error))

//---------------------------------------
// Crea una promesa que se resuelva después de 3 segundos y devuelva el mensaje "Promesa cumplida".


// const promesa = new Promise((resolve) => {
//     setTimeout(()=>{
//         resolve("Promesa cumplida")
//     },3000)
// })

// promesa.then(mensaje =>console.log(mensaje))

//------------------------------------------------------
//Consigna: Implementa una función que simule un proceso de validación. La promesa debe resolver si la validación es exitosa o rechazar si falla.

function validacionUsuario(usuario) { 
    return new Promise((resolve, reject) => {
        if(usuario === "Admin"){
            resolve("Usuario Valido")
        } else{
            reject(`${usuario} no es valido`)
        }
    })
}

validacionUsuario("usuario normal")
.then(datos =>console.log(datos))
.catch(error => console.log(error))

//----------------------------------------------

//Trabajo individual 
// tiempo 15 minutos (hasta el recreo)


// Consigna: Simula una operación de lectura de datos que falla el 50% del tiempo. Utiliza promesas para manejar ambos casos.   //Math.random() > 0.5

// Consigna: Crea una función que devuelva una promesa que se resuelve con el resultado de una suma de dos números, después de 2 segundos.

