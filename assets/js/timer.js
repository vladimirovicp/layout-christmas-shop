const timer = document.querySelector('.timer');

if(timer){
    const updateTimer = () => {
        const now = new Date();
        const currentUTC = now.getTime() - Math.abs(now.getTimezoneOffset()) * 60 * 1000;

       // console.log( Math.abs(now.getTimezoneOffset()) / 60);
        
        const nextYear = new Date().getUTCFullYear() + 1;
        const newYearUTC = Date.UTC(nextYear, 0, 1, 0, 0, 0) - Math.abs(now.getTimezoneOffset()) * 60 * 1000;

        const diff = newYearUTC - currentUTC; // осталось в милисекундах

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        dayTag.textContent = days;
        hourTag.textContent = hours;
        minutesTag.textContent = minutes;
        secondsTag.textContent = seconds;

    }

    const dayTag = timer.querySelector('.timer__day');
    const hourTag = timer.querySelector('.timer__hour');
    const minutesTag = timer.querySelector('.timer__minute');
    const secondsTag = timer.querySelector('.timer__second');

    setInterval(updateTimer, 1000);
    updateTimer();
}

