//Desestructuracion
        //Asignacion desestructurante 

        const persona = {
            nombre : 'Alice',
            edad: 16, 
            clave: 'Alicia en el pais de las maravillas',
            Alias: 'gatita'
        }; 

        /*   const {nombre,edad,clave} = persona;  */

        /*  console.log(nombre);
        console.log(edad);
        console.log(clave);    
            */ 

                const UseContext = ({nombre,edad,clave,Alias='Gatita',}) => { 
            //console.log(edad,clave,nombre,Alias); 

            return {
                nombreClave: clave, 
                anios: edad,
                latlng: {
                    lat: 18.5652,
                    lng: 9.850
                }
            }
                } 

                const {nombreClave,anios,latlng:{lat,lng}} = UseContext(persona);   

                console.log(nombreClave,anios) 
                console.log(lat,lng) 
            