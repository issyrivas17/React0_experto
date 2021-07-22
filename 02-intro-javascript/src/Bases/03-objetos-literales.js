const persona = { 
    nombre : 'Amelia',
apellido :'Rivas',
edad:15, 
    direccion: {
    Ciudad: 'Milan',
    zip: 254545,
    latitud: 45.4637,
    longitud:  9.18817
    }
    }; 

// console.table(persona); 
console.log(persona); 

// const persona2= persona; Recomendable no hacerlo porque no se va aceptar por react.
// persona2.nombre= 'Jose'; 

//  console.log(persona2) 


const persona2 = {...persona}; 
persona2.nombre= 'Amanda'; 
console.log(persona2) 