
// imports
import { eventsWorkHistFractal } from "../../events/eventsWorkHistFractal.js";


// workHistCardFractal
export const workHistCardFractal = ( card, { title, date, hours, pricePerHour } ) => { // FIXME: Corregir desestructuracion

    let xIcon = '';
    if ( document.querySelector( '.content-area' ).offsetWidth <= 790 ) {
        xIcon = `
            <div class="card-options small-card-options">
                <i class="bx bx-x-circle"></i>
            </div>
        `;
    };

    const workHtml = `
        ${ xIcon }
        <div class="work-card-main">
            <img src="https://via.placeholder.com/40" alt="User Avatar" class="user-avatar">
            <div class="card-main-info">
                <h3>${ title }</h3>
                <p>${ date }</p>
            </div>
        </div>
        <div class="work-card-breakdow">
            <h3>Price breakdown</h3>
            <div class="card-breakdown-prices">
                <div>
                    <p>${ hours} hours x ${ pricePerHour }</p>
                    <p>KEG fee</p>
                    <p>Tax</p>
                </div>
                <div class="prices-toRight">
                    <p>400.00</p>
                    <p>100.00</p>
                    <p>123.00</p>
                </div>
            </div>
        </div>
        <div class="work-card-options">
            <div class="work-total">
                <p>Total</p>
                <p class="prices-toRight">400.00</p>
            </div>
            <div class="work-options">
                <div class="option-item-work">
                    <img src="https://via.placeholder.com/40" alt="User Avatar" class="user-avatar">
                    <div>
                        <p>Email receipt</p>
                        <i class='bx bx-chevron-right'></i>
                    </div>
                </div>
                <div class="option-item-work">
                    <img src="https://via.placeholder.com/40" alt="User Avatar" class="user-avatar">
                    <div>
                        <p>Provide engineer feedback</p>
                        <i class='bx bx-chevron-right'></i>
                    </div>
                </div>
                <div class="option-item-work">
                    <img src="https://via.placeholder.com/40" alt="User Avatar" class="user-avatar">
                    <div>
                        <p>Contact support</p>
                        <i class='bx bx-chevron-right'></i>
                    </div>
                </div>
            </div>
        </div>
    `;

    window.workHistContent = workHtml;

    eventsWorkHistFractal( card );

};


