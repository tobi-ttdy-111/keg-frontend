
// imports
import { workInProgressComponent } from '../components/index.js';
import { addShceduleMenu } from '../fractals/cardMenu/addShceduleMenu.js';
import { workDoneMenu } from '../fractals/cardMenu/workDoneMenu.js';
import { chatBasics } from '../helpers/chatBasic.js';
import { scrollRevealCardInfo,
        scrollRevealCardMainConfig,
        scrollRevealChatConfig } from '../ScrollReveal.js';


// eventsChatFractal
export const eventsChatFractal = ( card, idEngineer ) => {


    // basics
    card.innerHTML = window.chatContent;
    card.classList.add( 'open' );
    chatBasics( card );


    // ScrollReveal
    let counter = 0;
    ScrollReveal().reveal( document.querySelector( '.card-chat-info' ), scrollRevealCardMainConfig() );
    ScrollReveal().reveal( document.querySelector( '.card-chat-buttons' ), scrollRevealCardInfo( counter ) ); counter += 1;
    ScrollReveal().reveal( document.querySelector( '.pScrollReveal' ), scrollRevealCardInfo( counter ) ); counter += 1;
    ScrollReveal().reveal( document.querySelector( '.card-data-entry' ), scrollRevealCardInfo( counter ) ); counter += 1;
    const chats = document.querySelectorAll( '.chat-element' );
    // const reverseChats = Array.from( chats ).reverse();
    chats.forEach( chat => {
        let origin = '';
        ( chat.classList.contains( 'outro' ) ) ? origin = 'left' : origin = 'right';
        counter += 1;
        ScrollReveal().reveal( chat , scrollRevealChatConfig( counter, document.querySelector( '.card-chat-container' ), origin ) );
    });


    // reponsive
    const contentArea = document.querySelector( '.content-area' );
    if ( contentArea.offsetWidth <= 790 ) {
        contentArea.querySelector( 'h1' ).style.display = 'none';
        const content = contentArea.querySelector( '.content' )
        content.innerHTML = '';
        content.style.width = '0px'
    };


    // listeners
    chatListeners( card, idEngineer );
    

};


// chatListeners
const chatListeners = ( card, idEngineer ) => {

    const xIcon = card.querySelector( '.bx-x-circle' );
    if ( xIcon ) {
        xIcon.addEventListener( 'click', () => {
            workInProgressComponent();
        });
    };

    const addScheduleTimeBn = card.querySelector( '#addScheduleTimeBn' );
    addScheduleTimeBn.addEventListener( 'click', () => {
        addShceduleMenu( idEngineer );
    })

    const workDoneBtn = card.querySelector( '#workDoneBtn' );
    if ( workDoneBtn ) {
        workDoneBtn.addEventListener( 'click', () => {
            workDoneMenu( idEngineer );
        });
    };

    const textarea = card.querySelector( '.data-entry-chatbox textarea' );
    card.querySelector( '.bxs-send' ).addEventListener( 'click', () => {
        console.log( textarea.value );
        textarea.style.height = 'auto';
        textarea.value = '';
    });
    textarea.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            console.log( textarea.value );
            e.preventDefault();
            textarea.style.height = 'auto';
            textarea.value = '';
        }
    });

};


// TODO: Helper basics ( terminar para el chat )
// TODO: Añadir eventos para envio de imagen y envio de mensage