
// imports
import { contentArea } from '../render.js';
import { scrollRevealBoxConfig,
    scrollRevealCardInfo,
    scrollRevealBackConfig,
    scrollRevealCardMainConfig,
    scrollRevealTitleConfig } from '../ScrollReveal.js';


// card variables
window.open = '';
window.cardContent = '';


// favoritesComponent
export const favoritesComponent = () => {

    let engineersHTML = ''; // TODO: get /engineers?data
    
    engineersHTML += `
        <div class="user-box" id="12j23j432p34904b">
            <div class="user-box-main">
                <img src="https://via.placeholder.com/40" alt="User Avatar" class="user-avatar">
                <div>
                    <h3>User name 1</h3>
                    <p>Rate: 100/Hr</p>
                    <p>Time zone: Central time</p>
                </div>
            </div>
            <div class="user-box-info">
                <div>
                    <p><i class='bx bxs-star'></i>4.5</p>
                    <p><i class='bx bxs-circle notAvailable'></i>Not available</p>
                </div>
                <i class='bx bx-chevron-right submenu-arrow'></i>
            </div>
        </div>
    `

    engineersHTML += `
        <div class="user-box" id="elEderEsPuto (aca va el id del inge)">
            <div class="user-box-main">
                <img src="https://via.placeholder.com/40" alt="User Avatar" class="user-avatar">
                <div>
                    <h3>User name 2</h3>
                    <p>Rate: 120/Hr</p>
                    <p>Time zone: Central time</p>
                </div>
            </div>
            <div class="user-box-info">
                <div>
                    <p><i class='bx bxs-star'></i>5</p>
                    <p><i class='bx bxs-circle available'></i>Available</p>
                </div>
                <i class='bx bx-chevron-right submenu-arrow'></i>
            </div>
        </div>
    `

    contentArea.innerHTML = `
        <h1>Favorites</h1>
        <div class="main-container">
            <div class="content">
                <div class="items-container">
                    ${ engineersHTML }
                </div>
            </div>
            <div class="content card user-card ${ window.open }">
                ${ window.cardContent }
            </div>
        </div>
    `;

    // if ( window.open == 'open' ) { engineerCardOptions( document.querySelector( '.user-card' )) };
    let counter = 0;
    const userBox = document.querySelectorAll( '.user-box' );
    userBox.forEach( box => {
        ScrollReveal().reveal( box , scrollRevealBoxConfig( counter, document.querySelector( '.items-container' ) ) );
        counter += 1;
        box.addEventListener( 'click', () => {
            console.log({ id: box.id }) // TODO: get /engineer/:id
            if ( box.id != window.lastEngineer ) renderProfile( box.id ), window.lastEngineer = box.id; // FIXME: enviar datos del ingeniero
        });
    });
    ScrollReveal().reveal( 'h1', scrollRevealTitleConfig() );
    ScrollReveal().reveal( '.mini-links', scrollRevealBackConfig() );

};
