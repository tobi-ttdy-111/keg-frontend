
// imports
import { eventsChatFractal } from '../events/eventsChatFractal.js';


// chatFractal
export const chatFractal = ( card, { name, timeRemaining, chats }, idEngineer ) => { // FIXME: Corregir desestructuracion

    let xIcon = '';
    if ( document.querySelector( '.content-area' ).offsetWidth <= 790 ) {
        xIcon = `
            <div class="card-options small-card-options">
                <i class="bx bx-x-circle"></i>
            </div>
        `;
    };
    const timeRemainngHtml = () => ( timeRemaining ) ? `<p class="pScrollReveal">Time remainging: ${ timeRemaining } hrs</p>` : ``;
    const workDoneHtml = () => ( timeRemaining ) ? `<div class="card-chat-button negativeBtn" id="workDoneBtn">Work Done</div>` : ``;
    // TODO: Guardar la informacion del chat abierto en una variable window para su reutilziacion rapida

    let chatHtml = '';
    chats.reverse();
    chats.forEach( chat => {
        let isFrom = '';
        ( idEngineer == chat.from ) ? isFrom = 'outro' : isFrom = '';
        chatHtml += `
            <div class="chat-element ${ isFrom }">
                ${ chat.message }
            </div>
        `;
    });

    window.chatContent = `
        ${ xIcon }
        <div class="card-chat-header">
            <div class="card-chat-info">
                <img src="https://via.placeholder.com/40" alt="User Avatar" class="user-avatar">
                <h3>${ name }</h3>
            </div>
            <div class="card-chat-buttons">
                <div class="card-chat-button" id="addScheduleTimeBn">Add/Schedule Time</div>
                ${ workDoneHtml() }
            </div>
            ${ timeRemainngHtml() }
        </div>
        <div class="card-chat-container">
            ${ chatHtml }
        </div>
        <div class="card-data-entry">
            <div class="file-upload-wrapper">
                <input type="file" id="fileInput">
                <label for="fileInput">
                    <i class='bx bx-image-alt'></i>
                </label>
            </div>                           
            <div class="data-entry-chatbox">
                <textarea placeholder="Type your message..."></textarea>
            </div>
            <i class='bx bxs-send'></i>
        </div>
        <div class="menu-card"></div>
    `

    eventsChatFractal( card, idEngineer );

};


