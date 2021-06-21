const html = document.querySelector('html')

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

    const menuOpen = () => {
        menu.classList.add('active-menu');
    };
    const menuClose = () => {
        menu.classList.remove('active-menu');
    };

    handler(document, 'click', (e)=>{
        if (!e.target.closest('menu')&&(!e.target.closest('.menu'))) {
            menuClose()
        }
    });
    handler(btnMenu, 'click', menuOpen);
    handler(btnClose, 'click', menuClose);
    handlerArray(menuItem, 'click', menuClose);


};

toggleMenu();

//popup

const togglePopup = () => {
    let count = '-20';
    const popupContent = document.querySelector('.popup-content')
    const popup = document.querySelector('.popup');
    const popupBtn = document.querySelectorAll('.popup-btn');
    const popupClose = document.querySelector('.popup-close');
    popup.style.transition = 'all 1s ease'
    let idAnimate;

    const popupShow = () => {
        popup.style.display = 'block';
        if ((count < 38) && (html.clientWidth > 768)) {
            count+=2
            popupContent.style.left = `${count}%`;
            idAnimate = requestAnimationFrame(popupShow);
        } else {
            cancelAnimationFrame(idAnimate)
        }
    };

    const popupHide = () => {
        if ((count >= 38 && count < 100) && (html.clientWidth > 768)) {
            idAnimate = requestAnimationFrame(popupHide);
            count+=2
            popupContent.style.left = `${count}%`
        } else {
            cancelAnimationFrame(popupHide)
            popup.style.display = 'none'
            count = -20;
        }
    };

    handler(document,'click',(e)=>{
        if (!e.target.closest('.popup-content')){
            requestAnimationFrame(popupHide);
        }
    })
    handlerArray(popupBtn, 'click', () => {
        requestAnimationFrame(popupShow);
    });
    handler(popupClose, 'click', () => {
        requestAnimationFrame(popupHide);
    });


}
togglePopup();

const scrollActive = () => {
    let countScroll = 0;
    let scrollAnimate;
    const btnScroll = document.querySelector('a>img')
    const main = document.querySelector('main');

    const scrollDown = () => {
        countScroll = html.scrollTop
        if (html.scrollTop < main.scrollHeight) {
            scrollAnimate = requestAnimationFrame(scrollDown)
            countScroll += 20;
            html.scrollTop = countScroll
        } else {
            cancelAnimationFrame(scrollAnimate)
            countScroll = 0;
        }
    }

    handler(btnScroll, 'click', (e) => {
        e.preventDefault()
        requestAnimationFrame(scrollDown);
    });
    handler(document, 'wheel', () => {
        countScroll = 0;
        cancelAnimationFrame(scrollAnimate);
    });
    handler(document, 'click', () => {
        countScroll = 0;
        cancelAnimationFrame(scrollAnimate);
    });
}

scrollActive();



