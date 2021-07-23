/* import {getHeroebyId} from "./Bases/08-imp-exp" 

const promesa = new Promise((resolve,reject)=> {
    setTimeout(() => { 
        const heroe = getHeroebyId(2); 
        console.log(heroe); 
      resolve(heroe)  
      /* reject ('No se encontro ningun heroe :(') */
  /*   }, 2000); 
}
) ; 

promesa.then((heroe)=>{
    console.log('heroe')
})  */
/* .catch(err =>console.log(err)); */
import { getHeroebyId } from "./Bases/08-imp-exp";

  

const getHeroebyIdAsync = (id) => {
   return new Promise((resolve,reject)=> {
        setTimeout(() => { 
            const p1= getHeroebyId(id); 
            console.log(getHeroebyId);
            if (p1) {
                resolve(p1) 
            } else {
                reject ('No se encontro ningun heroe :(') 
            }
        }, 2000); 
    }) ; 
    }
    getHeroebyIdAsync(2).then(console.log) 
    .catch(console.warn)