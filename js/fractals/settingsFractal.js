

// imports
import { eventsSettings } from '../events/eventsSettings.js';
import { contentArea } from '../render.js';


// settingsFractal
export const settingsFractal = () => {

    contentArea.innerHTML = `
        <h1>Settings</h1>
        <div class="main-container">
            <div class="content">
                <div class="items-container">
                    <div class="search-box">
                        <p>Privacity</p>
                        <i class='bx bx-chevron-right submenu-arrow'></i>
                    </div>
                    <div class="search-box">
                        <p>Appearance</p>
                        <i class='bx bx-chevron-right submenu-arrow'></i>
                    </div>
                    <div class="search-box">
                        <p>Authenticator App</p>
                        <i class='bx bx-chevron-right submenu-arrow'></i>
                    </div>
                    <div class="search-box">
                        <p>Two Steps Verification</p>
                        <i class='bx bx-chevron-right submenu-arrow'></i>
                    </div>
                    <div class="search-box">
                        <p>Personal Verification</p>
                        <i class='bx bx-chevron-right submenu-arrow'></i>
                    </div>
                    <div class="search-box">
                        <p>Legal</p>
                        <i class='bx bx-chevron-right submenu-arrow'></i>
                    </div>
                </div>
            </div>
        </div>
    `;

    eventsSettings();

};
