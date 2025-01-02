
// scrollRevealBoxConfig
export const scrollRevealBoxConfig = ( counter ) => {

    return {
        delay: 0,
        duration: 200 * counter,
        distance: '3em',
        opacity: 0, 
        origin: 'right',
        reset: true
    }

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