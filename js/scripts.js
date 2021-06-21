window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    //Таймер
    let timer;

    function countTimer(deadline) {
        let timerHours = document.getElementById('timer-hours');
        let timerMinutes = document.getElementById('timer-minutes');
        let timerSeconds = document.getElementById('timer-seconds');
        let news = {}

        function getTimeRemaining() {
            let dateStop = new Date(deadline).getTime();
            let dateNow = new Date().getTime();
            let timeRemaining = (dateStop - dateNow) / 1000;
            let seconds = Math.floor(timeRemaining % 60);
            let minutes = Math.floor((timeRemaining / 60) % 60);
            let hours = Math.floor(timeRemaining / 60 / 60);
            news.timeRemaining = timeRemaining;
            news.hours = hours;
            news.minutes = minutes;
            news.seconds = seconds;
        }

        function updateClock() {
            getTimeRemaining();
            let addNull = (item) => {
                if (item < 10) {
                    return '0' + item
                } else {
                    return +item
                }
            }
            timerHours.innerText = addNull(news.hours);
            timerMinutes.innerText = addNull(news.minutes);
            timerSeconds.innerText = addNull(news.seconds);
        }

        updateClock();
        if (news.timeRemaining > 0) {
            timer = setInterval(updateClock, 1000);
        } else {
            timerHours.innerText = '00';
            timerMinutes.innerText = '00';
            timerSeconds.innerText = '00';
            clearInterval(timer);
        }
    }

    countTimer('22 june 2021 01:10');
});


//Меню
const handler = (item, event, callback) => {
    item.addEventListener(event, callback);
};
const handlerArray = function (items, event, callback) {
    for (const key of items) {
        key.addEventListener(event, callback)
    }
}

const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const btnClose = document.querySelector('.close-btn');
    const menuItem = menu.querySelectorAll('ul>li');

    const menuChange = () => {
        menu.classList.toggle('active-menu');
    };

    handler(btnMenu, 'click', menuChange);
    handler(btnClose, 'click', menuChange);
    handlerArray(menuItem, 'click', menuChange);


};

toggleMenu();

//popup

const togglePopup = () => {
    let count = '-20' ;
    const popupContent = document.querySelector('.popup-content')
    const popup = document.querySelector('.popup');
    const popupBtn = document.querySelectorAll('.popup-btn');
    const popupClose = document.querySelector('.popup-close');
    popup.style.transition ='all 1s ease'
    let idAnimate;

    const popupShow = () => {
        popup.style.display = 'block';
        if (count < 38) {
            count++
            popupContent.style.left = `${count}%`;
            idAnimate = requestAnimationFrame(popupShow);
        } else {
            console.log('элс Шоу')
            console.log(popupContent.style.left)
            console.log(count)
            cancelAnimationFrame(idAnimate)
        }
    };
    
    const popupHide = () => {
            if (count >= 38&&count<100) {
                idAnimate = requestAnimationFrame(popupHide);
                count++
                popupContent.style.left = `${count}%`
                console.log('иф Хайд')
            } else {
                console.log('элс Хайд')
                cancelAnimationFrame(popupHide)
                popup.style.display = 'none'
                count = '-20';
            }
    };

    handlerArray(popupBtn, 'click', ()=>{ requestAnimationFrame(popupShow)});
    handler(popupClose, 'click',()=>{ requestAnimationFrame(popupHide)});


}
togglePopup();




