
// imports
import { addShceduleMenu } from "../fractals/cardMenu/addShceduleMenu.js";
import { addTimeMenuBasics } from "../helpers/addTimeMenuBasics.js";
import { scrollRevealCardMenuConfig } from '../ScrollReveal.js';


// eventsAddTimeMenu
export const eventsAddTimeMenu = ( idEngineer ) => {

    // basics
    addTimeMenuBasics();

    // SCROLL REVEAL
    ScrollReveal().reveal( document.querySelector( '.menu-card-back' ), scrollRevealCardMenuConfig() );
    ScrollReveal().reveal( document.querySelector( '.menu-card-selects' ), scrollRevealCardMenuConfig() );
    ScrollReveal().reveal( document.querySelector( '.menu-button' ), scrollRevealCardMenuConfig() );

    // LIST
    eventsAddTimeMenuListeners( idEngineer );

};


// eventsAddTimeMenuListeners
const eventsAddTimeMenuListeners = ( idEngineer ) => {

    const arrowBack = document.querySelector( '.bx-arrow-back' );
    arrowBack.addEventListener( 'click', () => {
        addShceduleMenu( idEngineer, true );
    });

    const payBtn = document.querySelector( '#payBtn' );
    payBtn.addEventListener( 'click', () => {
        const data = {
            hoursAmmount: document.querySelector( '#hoursAmmount' ).value,
            paymentMethod: document.querySelector( '#paymentMethod' ).value,
        }; console.log({ data }); // FIXME: Hacer bien esta madre para el fetch
        // TODO: Fetch a hacer el pago
        const menuCard = document.querySelector( '.menu-card' );
        menuCard.classList.remove( 'openCard' );
    });

};


