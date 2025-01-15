
// imports
import { scrollRevealCardMenuConfig } from '../ScrollReveal.js';


// eventsMenuPersonalInf
export const eventsMenuPersonalInf = ( user, campIndex ) => {

    listenersMenuPersonalInf( user, campIndex );

};


// listenersMenuPersonalInf
const listenersMenuPersonalInf = ( user, campIndex ) => {

    document.querySelector( '.menu-card-back' ).addEventListener( 'click', () => {
        document.querySelector( '.menu-card' ).classList.remove( 'openCard' );
    });

    const saveBtn = document.getElementById( 'saveBtn' );
    saveBtn.addEventListener( 'click', () => {
        document.querySelector( '.menu-card' ).classList.remove( 'openCard' );
        console.log( chargePeticions( campIndex ), ' del usuario ', user.id )
    });

};


// chargePeticions
const chargePeticions = ( nPeticion ) => {

    switch ( nPeticion ) {
        case 0:
            return 'Edito la imagen'
        case 1:
            return 'Edito el nombre'
        case 2:
            return 'Edito el address'
        case 3:
            return 'Edito la correo'
    };

};
