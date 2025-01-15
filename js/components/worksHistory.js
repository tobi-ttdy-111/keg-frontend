
// imports
import { worksHistoryFractal } from '../fractals/worksHistoryFractal.js';


// worksHistoryComponent
export const worksHistoryComponent = () => {

    const worksHistoryList = [ // TODO: fetch history (worksHistoryList)
        {
            "id": 1,
            "title": "test1",
            "date": "Dec 30, 2024 at 12:00 AM",
            "payed": "$350 - $670"
        },
        {
            "id": 2,
            "title": "test2",
            "date": "Dec 30, 2024 at 12:00 AM",
            "payed": "$350 - $670"
        },
        {
            "id": 3,
            "title": "test3",
            "date": "Dec 30, 2024 at 12:00 AM",
            "payed": "$350 - $670"
        }
    ]

    worksHistoryFractal( worksHistoryList )

};
