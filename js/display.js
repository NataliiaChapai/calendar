const calendar = document.querySelector('.calendar');
const currentMonth = calendar.querySelector('.month');
export const monthDays = calendar.querySelector('.days');
const week = 7;

export default class Display {
  
    constructor(currentDate) {
        this.date = currentDate;
        this.date;
        this.month;
        this.year;
    }

    setMonth() {
        this.month = this.date.toLocaleString('en-us', {month: 'long'});
        return this.month;
    }

    setYear() {
        this.year = this.date.getFullYear();
        return this.year;
    }

    setDate() {
        this.date = this.date.getDate();
        return this.date;
    }

    showCurentMonth() {
        currentMonth.textContent = `${this.setMonth()} ${this.setYear()}`;
    }

    showDays() {
        let lastDay = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
        const lastDayPrevMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
        const firstDayIndex = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
        const lastDayIndex = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay();

        for (let i = firstDayIndex; i > 0; i--) {
            monthDays.insertAdjacentHTML('beforeend', `<div class="day prev">${lastDayPrevMonth - i + 1}</div>`);
        }
        for (let i = 1; i <= lastDay; i++) {
            if (i === new Date().getDate() && this.date.getMonth() === new Date().getMonth()){
                monthDays.insertAdjacentHTML('beforeend', `<div class="day current">${i}</div>`);
            } else {
            monthDays.insertAdjacentHTML('beforeend', `<div class="day">${i}</div>`);
            }
        }
        for (let i = 1; i < week - lastDayIndex; i++) {
            monthDays.insertAdjacentHTML('beforeend', `<div class="day last">${i}</div>`);
        }
    }
}