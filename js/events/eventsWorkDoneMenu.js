
// imports
import { reviewsMenu } from '../fractals/cardMenu/reviewsMenu.js';
import { scrollRevealCardMenuConfig } from '../ScrollReveal.js';


// eventsWorkDoneMenu
export const eventsWorkDoneMenu = ( idEngineer, reRender ) => {

    if ( reRender ) {
        ScrollReveal().reveal( document.querySelector( '.normal-container' ), scrollRevealCardMenuConfig( 'left' ) );
        ScrollReveal().reveal( document.querySelector( '.menu-card-cancel' ), scrollRevealCardMenuConfig( 'left' ) );
    };

    eventsWorkDoneMenuListeners( idEngineer );

};


// eventsWorkDoneMenuListeners
const eventsWorkDoneMenuListeners = ( idEngineer ) => {

    console.log( 'Hola peton' )
    const yesWorkDoneBtn = document.querySelector( '#yesWorkDoneBtn' );
    yesWorkDoneBtn.addEventListener( 'click', () => {
        reviewsMenu( idEngineer );
    });

    const cancelMenu = document.querySelector( '#cancelMenu' );
    cancelMenu.addEventListener( 'click', () => {
        const menuCard = document.querySelector( '.menu-card' );
        menuCard.classList.remove( 'openCard' );
    });

};


