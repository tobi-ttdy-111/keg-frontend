
// imports
import { eventsPersonalInf } from '../events/eventsPersonalInf.js';
import { contentArea } from '../render.js';


// personalInfFractal
export const personalInfFractal = () => {

    const user = {
        id: 101,
        name: "John Doe",
        email: "johndoe@example.com",
        phoneNumber: "+1-123-456-7890",
        address: "123 Main Street, Springfield, IL, 62704"
    };
    
    contentArea.innerHTML = `
        <h1>Personal information</h1>
        <div class="main-container">
            <div class="content card user-card open noMarginLeft">
                <div class="user-card-img-change">
                    <img src="https://via.placeholder.com/40" alt="User Avatar" class="user-avatar user-profile-img">
                    <p id="changeImageBtn" class="editableCamp">Change image</p>
                </div>
                <div class="user-profile-data-info editableCamp" id="changeNameBtn">
                    <p>Name:</p>
                    <span>${ user.name }</span>
                    <i class='bx bx-chevron-right submenu-arrow'></i>
                </div>
                <div class="user-profile-data-info noHoverEfect" style="cursor:auto">
                    <p>Phone:</p>
                    <span>${ user.phoneNumber }</span>
                </div>
                <div class="user-profile-data-info editableCamp" id="changeAddressBtn">
                    <p>Address:</p>
                    <span>${ user.address }</span>
                    <i class='bx bx-chevron-right submenu-arrow'></i>
                </div>
                <div class="user-profile-data-info editableCamp" id="changeEmailBtn">
                    <p>Email:</p>
                    <span>${ user.email }</span>
                    <i class='bx bx-chevron-right submenu-arrow'></i>
                </div>
                <div class="menu-card"></div>
            </div>
        </div>
    `;

    eventsPersonalInf( user );

};
