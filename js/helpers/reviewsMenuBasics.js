
// reviewsMenuBasics
export const reviewsMenuBasics = () => {

    const rangeSlider = document.getElementById('rangeSlider');
    const valueRange = document.querySelector( '#valueRange' );
    const userAvatar = document.getElementById('userAvatar');
    const setClassList = ( value ) => {
        rangeSlider.classList.remove( ...rangeSlider.classList );
        rangeSlider.classList.add( `range${ value }` )
    };

    const colors = ['#FF5D5D', '#BE5DFF', '#5DB6FF', '#83FF5D', '#FFD05D'];
    const updateSlider = () => {
        const value = rangeSlider.value;
        const index = Math.floor( value / 25 );  
        rangeSlider.style.background = `linear-gradient(to right, ${colors[index]} 0%, ${colors[index]} ${value}%, #474b50 ${value}%, #474b50 100%)`;
        userAvatar.src = `./img/face${index + 1}.svg`;
        setClassList( value );
        valueRange.innerHTML = `${ ( value / 25 ) + 1 }.0`;
    }; updateSlider();
    rangeSlider.addEventListener( 'input', updateSlider );

};
