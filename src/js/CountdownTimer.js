export default class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.timeSet = {
            timer: document.querySelector(selector),
            days: document.querySelector(`${selector} [data-value="days"]`),
            hours: document.querySelector(`${selector} [data-value="hours"]`),
            minutes: document.querySelector(`${selector} [data-value="mins"]`),
            seconds: document.querySelector(`${selector} [data-value="secs"]`)   
        }
        
        const { days, hours, minutes, seconds } = this.timeSet;
        this.selector = selector;
        this.targetDate = targetDate;
        this.timerId = null;
        this.days = days;
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.startTimer();
       
    }

    startTimer() {
        
        this.getTime();

        this.timerId = setInterval(() => {
            this.getTime();
        }, 1000);
        
    };

    getTime() {
        const time = new Date(this.targetDate) - Date.now();
        const leftTime = this.timerComponents(time);
        this.timerInterface(leftTime);
    }

    timerComponents(date) {
        const days = Math.floor(date / (1000 * 60 * 60 * 24));
        const hours = Math.floor((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((date % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((date % (1000 * 60)) / 1000);

        const time = { days, hours, mins, secs };
        
        if (days === 0 && hours === 0 && mins === 0 && secs === 0) {
            clearInterval(this.timerId);
            localStorage.setItem('finishTime', JSON.stringify(time));
        }

        return time;
    }

    timerInterface(timeData) {
        this.days.textContent = String(timeData.days).padStart(2, '0');
        this.hours.textContent = String(timeData.hours).padStart(2, '0');
        this.minutes.textContent = String(timeData.mins).padStart(2, '0');
        this.seconds.textContent = String(timeData.secs).padStart(2, '0');
    }

}