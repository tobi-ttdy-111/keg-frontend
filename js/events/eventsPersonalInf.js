
// imports
import { menuPersonalInf } from '../fractals/cardMenu/menuPersonalInf.js';
import { scrollRevealBoxConfig, 
        scrollRevealTitleConfig } from '../ScrollReveal.js';


// eventsPersonalInf
export const eventsPersonalInf = ( user ) => {

    const userData = document.querySelectorAll( '.user-profile-data-info' );
    let counter = 0;
    ScrollReveal().reveal( '.user-card-img-change', scrollRevealBoxConfig( counter, document.querySelector( '.user-card' ) ) );
    counter += 1;
    userData.forEach( userDataInf => {
        ScrollReveal().reveal( userDataInf , scrollRevealBoxConfig( counter, document.querySelector( '.user-card' ) ) );
        counter += 1;
    });
    ScrollReveal().reveal( 'h1', scrollRevealTitleConfig() );
    personalInfListeners( user )

};


// personalInfListeners
const personalInfListeners = ( user ) => {

    const editableCamp = document.querySelectorAll( '.editableCamp' );
    editableCamp.forEach(( camp, i ) => {
        camp.addEventListener('click', () => {
            menuPersonalInf( user, i );
        });
    });

};