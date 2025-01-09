
// imports
import { eventsAddScheduleMenu } from '../../events/eventsAddScheduleMenu.js';



// addShceduleMenu
export const addShceduleMenu = ( idEngineer, reRender ) => { // FIXME: Corregir desestructuracion

    const menuCard = document.querySelector( '.menu-card' );
    menuCard.classList.add( 'openCard' );
    menuCard.innerHTML = `
        <div class="normal-container">
            <p class="center">What do you want to do?</p>
            <div class="menu-card-option" id="addTime">Add Time</div>
            <div class="menu-card-option" id="scheduleTime">Schedule Time</div>
        </div>
        <div class="menu-card-cancel" id="cancelMenu">Cancel</div>
    `;

    eventsAddScheduleMenu( idEngineer, reRender );

};
