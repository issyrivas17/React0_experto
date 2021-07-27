
const apiKey= 'TUFzHoy65e15jNGkQqjebR6ZlZ07fqwT'; 

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`); 


peticion.then(resp => resp.json())
.then( ({data})=> {  
    const {url} = data.images.original; 

    const img = document.createElement('img');
    img.scr = url; 

    document.body.append(img); 
}); 



