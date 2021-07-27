const activo = true; 

/* let mensaje = ''; 

// el signo de exclamacion cerrando puede retornar a falso. 
if (!activo){
    mensaje = 'Activo'
}else{
    mensaje= 'inactivo'
}
 */ 
/* const mensaje = (activo) ? 'Activo' : 'Inactivo' */

/* const mensaje= (!activo) ? 'Activo': null;  */ 

const mensaje = activo && 'Activo'; 
console.log(mensaje); 