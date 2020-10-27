function attachEventsListeners() {
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    document.getElementById('secondsBtn').addEventListener('click', () => {convertSec(+seconds.value)});
    function convertSec(sec = 0) {
        let day = sec / (24 * 60 * 60);
        let hour = sec / (60 * 60);
        let min = sec / 60;
        
        days.value = day;
        hours.value = hour;
        minutes.value = min;
        seconds.value = sec;
    }

    document.getElementById('minutesBtn').addEventListener('click', () => {convertMin(+minutes.value)});
    function convertMin(min = 0) {
        let day = min / (24 * 60);
        let hour = min / 60;
        let sec = min * 60;
        
        days.value = day;
        hours.value = hour;
        minutes.value = min;
        seconds.value = sec;
    }

    document.getElementById('hoursBtn').addEventListener('click', () => {convertHour(+hours.value)});
    function convertHour(hour = 0) {
        let day = hour / 24;
        let min = hour * 60;
        let sec = hour * (60 * 60 );
        
        days.value = day;
        hours.value = hour;
        minutes.value = min;
        seconds.value = sec;
    }

    document.getElementById('daysBtn').addEventListener('click', () => {convertDay(+days.value)});
    function convertDay(day = 0) {
        let hour = day * 24;
        let min = day * (24 * 60);
        let sec = day * 24 * 60 * 60;
        
        days.value = day;
        hours.value = hour;
        minutes.value = min;
        seconds.value = sec;
    }
}
