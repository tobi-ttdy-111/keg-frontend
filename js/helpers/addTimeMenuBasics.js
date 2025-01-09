
// addTimeMenuBasics
export const addTimeMenuBasics = () => {

    const setupSelect = ( selectId ) => {
        const select = document.getElementById( selectId );
        const flecha = select.nextElementSibling;
    
        const toggleArrow = (isOpen) => {
            if (isOpen) {
                flecha.style.transform = "rotate(180deg)";
            } else {
                flecha.style.transform = "rotate(0deg)";
            }
        }
    
        select.addEventListener("focus", () => toggleArrow( true ));
        select.addEventListener("blur", () => toggleArrow( false ));
        select.addEventListener("change", () => toggleArrow( false ));
    }
    setupSelect( 'hoursAmmount' );
    setupSelect( 'paymentMethod' );

};
