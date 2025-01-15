
// imports
import { eventsWorksH } from '../events/eventsWorksH.js';
import { contentArea } from '../render.js';


// worksHistoryFractal
export const worksHistoryFractal = ( worksHistoryList ) => {

    let worksList = '';
    worksHistoryList.forEach( work => { // FIXME: Informacion de la cita agendada
        worksList += `
            <div class="user-box" id="${ work.id }">
                <div class="user-box-main">
                    <img src="https://via.placeholder.com/40" alt="User Avatar" class="user-avatar">
                    <div>
                        <h3>${ work.title }</h3>
                        <p>${ work.date }</p>
                        <p>${ work.payed }</p>
                    </div>
                </div>
                <i class='bx bx-chevron-right submenu-arrow'></i>
            </div>
        `
    });

    contentArea.innerHTML = `
        <h1>Works history</h1>  
        <div class="main-container">
            <div class="content">
                <div class="items-container">
                    ${ worksList }
                </div>
            </div>
            <div class="content card work-card"></div>
        </div>
    `;

    eventsWorksH()

};
