
// imports
import { workHistCardFractal } from "../fractals/card/workHistCardFractal.js";


// workHistCard 
export const workHistCard = ( id ) => { // FIXME: Desestructuracion de datos

    window.lastWorkH = id;
    const work = { // TODO: get workH/:id
        "title": "lorem N",
        "date": "Dec 30, 2024 at 12:00 AM",
        "hours": 8,
        "pricePerHour": "$124"
    }
      
    workHistCardFractal( document.querySelector( '.card' ), work );
    
};
