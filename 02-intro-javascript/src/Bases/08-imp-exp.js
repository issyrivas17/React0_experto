/* import{heroes} from './Bases/data/heroes' */
/* import {heroes} from './Bases/data/heroes'  */

import { heroes,owners } from "./Bases/data/heroes"; 

const getHeroebyId = (id) => heroes.find ((heroe)=> heroe.id === id );

console.log(getHeroebyId(2));  
console.log (owners); 
//find?,filter 
const getHeroesByOwner = (owner) => heroes.filter((heroe)=> heroe.owner === owner );

console.log(getHeroesByOwner('Marvel')) 

