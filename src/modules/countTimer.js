// let timer;
// function countTimer(deadline) {
//     const timerHours = document.getElementById('timer-hours');
//     const timerMinutes = document.getElementById('timer-minutes');
//     const timerSeconds = document.getElementById('timer-seconds');
//     const news = {};
//
//     function getTimeRemaining() {
//         const dateStop = new Date(deadline).getTime();
//         const dateNow = new Date().getTime();
//         const timeRemaining = (dateStop - dateNow) / 1000;
//         const seconds = Math.floor(timeRemaining % 60);
//         const minutes = Math.floor((timeRemaining / 60) % 60);
//         const hours = Math.floor(timeRemaining / 60 / 60);
//         news.timeRemaining = timeRemaining;
//         news.hours = hours;
//         news.minutes = minutes;
//         news.seconds = seconds;
//     }
//
//     function updateClock() {
//         getTimeRemaining();
//         const addNull = item => {
//             if (item < 10) {
//                 return '0' + item;
//             } else {
//                 return +item;
//             }
//         };
//         timerHours.innerText = addNull(news.hours);
//         timerMinutes.innerText = addNull(news.minutes);
//         timerSeconds.innerText = addNull(news.seconds);
//     }
//
//     updateClock();
//     if (news.timeRemaining > 0) {
//         timer = setInterval(updateClock, 1000);
//     } else {
//         timerHours.innerText = '00';
//         timerMinutes.innerText = '00';
//         timerSeconds.innerText = '00';
//         clearInterval(timer);
//     }
// }
//
// export default countTimer;
