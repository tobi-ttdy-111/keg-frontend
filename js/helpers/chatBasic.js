
// chatBasics
export const chatBasics = (card) => {

    const textarea = card.querySelector('.data-entry-chatbox textarea');

    textarea.addEventListener('input', () => {
        textarea.style.height = 'auto'; 
        textarea.style.height = `${textarea.scrollHeight}px`; // Ajusta según el contenido
    });

};
