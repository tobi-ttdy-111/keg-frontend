
// imports
import { scrollRevealBoxConfig,
        scrollRevealCardInfo,
        scrollRevealBackConfig,
        scrollRevealCardMainConfig,
        scrollRevealTitleConfig } from '../ScrollReveal.js';


// reviewsCard 
export const reviewsCard = ( reviews ) => { // FIXME: Desestructurar reviews del ingeniero

    let xIcon = '';
    if ( document.querySelector( '.content-area' ).offsetWidth <= 790 ) {
        xIcon = '<i class="bx bx-x-circle"></i>';
    };

    const card = document.querySelector( '.card' );
    card.classList.remove( 'user-card' );
    card.classList.add( 'review-card' );

    card.innerHTML = `
        <div class="card-options">
            <div>
                ${ xIcon }
                <i class='bx bx-arrow-back'></i>
            </div>
            <div>
                <i class='bx bxs-star'></i>
                <p>4.5</p>
            </div>
        </div>
        <div class="card-reviews">
            <div class="card-user-main">
                <img src="https://via.placeholder.com/40" alt="User Avatar" class="user-avatar">
                <p>Engineer name 1</p>
            </div>
            
            <div class="card-user-reviews">
                <h3 class="reviews-number">3 reviews</h3>
                <div class="card-reviews-container">
                    <div class="review">
                        <div class="review-top">
                            <div class="review-main-info">
                                <img src="https://via.placeholder.com/40" alt="User Avatar" class="user-avatar">
                                <div>
                                    <p>User Name 1</p>
                                    <div>
                                        <i class='bx bxs-star' ></i>
                                        <i class='bx bxs-star' ></i>
                                        <i class='bx bxs-star' ></i>
                                    </div>
                                </div>
                            </div>
                            <p>1d ago</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, maiores hic corporis temporibus ex tempore.</p>
                    </div>
                    <div class="review">
                        <div class="review-top">
                            <div class="review-main-info">
                                <img src="https://via.placeholder.com/40" alt="User Avatar" class="user-avatar">
                                <div>
                                    <p>User Name 1</p>
                                    <div>
                                        <i class='bx bxs-star' ></i>
                                        <i class='bx bxs-star' ></i>
                                        <i class='bx bxs-star' ></i>
                                    </div>
                                </div>
                            </div>
                            <p>1d ago</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, maiores hic corporis temporibus ex tempore.</p>
                    </div>
                    <div class="review">
                        <div class="review-top">
                            <div class="review-main-info">
                                <img src="https://via.placeholder.com/40" alt="User Avatar" class="user-avatar">
                                <div>
                                    <p>User Name 1</p>
                                    <div>
                                        <i class='bx bxs-star' ></i>
                                        <i class='bx bxs-star' ></i>
                                        <i class='bx bxs-star' ></i>
                                    </div>
                                </div>
                            </div>
                            <p>1d ago</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, maiores hic corporis temporibus ex tempore.</p>
                    </div>
                    <div class="review">
                        <div class="review-top">
                            <div class="review-main-info">
                                <img src="https://via.placeholder.com/40" alt="User Avatar" class="user-avatar">
                                <div>
                                    <p>User Name 1</p>
                                    <div>
                                        <i class='bx bxs-star' ></i>
                                        <i class='bx bxs-star' ></i>
                                        <i class='bx bxs-star' ></i>
                                    </div>
                                </div>
                            </div>
                            <p>1d ago</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, maiores hic corporis temporibus ex tempore.</p>
                    </div>
                    <div class="review">
                        <div class="review-top">
                            <div class="review-main-info">
                                <img src="https://via.placeholder.com/40" alt="User Avatar" class="user-avatar">
                                <div>
                                    <p>User Name 1</p>
                                    <div>
                                        <i class='bx bxs-star' ></i>
                                        <i class='bx bxs-star' ></i>
                                        <i class='bx bxs-star' ></i>
                                    </div>
                                </div>
                            </div>
                            <p>1d ago</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, maiores hic corporis temporibus ex tempore.</p>
                    </div>
                    <div class="review">
                        <div class="review-top">
                            <div class="review-main-info">
                                <img src="https://via.placeholder.com/40" alt="User Avatar" class="user-avatar">
                                <div>
                                    <p>User Name 1</p>
                                    <div>
                                        <i class='bx bxs-star' ></i>
                                        <i class='bx bxs-star' ></i>
                                        <i class='bx bxs-star' ></i>
                                    </div>
                                </div>
                            </div>
                            <p>1d ago</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, maiores hic corporis temporibus ex tempore.</p>
                    </div>
                    <div class="review">
                        <div class="review-top">
                            <div class="review-main-info">
                                <img src="https://via.placeholder.com/40" alt="User Avatar" class="user-avatar">
                                <div>
                                    <p>User Name 1</p>
                                    <div>
                                        <i class='bx bxs-star' ></i>
                                        <i class='bx bxs-star' ></i>
                                        <i class='bx bxs-star' ></i>
                                    </div>
                                </div>
                            </div>
                            <p>1d ago</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, maiores hic corporis temporibus ex tempore.</p>
                    </div>
                </div>
            </div>

        </div>
    `

    let counter = 0;
    ScrollReveal().reveal( document.querySelector( '.card-user-main' ), scrollRevealCardMainConfig() );
    ScrollReveal().reveal( document.querySelector( '.card-options' ), scrollRevealCardInfo( counter ) ); counter += 1;
    ScrollReveal().reveal( document.querySelector( '.reviews-number' ), scrollRevealCardInfo( counter ) ); counter += 1;
    document.querySelectorAll( '.review' ).forEach( review => {
        counter += 1;
        ScrollReveal().reveal( review , scrollRevealBoxConfig( counter, document.querySelector( '.card-reviews-container' ) ) );
    });

};


// reviewsCardOptions
export const reviewsCardOptions = ( id = 123344 ) => {

    const xIcon = document.querySelector( '.bx-x-circle' );
    if ( xIcon ) {
        xIcon.addEventListener( 'click', () => {
            
            const content = document.querySelector( '.content' );
            content.style.width = '100%';
            document.querySelector( '.card' ).classList.remove( 'open' );
            window.open = '';
            window.cardContent = '';
            window.lastEngineer = '';
            renderEngineers( window.brand, window.modality, window.systemModel );

        });
    }

    document.querySelector( '.bx-arrow-back' ).addEventListener( 'click', () => {
        renderProfile();
    })

};