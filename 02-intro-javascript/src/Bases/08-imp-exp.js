/* import{heroes} from './Bases/data/heroes' */
/* import {heroes} from './Bases/data/heroes'  */

import {heroes} from "./data/heroes"; 

export const getHeroebyId = (id) => heroes.find ((heroe)=> heroe.id === id );

/* console.log(getHeroebyId(2));  
console.log (owners);  */

//find?,filter 
export const getHeroesByOwner = (owner) => heroes.filter((heroe)=> heroe.owner === owner );

console.log(getHeroesByOwner('Marvel')) 

