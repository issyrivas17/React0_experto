 //Funciones en JS 

    /*     const saludar = function(nombre) {
            return `Hola,${nombre}`; 
        }  */

        const saludar2= (nombre)=> {
            return `Hola,${nombre}`;  
        } 
        // Funcion flecha
        const saludar3= (nombre)=>`Hola,${nombre}`;  
    
        const saludar4 = () => 'Hola mundo';        
            //console.log(saludar('oscar'));  
    
            console.log (saludar2('patricia')); 
            console.log (saludar3('Josefa')) 
            console.log(saludar4()); 
    
        const getUser = () => ({ id: 'ABC123',username: 'elrisas'}) 
    
        const user = getUser(); 
        console.log(user);
            
        //Tarea
    
        const getUsuarioActivo = (nombre) => ({uid: 'DEF456', username: nombre})  
    
            const usuarioActivo= getUsuarioActivo ('Xaviera');  
    
            console.log(getUsuarioActivo('xaviera')); 
            console.log(usuarioActivo)
    
    
        console.log(getUser()); 
    
    
    
    