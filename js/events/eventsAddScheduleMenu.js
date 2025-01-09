
// imports
import { addTimeMenu } from '../fractals/cardMenu/addTimeMenu.js';
import { scheduleMenu } from '../fractals/cardMenu/scheduleMenu.js';
import { scrollRevealCardMenuConfig } from '../ScrollReveal.js';


// eventsAddScheduleMenu
export const eventsAddScheduleMenu = ( idEngineer, reRender ) => {

    if ( reRender ) {
        ScrollReveal().reveal( document.querySelector( '.normal-container' ), scrollRevealCardMenuConfig( 'left' ) );
        ScrollReveal().reveal( document.querySelector( '.menu-card-cancel' ), scrollRevealCardMenuConfig( 'left' ) );
    };

    addScheduleMenuListeners( idEngineer );

};


// addScheduleMenuListeners
const addScheduleMenuListeners = ( idEngineer ) => {

    const addTime = document.querySelector( '#addTime' );
    addTime.addEventListener( 'click', () => {
        addTimeMenu( idEngineer );
    });

    const scheduleTime = document.querySelector( '#scheduleTime' );
    scheduleTime.addEventListener( 'click', () => {
        scheduleMenu( idEngineer ); // TODO: Mostrar card de scheduked
    });

    const cancelMenu = document.querySelector( '#cancelMenu' );
    cancelMenu.addEventListener( 'click', () => {
        const menuCard = document.querySelector( '.menu-card' );
        menuCard.classList.remove( 'openCard' );
    });

};


