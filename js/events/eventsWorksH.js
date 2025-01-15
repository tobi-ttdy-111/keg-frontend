
// imports
import { workHistCard } from '../cards/workHistCard.js';
import { scrollRevealBoxConfig, 
        scrollRevealTitleConfig } from '../ScrollReveal.js';


// eventsWorksH
export const eventsWorksH = () => {

    const worksListHtml = document.querySelectorAll( '.user-box' );
    let counter = 0;
    worksListHtml.forEach( work => {
        ScrollReveal().reveal( work , scrollRevealBoxConfig( counter, document.querySelector( '.items-container' ) ) );
        counter += 1;
        work.addEventListener( 'click', () => workHistCard( work.id ));
    });
    ScrollReveal().reveal( 'h1', scrollRevealTitleConfig() );

};
