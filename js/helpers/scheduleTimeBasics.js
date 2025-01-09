
// scheduleTimeBasics
export const scheduleTimeBasics = () => {

    class Calendar {
        constructor(container) {
            this.container = container;
            this.date = new Date();
            this.selectedDate = null;
            this.selectedTime = null;
            
            this.monthYearElement = container.querySelector('.month-year');
            this.daysContainer = container.querySelector('.days');
            this.timeInput = container.querySelector('#time-input');
            
            this.setupEventListeners();
            this.renderizeCalendar();
        }
    
        setupEventListeners() {
            this.container.querySelector('.prev-month').addEventListener('click', () => {
                this.date.setMonth(this.date.getMonth() - 1);
                this.renderizeCalendar();
            });
    
            this.container.querySelector('.next-month').addEventListener('click', () => {
                this.date.setMonth(this.date.getMonth() + 1);
                this.renderizeCalendar();
            });
    
            this.timeInput.addEventListener('change', (e) => {
                this.selectedTime = e.target.value;
            });
        }
    
        renderizeCalendar() {
            const year = this.date.getFullYear();
            const month = this.date.getMonth();
    
            // Update month and year display
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
                           'August', 'September', 'October', 'November', 'December'];
            this.monthYearElement.textContent = `${months[month]} ${year}`;
    
            // Clear previous days
            this.daysContainer.innerHTML = '';
    
            // Get first day of month and total days
            const firstDay = new Date(year, month, 1).getDay();
            const daysInMonth = new Date(year, month + 1, 0).getDate();
    
            // Add empty spaces for days before first day of month
            for (let i = 0; i < firstDay; i++) {
                const dayElement = document.createElement('div');
                this.daysContainer.appendChild(dayElement);
            }
    
            // Add days of month
            const today = new Date();
            for (let day = 1; day <= daysInMonth; day++) {
                const dayElement = document.createElement('div');
                dayElement.textContent = day;
    
                const currentDate = new Date(year, month, day);
                
                // Disable past dates
                if (currentDate < new Date(today.getFullYear(), today.getMonth(), today.getDate())) {
                    dayElement.classList.add('disabled');
                } else {
                    dayElement.addEventListener('click', () => this.selectDate(currentDate, dayElement));
                }
    
                if (this.selectedDate && 
                    currentDate.getDate() === this.selectedDate.getDate() &&
                    currentDate.getMonth() === this.selectedDate.getMonth() &&
                    currentDate.getFullYear() === this.selectedDate.getFullYear()) {
                    dayElement.classList.add('selected');
                }
    
                this.daysContainer.appendChild(dayElement);
            }
        }
    
        selectDate(date, element) {
            this.container.querySelectorAll('.days div').forEach(div => {
                div.classList.remove('selected');
            });
            element.classList.add('selected');
            this.selectedDate = date;
        }
    
        getSelectedDateTime() {
            if (!this.selectedDate || !this.selectedTime) {
                return null;
            }
    
            const dateTime = new Date(this.selectedDate);
            const [hours, minutes] = this.selectedTime.split(':');
            dateTime.setHours(parseInt(hours), parseInt(minutes));
    
            return {
                date: dateTime,
                formattedDate: dateTime.toLocaleDateString(),
                formattedTime: this.selectedTime,
                year: dateTime.getFullYear(),
                month: dateTime.getMonth() + 1,
                day: dateTime.getDate(),
                hours: parseInt(hours),
                minutes: parseInt(minutes)
            };
        }
    }
    
    const calendarContainer = document.querySelector('.menu-card-calendar');
    const calendar = new Calendar(calendarContainer);

    window.getCalendarData = () => {
        return calendar.getSelectedDateTime();
    };

};
