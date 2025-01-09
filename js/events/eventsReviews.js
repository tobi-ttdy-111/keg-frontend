
// imports
// import { addShceduleMenu } from "../fractals/cardMenu/addShceduleMenu.js";
import { reviewsMenuBasics } from "../helpers/reviewsMenuBasics.js";
import { scrollRevealCardMenuConfig } from '../ScrollReveal.js';


// eventsReviews
export const eventsReviews = ( idEngineer ) => {

    // basics
    reviewsMenuBasics();

    // SCROLL REVEAL
    ScrollReveal().reveal( document.querySelector( '.border-bottom' ), scrollRevealCardMenuConfig() );
    ScrollReveal().reveal( document.querySelector( '.menu-card-review' ), scrollRevealCardMenuConfig() );
    ScrollReveal().reveal( document.querySelector( '.menu-button' ), scrollRevealCardMenuConfig() );

    // LIST
    eventsReviewsListeners( idEngineer );

};


// eventsReviewsListeners
const eventsReviewsListeners = ( idEngineer ) => {

    const submitReviewBtn = document.querySelector( '#submitReviewBtn' );
    submitReviewBtn.addEventListener( 'click', () => {
        const data = {
            reviewComments: document.querySelector( '#reviewComments' ).value,
            rangeSlider: document.querySelector( '#rangeSlider' ).value,
        }; console.log({ data }); // FIXME: Hacer bien esta madre para el fetch
        // TODO: Fetch a hacer el pago
        const menuCard = document.querySelector( '.menu-card' );
        menuCard.classList.remove( 'openCard' );
    });

};


