
// imports
import { scheduledFractal } from '../fractals/scheduledFractal.js';


// scheduledComponent
export const scheduledComponent = () => {

    const scheduledList = [ // TODO: fetch scheduled (scheduledList)
        {
            nombre: "Juan Pérez",
            fechaAgendada: "Jan 15, 2025 at 3:30 PM",
            duracion: "4 hours",
            id: 8372
        },
        {
            nombre: "María López",
            fechaAgendada: "Feb 10, 2025 at 10:00 AM",
            duracion: "6 hours",
            id: 5291
        },
        {
            nombre: "Carlos Sánchez",
            fechaAgendada: "Mar 5, 2025 at 2:45 PM",
            duracion: "8 hours",
            id: 6048
        }
    ]
    
    scheduledFractal( scheduledList );

};
