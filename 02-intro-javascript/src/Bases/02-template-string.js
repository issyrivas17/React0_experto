const nombre = 'Ismenia';
const apellido = 'Rivas'; 

const nombreCompleto= ` 
${nombre} 
${apellido} 
`; 

console.log(nombreCompleto) ;  


function getSaludo(){
    return 'Hola'+nombre; 
} 

console.log(`Este es un texto: ${getSaludo(nombre)} `); 