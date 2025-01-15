
// imports
import { worksHistoryComponent } from '../components/index.js';
import { scrollRevealCardInfo,
        scrollRevealCardMainConfig } from '../ScrollReveal.js';


// eventsWorkHistFractal
export const eventsWorkHistFractal = ( card ) => {

    // basics
    card.innerHTML = window.workHistContent;
    card.classList.add( 'open' );

    // ScrollReveal
    let counter = 0;
    ScrollReveal().reveal( document.querySelector( '.work-card-main' ), scrollRevealCardMainConfig() );
    ScrollReveal().reveal( document.querySelector( '.work-card-breakdow' ), scrollRevealCardInfo( counter ) ); counter += 1;
    ScrollReveal().reveal( document.querySelector( '.work-total' ), scrollRevealCardInfo( counter ) ); counter += 1;
    ScrollReveal().reveal( document.querySelector( '.work-options' ), scrollRevealCardInfo( counter ) ); counter += 1;

    // reponsive
    const contentArea = document.querySelector( '.content-area' );
    if ( contentArea.offsetWidth <= 790 ) {
        contentArea.querySelector( 'h1' ).style.display = 'none';
        const content = contentArea.querySelector( '.content' )
        content.innerHTML = '';
        content.style.width = '0px'
    };

    // listeners
    workHistListeners( card );


};


// workHistListeners
const workHistListeners = ( card ) => {

    const xIcon = card.querySelector( '.bx-x-circle' );
    if ( xIcon ) {
        xIcon.addEventListener( 'click', () => {
            worksHistoryComponent()
        });
    };

};
