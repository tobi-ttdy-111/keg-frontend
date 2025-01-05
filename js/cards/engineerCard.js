
// imports
import { reviewsCard, reviewsCardOptions } from './reviewsCard.js';


// engineerCard 
export const engineerCard = ( user ) => { // FIXME: Desestructurar variables del ingeniero

    let xIcon = false;
    if ( document.querySelector( '.content-area' ).offsetWidth <= 790 ) {
        xIcon = '<i class="bx bx-x-circle"></i>';
    };


    window.cardContent = `
        <div class="card-options">
            ${ xIcon || '<div></div>' }
            <div>
                <i class='bx bxs-star'></i>
                <p>4.5</p>
                <span id="seeReviews">See reviews</span>
            </div>
        </div>
        <div class="card-user-info">
            <div class="card-user-main">
                <img src="https://via.placeholder.com/40" alt="User Avatar" class="user-avatar">
                <p>Engineer name 1</p>
            </div>
            <div class="card-user-data">
                <div class="card-organize">
                    <div>
                        <p>Rate:</p>
                        <p>Language:</p>
                        <p>Timezone:</p>
                        <p>Availability:</p>
                    </div>
                    <div>
                        <p>150/Hr</p>
                        <p>French, Russian</p>
                        <p>Pacific Time</p>
                        <p>Available</p>
                    </div>
                </div>
                <div class="card-info-second">
                    <h3>Experience</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quia odit, esse officia sapiente eius ipsum magnam asperiores inventore alias?</p>
                    <h3>Trainings and System with Experience</h3>
                    <p>Philips Brilliance 16</p>
                    <p>Philips Brilliance 40</p>
                    <p>Philips Brilliance 64</p>
                    <p>Brilliance 16 Mobile</p>
                </div>
            </div>
        </div>
        <div class="card-buttoms">
            <div class="card-favorites remove">Remove to Favorites</div>
            <div class="card-message">New Message</div>
        </div>
    `
    return window.cardContent;

};


// engineerCardOptions
export const engineerCardOptions = ( container, id = 123344 ) => {

    const xIcon = document.querySelector( '.bx-x-circle' );
    if ( xIcon ) {
        xIcon.addEventListener( 'click', () => {
            
            const content = document.querySelector( '.content' );
            content.style.width = '100%';
            container.classList.remove( 'open' );
            window.open = '';
            window.cardContent = '';
            window.lastEngineer = '';
            window.cardContent = '';
            renderEngineers( window.brand, window.modality, window.systemModel );

        });
    }

    document.querySelector( '#seeReviews' ).addEventListener( 'click', () => {
        const reviews = ''; // TODO: get engineer/:id/reviews
        console.log( 'reviews de ', id );
        reviewsCard( reviews );
        reviewsCardOptions();
    })

    const cardFavorites = document.querySelector( '.card-favorites' )
    cardFavorites.addEventListener( 'click', () => {
        if ( cardFavorites.classList.contains( 'remove' ) ) {
            console.log( 'Remover de favoritos al usuario ', id );
        } else {
            console.log( 'Añadir a favoritos al usuario ', id );
        }
        
    })

    document.querySelector( '.card-message' ).addEventListener( 'click', () => {
        console.log( 'Abrir chat con el usuario ', id );
    });

};