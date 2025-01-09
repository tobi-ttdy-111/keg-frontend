
// imports
import { workFractal } from '../fractals/workFractal.js';


// workInProgressComponent
export const workInProgressComponent = () => {

    const users = [ // TODO: fetch work in progress (chats)
        {
            name: "Juan Pérez",
            message: "Estoy muy contento con el servicio que recibí. Todo fue perfecto.",
            ago: "2d ago",
            id: 123234234234234
        },
        {
            name: "María González",
            message: "El diseño del sitio web superó mis expectativas. Muchas gracias.",
            ago: "1w ago",
            id: 3423081212323
        }
    ];
    // TODO: conexion por sockets ??
    
    workFractal( users );

};
