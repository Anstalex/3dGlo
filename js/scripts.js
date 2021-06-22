'use strict';
const html = document.querySelector('html');
//Timer
window.addEventListener('DOMContentLoaded', () => {

    let timer;

    function countTimer(deadline) {
        const timerHours = document.getElementById('timer-hours');
        const timerMinutes = document.getElementById('timer-minutes');
        const timerSeconds = document.getElementById('timer-seconds');
        const news = {};

        function getTimeRemaining() {
            const dateStop = new Date(deadline).getTime();
            const dateNow = new Date().getTime();
            const timeRemaining = (dateStop - dateNow) / 1000;
            const seconds = Math.floor(timeRemaining % 60);
            const minutes = Math.floor((timeRemaining / 60) % 60);
            const hours = Math.floor(timeRemaining / 60 / 60);
            news.timeRemaining = timeRemaining;
            news.hours = hours;
            news.minutes = minutes;
            news.seconds = seconds;
        }

        function updateClock() {
            getTimeRemaining();
            const addNull = item => {
                if (item < 10) {
                    return '0' + item;
                } else {
                    return +item;
                }
            };
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


//Menu
const handler = (item, event, callback) => {
    item.addEventListener(event, callback);
};
// const handlerArray = (items, event, callback) => {
//     for (const key of items) {
//         key.addEventListener(event, callback);
//     }
// };

const toggleMenu = () => {
    const menu = document.querySelector('menu');

    const menuOpen = () => {
        menu.classList.add('active-menu');
    };
    const menuClose = () => {
        menu.classList.remove('active-menu');
    };

    handler(document, 'click', e => {
        const target = e.target;
        if (((!target.closest('menu')) && (!target.closest('.menu'))) ||
            (target.closest('li')) || target.closest('.close-btn')) {
            menuClose();
        } else if (target.closest('.menu')) {
            menuOpen();
        }
    });
};

toggleMenu();


//popup
const togglePopup = () => {
    let count = '-20';
    const popupContent = document.querySelector('.popup-content');
    const popup = document.querySelector('.popup');
    popup.style.transition = 'all 1s ease';
    let idAnimate;

    const popupShow = () => {
        popup.style.display = 'block';
        if ((count < 38) && (html.clientWidth > 768)) {
            count += 2;
            popupContent.style.left = `${count}%`;
            idAnimate = requestAnimationFrame(popupShow);
        } else {
            cancelAnimationFrame(idAnimate);
        }
    };

    const popupHide = () => {
        if ((count >= 38 && count < 100) && (html.clientWidth > 768)) {
            idAnimate = requestAnimationFrame(popupHide);
            count += 2;
            popupContent.style.left = `${count}%`;
        } else {
            cancelAnimationFrame(popupHide);
            popup.style.display = 'none';
            count = -20;
        }
    };

    handler(document, 'click', e => {
        const target = e.target;
        if (target.matches('.popup-btn')) {
            requestAnimationFrame(popupShow);
        }
        if (target.matches('.popup-close')) {
            requestAnimationFrame(popupHide);
        } else if (!target.closest('.popup-content')) {
            requestAnimationFrame(popupHide);
        }
    });
};

togglePopup();


//scroll
const scrollActive = () => {
    let countScroll = 0;
    let scrollAnimate;
    const btnScroll = document.querySelector('a>img');
    const main = document.querySelector('main');

    const scrollDown = () => {
        countScroll = html.scrollTop;
        if (html.scrollTop < main.scrollHeight) {
            scrollAnimate = requestAnimationFrame(scrollDown);
            countScroll += 20;
            html.scrollTop = countScroll;
        } else {
            cancelAnimationFrame(scrollAnimate);
            countScroll = 0;
        }
    };

    handler(btnScroll, 'click', e => {
        e.preventDefault();
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
};

scrollActive();


//tabs
const tabs = () => {

    const tabHeader = document.querySelector('.service-header');
    const tabs = document.querySelectorAll('.service-header-tab');
    const tabContent = document.querySelectorAll('.service-tab');

    const toggleTabContent = index => {
        for (let i = 0; i < tabContent.length; i++) {
            if (index === i) {
                tabs[i].classList.add('active');
                tabContent[i].classList.remove('d-none');
            } else {
                tabs[i].classList.remove('active');
                tabContent[i].classList.add('d-none');
            }
        }
    };

    handler(tabHeader, 'click', event => {
        let target = event.target;
        target = target.closest('.service-header-tab');
        if (target) {
            tabs.forEach((item, i) => {
                if (item === target) {
                    toggleTabContent(i);
                }
            });

        }
    });
};

tabs();


//slider
const slider = () => {
    let dot;
    const slide = document.querySelectorAll('.portfolio-item');
    // const btn = document.querySelectorAll('.portfolio-btn');
    const slider = document.querySelector('.portfolio-content');
    const dotsWrapper = document.querySelector('.portfolio-dots');

    const createDots = () => {
        for (let i = 0; i < slide.length; i++) {
            const item = document.createElement('li');
            item.classList.add('dot');
            dotsWrapper.append(item);
        }
        dot = document.querySelectorAll('.dot');
        dot[0].classList.add('dot-active');
    };
    createDots();

    let currentSlide = 0;
    let interval;

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };
    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);

    };

    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');
        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');
    };

    const startSlide = (time = 2000) => {
        interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    handler(slider, 'click', e => {
        e.preventDefault();
        const target = e.target;


        if (!target.matches('.portfolio-btn,.dot')) {
            return;
        }

        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');
        if (target.matches('#arrow-right')) {
            currentSlide++;
        } else if (target.matches('#arrow-left')) {
            currentSlide--;
        } else if (target.matches('.dot')) {
            dot.forEach((item, index) => {
                if (item === target) {
                    currentSlide = index;
                }
            });
        }
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }

        if (currentSlide < 0) {
            currentSlide = slide.length - 1;
        }
        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');
    });
    handler(slider, 'mouseover', e => {
        if ((e.target.matches('.portfolio-btn')) || (e.target.matches('.dot'))) {
            stopSlide();
        }
    });
    handler(slider, 'mouseout', e => {
        if ((e.target.matches('.portfolio-btn')) || (e.target.matches('.dot'))) {
            startSlide();
        }
    });
    startSlide();
};

slider();

//merge
