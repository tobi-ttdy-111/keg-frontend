
// imports
import { scrollRevealBoxConfig, 
        scrollRevealTitleConfig } from '../ScrollReveal.js';


// eventsScheduled
export const eventsScheduled = () => {

    const userBox = document.querySelectorAll( '.user-box' );
    let counter = 0;
    userBox.forEach( scheduled => {
        ScrollReveal().reveal( scheduled , scrollRevealBoxConfig( counter, document.querySelector( '.items-container' ) ) );
        counter += 1;
        scheduled.addEventListener( 'click', () => {

            // engineerChatCard( engineer.id ); // FIXME: Aqui renderizar la carta para editar / borrar este agendado
            console.log( 'Abrir card para el scheduled ', scheduled.id );
        
        });
    });
    ScrollReveal().reveal( 'h1', scrollRevealTitleConfig() );

};
