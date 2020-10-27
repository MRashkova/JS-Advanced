function solve(steps, stepLenght, speed) {

    let disctanceInMeters = steps * stepLenght;
    let speedForMeterInSeconds = speed / 3.6;
    let rest = Math.floor(disctanceInMeters / 500);
    let time = disctanceInMeters / speedForMeterInSeconds + rest * 60;

    let timeInHours = Math.floor(time / 3600);
    let timeInMinutes = Math.floor(time / 60);
    let timeInSeconds = Math.round(time % 60);

    return `${pad(timeInHours)}:${pad(timeInMinutes)}:${pad(timeInSeconds)}`;

    function pad(num) {
        if (num < 10) {
            return '0' + num;
        } else {
            return '' + num;
        }
    }
}
