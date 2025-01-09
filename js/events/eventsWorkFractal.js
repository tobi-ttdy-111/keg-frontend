
// imports
import { engineerChatCard } from '../cards/engineerChatCard.js';
import { scrollRevealBoxConfig, 
        scrollRevealTitleConfig } from '../ScrollReveal.js';


// eventsWorkFractal
export const eventsWorkFractal = () => {

    const userBox = document.querySelectorAll( '.user-box' );
    let counter = 0;
    userBox.forEach( engineer => {
        ScrollReveal().reveal( engineer , scrollRevealBoxConfig( counter, document.querySelector( '.items-container' ) ) );
        counter += 1;
        engineer.addEventListener( 'click', () => {

            engineerChatCard( engineer.id );
        
        });
    });
    ScrollReveal().reveal( 'h1', scrollRevealTitleConfig() );

};
