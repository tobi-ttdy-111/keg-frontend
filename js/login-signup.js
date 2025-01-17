
// imports
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { scrollRevealCardInfo } from '../js/ScrollReveal.js';


// firebaseConfig
const firebaseConfig = {
    apiKey: "AIzaSyC3bWlY7j3eqdcrHrhv3O4lfa8UEv0LD0E",
    authDomain: "keg-db.firebaseapp.com",
    projectId: "keg-db",
    storageBucket: "keg-db.appspot.com",
    messagingSenderId: "732048211908",
    appId: "1:732048211908:web:eb2d10d15f31bd8b75ee91"
};


// initialize firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


// DOM variables
const formContainer = document.querySelector('.form-container');


// loginListeners
const loginListeners = () => {

    const phoneNumberHtml = document.getElementById('phoneNumber');
    let counter = 0;
    ScrollReveal().reveal(document.querySelector('.image-container'), scrollRevealCardInfo(counter)); counter += 1;
    ScrollReveal().reveal(document.querySelector('.input-container'), scrollRevealCardInfo(counter)); counter += 1;
    ScrollReveal().reveal(document.querySelector('.login-button'), scrollRevealCardInfo(counter)); counter += 1;
    ScrollReveal().reveal(document.querySelector('.terms-text'), scrollRevealCardInfo(counter)); counter += 1;

    // recaptchaVerifier
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'login', {
        'size': 'invisible',
        'callback': (response) => {
            onSignInSubmit();
        }
    });

    // Enviar código de verificación
    document.getElementById('login').addEventListener('click', async () => {

        try {
            const phoneNumber = `+1${phoneNumberHtml.value}`;
            const appVerifier = window.recaptchaVerifier;
            const termsText = document.querySelector( '.terms-text' );
            termsText.innerHTML = 'Enviando código de verificación...'
            const confirmationResult = await signInWithPhoneNumber( auth, phoneNumber, appVerifier );
            window.confirmationResult = confirmationResult;
            otpFractal();
        } catch (err) {
            alert('No se pudo enviar el codigo en este momento')
        }

    });

}; loginListeners();


// otpFractal
const otpFractal = () => {

    formContainer.innerHTML = `
        <div class="form-content">
            <div class="image-container">
                <img src="https://via.placeholder.com/40" alt="User Avatar" class="user-avatar">
            </div>
            <div class="form-render-container">
                <div class="form-content">
                    <i class='bx bx-arrow-back'></i>
                    <div class="form-otp-title">
                        <h2 class="otp-title">Enter OTP</h2>
                        <p>An 6 digit code has been sent to your Phone Number</p>
                    </div>
                    <div class="otp-inputs">
                        <input type="text" maxlength="1" class="otp-input">
                        <input type="text" maxlength="1" class="otp-input">
                        <input type="text" maxlength="1" class="otp-input">
                        <input type="text" maxlength="1" class="otp-input">
                        <input type="text" maxlength="1" class="otp-input">
                        <input type="text" maxlength="1" class="otp-input">
                    </div>
                </div>
                <button class="login-button verify-btn">Verify</button>
            </div>
        </div>
    `

    otpListeners();

};


// loginFractal
const loginFractal = () => {

    formContainer.innerHTML = `
        <div class="form-content">
            <div class="image-container">
                <img src="https://via.placeholder.com/40" alt="User Avatar" class="user-avatar">
            </div>
            <div class="form-render-container">
                <div class="input-container">
                    <svg class="phone-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    <input type="tel" class="phone-input" placeholder="Phone Number" id="phoneNumber">
                </div>
                <button class="login-button" id="login">Login / Sign Up</button>
                <p class="terms-text">
                    By typing Login / Sign UP, you agree to our Terms.
                    Learn how we process your data in our Privacy and Policy Cookie Policy.
                </p>
            </div>
        </div>
    `

    loginListeners();

};


// otpListeners
const otpListeners = () => {

    let counter = 0;
    ScrollReveal().reveal(document.querySelector('.image-container'), scrollRevealCardInfo(counter)); counter += 1;
    ScrollReveal().reveal(document.querySelector('.bx-arrow-back'), scrollRevealCardInfo(counter)); counter += 1;
    ScrollReveal().reveal(document.querySelector('.form-otp-title'), scrollRevealCardInfo(counter)); counter += 1;
    ScrollReveal().reveal(document.querySelector('.otp-inputs'), scrollRevealCardInfo(counter)); counter += 1;
    ScrollReveal().reveal(document.querySelector('.login-button'), scrollRevealCardInfo(counter)); counter += 1;

    const otpInputs = document.querySelectorAll('.otp-input');
    otpInputs.forEach((input, index) => {
        input.addEventListener('input', (e) => {
            if (e.target.value) {
                if (index < otpInputs.length - 1) {
                    otpInputs[index + 1].focus();
                }
            }
        });
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace') {
                if (e.target.value === '') {
                    // Move to previous input if available
                    if (index > 0) {
                        otpInputs[index - 1].focus();
                        otpInputs[index - 1].value = '';
                    }
                } else {
                    e.target.value = '';
                }
            }
        });
        input.addEventListener('keypress', (e) => {
            if (isNaN(e.key)) {
                e.preventDefault();
            }
        });
    });

    document.querySelector('.bx-arrow-back').addEventListener('click', () => loginFractal());

    // verificar codigo
    document.querySelector( '.verify-btn' ).addEventListener( 'click', async () => {
        const otpValue = Array.from( otpInputs )
            .map( input => input.value )
            .join( '' );
        console.log( otpValue );
        try {
            const result = await window.confirmationResult.confirm( otpValue );
            console.log( result.user );
        } catch ( err ) {
            console.error( 'Error al verificar el código:', err );
        };
    });


};