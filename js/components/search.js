
// imports
import { readJson,
        getBrands,
        getModalitys, 
        getSystemModel } from '../fetch/search.js';
import { contentArea } from '../render.js';
import { scrollRevealBoxConfig,
        scrollRevealTitleConfig } from '../ScrollReveal.js';
const data = await readJson();


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
        </div>
    `;

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
        </div>
    `;

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
        </div>
    `;

    let counter = 0;
    const searchBoxs = document.querySelectorAll( '.search-box' );
    searchBoxs.forEach( box => {
        ScrollReveal().reveal( box , scrollRevealBoxConfig( counter, document.querySelector( '.items-container' ) ) );
        counter += 1;
        box.addEventListener( 'click', () => console.log( brand, modality, box.querySelector( 'p' ).textContent ));
    });
    ScrollReveal().reveal('h1', scrollRevealTitleConfig() );

};
