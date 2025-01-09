
// imports
import { eventsReviews } from "../../events/eventsReviews.js";


// reviewsMenu
export const reviewsMenu = ( idEngineer ) => { // FIXME: Corregir desestructuracion

    const menuCard = document.querySelector( '.menu-card' );
    menuCard.innerHTML = `
        <div class="normal-container noCursor review-container-menu">
            <p class="border-bottom center">Please rate your experience</p>
            <div class="menu-card-review">
                <div class="review-note">
                    <h3 id="valueRange">5.0</h3>
                    <i class='bx bxs-star'></i>
                </div>
                <div class="menu-range">
                    <img src="./img/face3.svg" alt="User Avatar" id="userAvatar">
                    <input class="range50" type="range" id="rangeSlider" min="0" max="100" step="25" value="50">
                </div>
                <div class="menu-textarea">
                    <p>Comments: (optional)</p>
                    <textarea name="review-comments" id="reviewComments"></textarea>
                </div>
            </div>
        </div>
        <div class="menu-button" id="submitReviewBtn">Submit</div> 
    `;

    eventsReviews( idEngineer );

};
