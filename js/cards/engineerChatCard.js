
// imports
import { chatFractal } from '../fractals/chatFractal.js';


// engineerChatCard 
export const engineerChatCard = ( id ) => { // FIXME: Desestructuracion de datos

    window.lastEngineer = id;
    const chat = { // TODO: Pedir todo el chat del usuario (id)
        name: "Carlos Martínez",
        timeRemaining: 5, // Horas restantes
        id: id,
        chats: [
            {
                from: id,
                to: 1,
                message: "Hola, ¿cómo estás?"
            },
            {
                from: 1,
                to: id,
                message: "Todo bien, ¿y tú?"
            },
            {
                from: id,
                to: 1,
                message: "¿Terminaste el proyecto?"
            },
            {
                from: id,
                to: 1,
                message: "Hola, ¿cómo estás?"
            },
            {
                from: 1,
                to: id,
                message: "Todo bien, ¿y tú?"
            },
            {
                from: id,
                to: 1,
                message: "¿Terminaste el proyecto?"
            },
            {
                from: id,
                to: 1,
                message: "Hola, ¿cómo estás?"
            },
            {
                from: 1,
                to: id,
                message: "Todo bien, ¿y tú?"
            },
            {
                from: id,
                to: 1,
                message: "¿Terminaste el proyecto?"
            },
            {
                from: id,
                to: 1,
                message: "Hola, ¿cómo estás?"
            },
            {
                from: 1,
                to: id,
                message: "Todo bien, ¿y tú?"
            },
            {
                from: id,
                to: 1,
                message: "¿Terminaste el proyecto?"
            },
            {
                from: id,
                to: 1,
                message: "Hola, ¿cómo estás?"
            },
            {
                from: 1,
                to: id,
                message: "Todo bien, ¿y tú?"
            },
            {
                from: id,
                to: 1,
                message: "¿Terminaste el proyecto?"
            },
            {
                from: id,
                to: 1,
                message: "Hola, ¿cómo estás?"
            },
            {
                from: 1,
                to: id,
                message: "Todo bien, ¿y tú?"
            },
            {
                from: id,
                to: 1,
                message: "¿Terminaste el proyecto?"
            },
            {
                from: id,
                to: 1,
                message: "Hola, ¿cómo estás?"
            },
            {
                from: 1,
                to: id,
                message: "Todo bien, ¿y tú?"
            },
            {
                from: id,
                to: 1,
                message: "¿Terminaste el proyecto?"
            }
        ]
    };

    chatFractal( document.querySelector( '.card' ), chat, id );

};