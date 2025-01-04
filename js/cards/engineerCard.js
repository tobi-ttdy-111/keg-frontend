
// engineerCard 
export const engineerCard = ( user ) => { // FIXME: Desestructurar variables del ingeniero

    return `
        <div class="card-options">
            <i class='bx bx-x-circle'></i>
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
            <div class="card-favorites">Add to Favorites</div>
            <div class="card-message">New Message</div>
        </div>
    `

};


// engineerCardOptions
export const engineerCardOptions = ( container, id = 123344 ) => {

    document.querySelector( '.bx-x-circle' ).addEventListener( 'click', () => {
        container.classList.remove( 'open' );
        window.open = '';
    });

    document.querySelector( '#seeReviews' ).addEventListener( 'click', () => {
        console.log( 'Mostrar reviews del usuario ', id );
    })

    document.querySelector( '.card-favorites' ).addEventListener( 'click', () => {
        console.log( 'Añadir / Remover de favoritos al usuario ', id );
    })

    document.querySelector( '.card-message' ).addEventListener( 'click', () => {
        console.log( 'Abrir chat con el usuario ', id );
    });

};