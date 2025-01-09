
// imports
import { addShceduleMenu } from "../fractals/cardMenu/addShceduleMenu.js";
import { addTimeMenuBasics } from "../helpers/addTimeMenuBasics.js";
import { scheduleTimeBasics } from "../helpers/scheduleTimeBasics.js";
import { scrollRevealCardMenuConfig } from '../ScrollReveal.js';


// eventsSchedule
export const eventsSchedule = ( idEngineer ) => {

    scheduleTimeBasics();
    addTimeMenuBasics();

    ScrollReveal().reveal( document.querySelector( '.menu-card-back' ), scrollRevealCardMenuConfig() );
    ScrollReveal().reveal( document.querySelector( '.menu-card-selects' ), scrollRevealCardMenuConfig() );
    ScrollReveal().reveal( document.querySelector( '.menu-button' ), scrollRevealCardMenuConfig() );

    eventsScheduleListeners( idEngineer );

};


// eventsScheduleListeners
const eventsScheduleListeners = ( idEngineer ) => {

    const arrowBack = document.querySelector( '.bx-arrow-back' );
    arrowBack.addEventListener( 'click', () => {
        addShceduleMenu( idEngineer, true );
    });


    // CALENDAR & HOURS & PAY METHOD
    const saveToCalendarBtn = document.querySelector( '#saveToCalendarBtn' );
    saveToCalendarBtn.addEventListener( 'click', () => {
    
        const data = {
            hoursAmmount: document.querySelector( '#hoursAmmount' ).value,
            paymentMethod: document.querySelector( '#paymentMethod' ).value,
            dateAndTime: window.getCalendarData()
        };

        if ( !data.dateAndTime ) {
            alert( 'Selecciona que día y hora agendaras una fecha imbecil' );
        } else {
            console.log({ data }); // FIXME: Hacer bien esta madre para el fetch
            const menuCard = document.querySelector( '.menu-card' );
            // TODO: Fetch a hacer el pago
            menuCard.classList.remove( 'openCard' );
        };
        
    });

};


