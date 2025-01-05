
// imports
import { engineerCard, engineerCardOptions } from '../cards/engineerCard.js';
import { readJson,
        getBrands,
        getModalitys, 
        getSystemModel } from '../fetch/search.js';
import { contentArea } from '../render.js';
import { scrollRevealBoxConfig,
        scrollRevealCardInfo,
        scrollRevealBackConfig,
        scrollRevealCardMainConfig,
        scrollRevealTitleConfig } from '../ScrollReveal.js';
const data = await readJson();


// card variables
window.open = '';
window.cardContent = '';
window.lastEngineer = '';

window.brand = '';
window.modality = '';
window.systemModel = '';


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
    ScrollReveal().reveal('.mini-links', scrollRevealBackConfig() );

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
                    <span onclick="searchComponent()" id="backSearchSpan">< Back</span>
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
    ScrollReveal().reveal('.mini-links', scrollRevealBackConfig() );



}; window.renderModalitys = renderModalitys;


// renderSystemModels
const renderSystemModels = ( brand, modality ) => {

    if ( window.open == 'open' ) {
        setTimeout( () => {
            const container = document.querySelector( '.user-card' );
            container.classList.remove( 'open' );
            window.open = '';
            window.cardContent = '';
            window.lastEngineer = '';
        }, 300 ); 
    };

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
                    <span onclick="renderModalitys('${brand}')" id="backSearchSpan">< Back</span>
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

    let counter = 0;
    const searchBoxs = document.querySelectorAll( '.search-box' );
    searchBoxs.forEach( box => {
        ScrollReveal().reveal( box , scrollRevealBoxConfig( counter, document.querySelector( '.items-container' ) ) );
        counter += 1;
        box.addEventListener( 'click', () => {
            renderEngineers( brand, modality, box.querySelector( 'p' ).textContent );
            window.brand = brand;
            window.modality = modality;
            window.systemModel = box.querySelector( 'p' ).textContent;
        });
    });
    ScrollReveal().reveal('h1', scrollRevealTitleConfig() );
    ScrollReveal().reveal('.mini-links', scrollRevealBackConfig() );

}; window.renderSystemModels = renderSystemModels;


// renderEngineers
const renderEngineers = ( brand, modality, systemModel ) => {

    let engineersHTML = '';
    console.log({ brand, modality, systemModel }); // TODO: get /engineers?data
    
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
        <h1>Engineers result</h1>
        <div class="main-container">
            <div class="content">
                <p class="mini-links">
                    <span onclick="renderSystemModels('${ brand }', '${ modality }' )" id="backSearchSpan">< Back</span>
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

    console.log( window.open );
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
    ScrollReveal().reveal( '.mini-links', scrollRevealBackConfig() );

}; window.renderEngineers = renderEngineers;


// renderProfile
const renderProfile = ( id ) => { // FIXME: Desestructurar datos del ingeniero

    window.cardContent = engineerCard( id ); // FIXME: Mandar datos del ingeniero
    const container = document.querySelector( '.user-card' );
    console.log( container );
    container.classList.add( 'open' );
    window.open = 'open';
    container.innerHTML = window.cardContent;
    engineerCardOptions( container );

    const contentArea = document.querySelector( '.content-area' );
    if ( contentArea.offsetWidth <= 790 ) {
        contentArea.querySelector( 'h1' ).style.display = 'none'
        const content = contentArea.querySelector( '.content' )
        content.innerHTML = '';
        content.style.width = '0px'
    }

    let counter = 0;
    ScrollReveal().reveal( document.querySelector( '.card-user-main' ), scrollRevealCardMainConfig() );
    ScrollReveal().reveal( document.querySelector( '.card-options' ), scrollRevealCardInfo( counter ) ); counter += 1;
    ScrollReveal().reveal( document.querySelector( '.card-organize' ), scrollRevealCardInfo( counter) ); counter += 1;
    ScrollReveal().reveal( document.querySelector( '.card-info-second' ), scrollRevealCardInfo( counter ) ); counter += 1;
    ScrollReveal().reveal( document.querySelector( '.card-buttoms' ), scrollRevealCardInfo( counter) ); counter += 1;

};
