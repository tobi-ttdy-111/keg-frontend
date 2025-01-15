
// imports
import { scrollRevealBoxConfig, 
        scrollRevealTitleConfig } from '../ScrollReveal.js';


// eventsSettings
export const eventsSettings = () => {

    const searchBoxs = document.querySelectorAll( '.search-box' );
    let counter = 0;
    searchBoxs.forEach( box => {
        ScrollReveal().reveal( box , scrollRevealBoxConfig( counter, document.querySelector( '.items-container' ) ) );
        counter += 1;
        box.addEventListener( 'click', () => renderModalitys( box.querySelector( 'p' ).textContent ));
    });
    ScrollReveal().reveal( 'h1', scrollRevealTitleConfig() );

};
