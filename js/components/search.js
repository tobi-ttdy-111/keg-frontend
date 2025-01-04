
// imports
import { engineerCard, engineerCardOptions } from '../cards/engineerCard.js';
import { readJson,
        getBrands,
        getModalitys, 
        getSystemModel } from '../fetch/search.js';
import { contentArea } from '../render.js';
import { scrollRevealBoxConfig,
        scrollRevealCardInfo,
        scrollRevealCardMainConfig,
        scrollRevealTitleConfig } from '../ScrollReveal.js';
const data = await readJson();


// card variables
window.open = '';
window.cardContent = '';
window.lastEngineer = '';


// searchComponent
export const searchComponent = async() => {

    let brandsList = '';
    getBrands( data ).forEach( brand => {
        brandsList += `
            <div class="search-box">
                <p>${ brand }</p>
                <i class='bx bx-chevron-right submenu-arrow'></i>
            </div>
        `
    });;

    contentArea.innerHTML = `
        <h1>Select Brand</h1>
        <div class="main-container">
            <div class="content">
                <div class="items-container">
                    ${ brandsList }
                </div>
            </div>
            <div class="content card user-card ${ window.open }">
                ${ window.cardContent }
            </div>
        </div>
    `;

    if ( window.open == 'open' ) { engineerCardOptions( document.querySelector( '.user-card' )) };
    let counter = 0;
    const searchBoxs = document.querySelectorAll( '.search-box' );
    searchBoxs.forEach( box => {
        ScrollReveal().reveal( box , scrollRevealBoxConfig( counter, document.querySelector( '.items-container' ) ) );
        counter += 1;
        box.addEventListener( 'click', () => renderModalitys( box.querySelector( 'p' ).textContent ));
    });
    ScrollReveal().reveal('h1', scrollRevealTitleConfig() );

}; window.searchComponent = searchComponent;


// renderModalitys
const renderModalitys = ( brand ) => {

    let modalitysList = '';
    getModalitys( data, brand ).forEach( brand => {
        modalitysList += `
            <div class="search-box">
                <p>${ brand }</p>
                <i class='bx bx-chevron-right submenu-arrow'></i>
            </div>
        `
    });

    contentArea.innerHTML = `
        <h1>Select Modality</h1>
        <div class="main-container">
            <div class="content">
                <p class="mini-links">
                    <span onclick="searchComponent()">< Back</span>
                </p>
                <div class="items-container">
                    ${ modalitysList }
                </div>
            </div>
            <div class="content card user-card ${ window.open }">
                ${ window.cardContent }
            </div>
        </div>
    `;

    if ( window.open == 'open' ) { engineerCardOptions( document.querySelector( '.user-card' )) };
    let counter = 0;
    const searchBoxs = document.querySelectorAll( '.search-box' );
    searchBoxs.forEach( box => {
        ScrollReveal().reveal( box , scrollRevealBoxConfig( counter, document.querySelector( '.items-container' ) ) );
        counter += 1;
        box.addEventListener( 'click', () => renderSystemModels( brand, box.querySelector( 'p' ).textContent ));
    });
    ScrollReveal().reveal('h1', scrollRevealTitleConfig() );

}; window.renderModalitys = renderModalitys;


// renderSystemModels
const renderSystemModels = ( brand, modality ) => {

    let systemModelsList = '';
    getSystemModel( data, brand, modality ).forEach( modality => {
        systemModelsList += `
            <div class="search-box">
                <p>${ modality }</p>
                <i class='bx bx-chevron-right submenu-arrow'></i>
            </div>
        `
    });

    contentArea.innerHTML = `
        <h1>Select System Model</h1>
        <div class="main-container">
            <div class="content">
                <p class="mini-links">
                    <span onclick="renderModalitys('${brand}')">< Back</span>
                </p>
                <div class="items-container">
                    ${ systemModelsList }
                </div>
            </div>
            <div class="content card user-card ${ window.open }">
                ${ window.cardContent }
            </div>
        </div>
    `;

    if ( window.open == 'open' ) { engineerCardOptions( document.querySelector( '.user-card' )) };
    let counter = 0;
    const searchBoxs = document.querySelectorAll( '.search-box' );
    searchBoxs.forEach( box => {
        ScrollReveal().reveal( box , scrollRevealBoxConfig( counter, document.querySelector( '.items-container' ) ) );
        counter += 1;
        box.addEventListener( 'click', () => renderEngineers( brand, modality, box.querySelector( 'p' ).textContent ));
    });
    ScrollReveal().reveal('h1', scrollRevealTitleConfig() );

}; window.renderSystemModels = renderSystemModels;


// renderEngineers
const renderEngineers = ( brand, modality, systemModel ) => {

    let engineersHTML = '';
    console.log({ brand, modality, systemModel }); // TODO: get /engineers?data
    
    engineersHTML += `
        <div class="user-box" id="12j23j432p34904b">
            <div class="user-box-main">
                <img src="https://via.placeholder.com/40" alt="User Avatar" class="user-avatar">
                <p>User name 1</p>
            </div>
            <div class="user-box-data">
                <p>Rate: 100/Hr</p>
                <p>Time zone: Central time</p>
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
                <p>User name 2</p>
            </div>
            <div class="user-box-data">
                <p>Rate: 120/Hr</p>
                <p>Time zone: Central time</p>
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
        <h1>Engineers result</h1>
        <div class="main-container">
            <div class="content">
                <p class="mini-links">
                    <span onclick="renderSystemModels('${ brand }', '${ modality }' )">< Back</span>
                </p>
                <div class="items-container">
                    ${ engineersHTML }
                </div>
            </div>
            <div class="content card user-card ${ window.open }">
                ${ window.cardContent }
            </div>
        </div>
    `;

    if ( window.open == 'open' ) { engineerCardOptions( document.querySelector( '.user-card' )) };
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

};


// renderProfile
const renderProfile = ( id ) => { // FIXME: Desestructurar datos del ingeniero

    window.cardContent = engineerCard( id ); // FIXME: Mandar datos del ingeniero
    const container = document.querySelector( '.user-card' );
    container.classList.add( 'open' );
    window.open = 'open';
    container.innerHTML = window.cardContent;
    engineerCardOptions( container );

    let counter = 0;
    ScrollReveal().reveal( document.querySelector( '.card-user-main' ), scrollRevealCardMainConfig() );
    ScrollReveal().reveal( document.querySelector( '.card-options' ), scrollRevealCardInfo( counter ) ); counter += 1;
    ScrollReveal().reveal( document.querySelector( '.card-organize' ), scrollRevealCardInfo( counter) ); counter += 1;
    ScrollReveal().reveal( document.querySelector( '.card-info-second' ), scrollRevealCardInfo( counter ) ); counter += 1;
    ScrollReveal().reveal( document.querySelector( '.card-buttoms' ), scrollRevealCardInfo( counter) ); counter += 1;

};
