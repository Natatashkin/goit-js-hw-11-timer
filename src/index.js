import './styles.css';

const timeSet = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    minutes: document.querySelector('[data-value="mins"]'),
    seconds: document.querySelector('[data-value="secs"]'),
    timer: document.querySelector('#timer-1')
}

class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.timerId = null;
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
        
        if (days === 0 && hours === 0 && mins === 0 && secs === 0) {
            clearInterval(this.timerId);
        }
        
        return { days, hours, mins, secs }
    }

    timerInterface(timeData) {
    timeSet.days.textContent = String(timeData.days).padStart(2, '0');
    timeSet.hours.textContent = String(timeData.hours).padStart(2, '0');
    timeSet.minutes.textContent = String(timeData.mins).padStart(2, '0');
    timeSet.seconds.textContent = String(timeData.secs).padStart(2, '0');
        
}

}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Nov 4, 2021, 22:28:00'),
});



