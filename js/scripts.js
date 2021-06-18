window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    function countTimer(deadline) {
        let timerHours = document.getElementById('timer-hours');
        let timerMinutes = document.getElementById('timer-minutes');
        let timerSeconds = document.getElementById('timer-seconds');

        function getTimeRemaining() {
            let dateStop = new Date(deadline).getTime();
            let dateNow = new Date().getTime();
            let timeRemaining = (dateStop - dateNow) / 1000;
            let seconds = Math.floor(timeRemaining % 60);
            let minutes = Math.floor((timeRemaining / 60) % 60);
            let hours = Math.floor(timeRemaining / 60 / 60);
            return {timeRemaining, hours, minutes, seconds};
        }

        function updateClock() {
            let timer = getTimeRemaining()
            let addNull = (item) => {
                if (item < 10) {
                    return '0' + item
                } else {
                    return +item

                }
            }
            timerHours.innerText = addNull(timer.hours);
            timerMinutes.innerText = addNull(timer.minutes);
            timerSeconds.innerText = addNull(timer.seconds);
        }

        updateClock()
        if (getTimeRemaining().timeRemaining > 0) {
            setInterval(updateClock, 1000)
        } else {
            timerHours.innerText = '00';
            timerMinutes.innerText = '00';
            timerSeconds.innerText = '00';
        }
    }
    countTimer('22 june 2021 01:10')

});


