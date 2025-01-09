
// imports
import { eventsAddTimeMenu } from "../../events/eventsAddTimeMenu.js";


// addTimeMenu
export const addTimeMenu = ( idEngineer ) => { // FIXME: Corregir desestructuracion

    const menuCard = document.querySelector( '.menu-card' );
    menuCard.innerHTML = `
        <div class="menu-back-container">
            <div class="menu-card-back"><i class='bx bx-arrow-back'></i></div>
            <div class="menu-card-selects">
                <div class="menu-select">
                    <label for="hoursAmmount" class="label">Please choose the amount of hours:</label>
                    <select id="hoursAmmount" class="custom-select">
                        <option value="1" selected>1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    <i class='bx bx-down-arrow-alt flecha number'></i> <!-- Icono de flecha hacia abajo -->
                </div>
                
                <div class="menu-select">
                    <label for="paymentMethod" class="label">Select payment method:</label>
                    <select id="paymentMethod" class="custom-select">
                        <option value="Mastercard 1234234235243123q2312342" selected>Mastercard 1234234235243123q2312342</option>
                        <option value="Amex 123423421234234">Amex 123423421234234</option>
                    </select>
                    <i class='bx bx-down-arrow-alt flecha'></i> <!-- Icono de flecha hacia abajo -->
                </div>                                    
            </div>
            <div class="menu-button" id="payBtn">Pay</div> 
        </div> 
    `;

    eventsAddTimeMenu( idEngineer );

};
