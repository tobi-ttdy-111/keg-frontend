
// imports
import { eventsScheduled } from '../events/eventsScheduled.js';
import { contentArea } from '../render.js';


// scheduledFractal
export const scheduledFractal = ( scheduledList ) => {

    let scheduledsHtml = '';
    scheduledList.forEach( scheduled => { // FIXME: Informacion de la cita agendada
        scheduledsHtml += `
            <div class="user-box" id="${ scheduled.id }">
                <div class="user-box-main">
                    <img src="https://via.placeholder.com/40" alt="User Avatar" class="user-avatar">
                    <div>
                        <h3>${ scheduled.nombre }</h3>
                        <p class="blackP">${ scheduled.fechaAgendada }</p>
                    </div>
                </div>
                <div class="user-chat-ago">
                    <p>${ scheduled.duracion }</p>
                </div>
            </div>
        `
    });

    contentArea.innerHTML = `
        <h1>Scheduled</h1>
        <div class="main-container">
            <div class="content">
                <div class="items-container">
                    ${ scheduledsHtml }
                </div>
            </div>
            <div class="content card user-card">
            </div>
        </div>
    `;

    eventsScheduled();

};
