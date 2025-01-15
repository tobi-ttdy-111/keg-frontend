

// imports
import { eventsMenuPersonalInf } from "../../events/eventsMenuPersonalInf.js";


// menuPersonalInf
export const menuPersonalInf = ( user, campIndex ) => { // FIXME: Corregir desestructuracion

    let campHtml = '';
    switch ( campIndex ) {
        case 0:
            campHtml = `
                <p>Change image:</p>
                <input type="file" class="custom-file-input">
            `      
        break;
        case 1:
            campHtml = `
                <p>Name:</p>
                <input type="text" value="${ user.name }">
            `      
        break;
        case 2:
            campHtml = `
                <p>Address:</p>
                <input type="text" class="menu-back-address" value="${ user.address }">
            `      
        break;
        case 3:
            campHtml = `
                <p>Email:</p>
                <input type="text" value="${ user.email }">
            `      
        break;
    };

    const menuCard = document.querySelector( '.menu-card' );
    menuCard.classList.add( 'openCard' );
    menuCard.innerHTML = `
        <div class="menu-back-container menu-back-moreWidth">
            <div class="menu-card-back"><i class='bx bx-x-circle'></i></div>
            <div class="menu-card-container-basic">
                ${ campHtml }
            </div>
            <div class="menu-button" id="saveBtn">Save</div> 
        </div> 
    `;

    eventsMenuPersonalInf( user, campIndex );

};
