
// scrollRevealBoxConfig
export const scrollRevealBoxConfig = ( counter, container ) => {

    return {
        container: container,
        delay: 0,
        duration: 200 * counter,
        distance: '3em',
        opacity: 0,
        origin: 'right',
    };

}


// scrollRevealTitleConfig
export const scrollRevealTitleConfig = () => {

    return {
        delay: 0,
        duration: 300,
        distance: '30px',
        opacity: 0,
        origin: 'bottom',
        reset: true
    }

}


// scrollRevealCardInfo
export const scrollRevealCardInfo = ( counter ) => {

    return {
        delay: 450,
        duration: 200 * counter,
        distance: '30px',
        opacity: 0,
        origin: 'right',
    };

}


// scrollRevealCardMainConfig
export const scrollRevealCardMainConfig = () => {

    return {
        delay: 300,
        duration: 300,
        distance: '30px',
        opacity: 0,
        origin: 'right',
        reset: true
    }

}