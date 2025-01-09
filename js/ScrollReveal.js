
// scrollRevealTitleConfig
export const scrollRevealTitleConfig = () => {

    return {
        delay: 0,
        duration: 600,
        distance: '1.5em',
        opacity: 0,
        origin: 'bottom',
        reset: true
    }

}


// scrollRevealBackConfig
export const scrollRevealBackConfig = () => {

    return {
        delay: 0,
        duration: 600,
        distance: '3em',
        opacity: 0,
        origin: 'right',
    };

}


// scrollRevealBoxConfig
export const scrollRevealBoxConfig = ( counter, container ) => {

    return {
        container: container,
        delay: 300,
        duration: 300 * counter,
        distance: '3em',
        opacity: 0,
        origin: 'right',
    };

}

// scrollRevealChatConfig
export const scrollRevealChatConfig = ( counter, container, origin ) => {

    return {
        container: container,
        delay: 0,
        duration: 150 * counter,
        distance: '1em',
        opacity: 0,
        origin,
    };

}


// scrollRevealCardInfo
export const scrollRevealCardInfo = ( counter ) => {

    return {
        delay: 450,
        duration: 300 * counter,
        distance: '3em',
        opacity: 0,
        origin: 'right',
    };

}


// scrollRevealCardMainConfig
export const scrollRevealCardMainConfig = () => {

    return {
        delay: 300,
        duration: 300,
        distance: '3em',
        opacity: 0,
        origin: 'right',
        reset: true
    }

}


// scrollRevealCardMenuConfig
export const scrollRevealCardMenuConfig = ( origin = 'right' ) => {

    return {
        delay: 0,
        duration: 300,
        distance: '3em',
        opacity: 0,
        origin: origin,
        reset: true
    }

}
