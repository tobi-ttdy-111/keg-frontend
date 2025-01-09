
// imports
import { eventsWorkDoneMenu } from '../../events/eventsWorkDoneMenu.js';



// workDoneMenu
export const workDoneMenu = ( idEngineer, reRender ) => { // FIXME: Corregir desestructuracion

    const menuCard = document.querySelector( '.menu-card' );
    menuCard.classList.add( 'openCard' );
    menuCard.innerHTML = `
        <div class="normal-container">
            <p class="border-bottom center">Do you want to finalize the current work?</p>
            <div class="menu-card-option" id="yesWorkDoneBtn">Yes</div>
        </div>
        <div class="menu-card-cancel" id="cancelMenu">Cancel</div>
    `;

    eventsWorkDoneMenu( idEngineer, reRender );

};
