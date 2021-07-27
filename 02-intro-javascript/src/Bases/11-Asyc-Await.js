
    const getImagen= async() => {

        try {
            const apiKey= 'TUFzHoy65e15jNGkQqjebR6ZlZ07fqwT'; 
        
            const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`); 
        
            const {data}= await resp.json(); 
        
            const {url} = data.images.original; 
        
            const img = document.createElement('img'); 
            img.scr = url;  
            
            document.body.append(img);  
            } catch (error) {
           //Manejo del error 
           console.log(error)
        }
            
               
            getImagen(); 
         }