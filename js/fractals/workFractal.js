
// imports
import { eventsWorkFractal } from '../events/eventsWorkFractal.js';
import { contentArea } from '../render.js';


// workFractal
export const workFractal = ( users ) => {

    let engineerList = '';
    users.forEach( user => { // FIXME: Informacion del usuario / chat
        engineerList += `
            <div class="user-box" id="${ user.id }">
                <div class="user-box-main">
                    <img src="https://via.placeholder.com/40" alt="User Avatar" class="user-avatar">
                    <div>
                        <h3>${ user.name }</h3>
                        <p>${ user.message }</p>
                    </div>
                </div>
                <div class="user-chat-ago">
                    <p>${ user.ago }</p>
                </div>
            </div>
        `
    });

    contentArea.innerHTML = `
        <h1>Work in progress</h1>
        <div class="main-container">
            <div class="content">
                <div class="items-container">
                    ${ engineerList }
                </div>
            </div>
            <div class="content card user-card">
            </div>
        </div>
    `;

    eventsWorkFractal();

};
