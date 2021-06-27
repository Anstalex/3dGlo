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


// //slider
// const slider = () => {
//     let dot;
//     const slide = document.querySelectorAll('.portfolio-item');
//     const slider = document.querySelector('.portfolio-content');
//     const dotsWrapper = document.querySelector('.portfolio-dots');
//
//     const createDots = () => {
//         for (let i = 0; i < slide.length; i++) {
//             const item = document.createElement('li');
//             item.classList.add('dot');
//             dotsWrapper.append(item);
//         }
//         dot = document.querySelectorAll('.dot');
//         dot[0].classList.add('dot-active');
//     };
//     createDots();
//
//     let currentSlide = 0;
//     let interval;
//
//     const prevSlide = (elem, index, strClass) => {
//         elem[index].classList.remove(strClass);
//     };
//     const nextSlide = (elem, index, strClass) => {
//         elem[index].classList.add(strClass);
//
//     };
//
//     const autoPlaySlide = () => {
//         prevSlide(slide, currentSlide, 'portfolio-item-active');
//         prevSlide(dot, currentSlide, 'dot-active');
//         currentSlide++;
//         if (currentSlide >= slide.length) {
//             currentSlide = 0;
//         }
//         nextSlide(slide, currentSlide, 'portfolio-item-active');
//         nextSlide(dot, currentSlide, 'dot-active');
//     };
//
//     const startSlide = (time = 2000) => {
//         interval = setInterval(autoPlaySlide, time);
//     };
//
//     const stopSlide = () => {
//         clearInterval(interval);
//     };
//
//     handler(slider, 'click', e => {
//         e.preventDefault();
//         const target = e.target;
//
//
//         if (!target.matches('.portfolio-btn,.dot')) {
//             return;
//         }
//
//         prevSlide(slide, currentSlide, 'portfolio-item-active');
//         prevSlide(dot, currentSlide, 'dot-active');
//         if (target.matches('#arrow-right')) {
//             currentSlide++;
//         } else if (target.matches('#arrow-left')) {
//             currentSlide--;
//         } else if (target.matches('.dot')) {
//             dot.forEach((item, index) => {
//                 if (item === target) {
//                     currentSlide = index;
//                 }
//             });
//         }
//         if (currentSlide >= slide.length) {
//             currentSlide = 0;
//         }
//
//         if (currentSlide < 0) {
//             currentSlide = slide.length - 1;
//         }
//         nextSlide(slide, currentSlide, 'portfolio-item-active');
//         nextSlide(dot, currentSlide, 'dot-active');
//     });
//     handler(slider, 'mouseover', e => {
//         if ((e.target.matches('.portfolio-btn')) || (e.target.matches('.dot'))) {
//             stopSlide();
//         }
//     });
//     handler(slider, 'mouseout', e => {
//         if ((e.target.matches('.portfolio-btn')) || (e.target.matches('.dot'))) {
//             startSlide();
//         }
//     });
//     startSlide();
// };
//
// slider();

//images

const photo = () => {
    let srcDefault;
    const command = document.getElementById('command');


    handler(command, 'mouseover', e => {
        const target = e.target;
        if (target.closest('.command__photo')) {
            srcDefault = target.src;
            target.src = target.dataset.img;
        }
    });

    handler(command, 'mouseout', e => {
        const target = e.target;
        if (target.closest('.command__photo')) {
            target.src = srcDefault;
        }
    });
};

photo();


//calc
const calc = (price = 100) => {
    const inputsCalc = document.querySelectorAll('.calc-item[type=number]');
    inputsCalc.forEach(item => {
        handler(item, 'input', () => {
            item.value = item.value.replace(/\D/g, '');
        });

    });

    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcDay = document.querySelector('.calc-day');
    const calcCount = document.querySelector('.calc-count');
    const totalValue = document.getElementById('total');
    let count = 0;
    let total;

    const iterateResult = () => {
        if (count === total) {
            totalValue.textContent = total;
        } else if (count < total) {
            const a = total - count;
            if (a > 1000 && a < 3000) {
                count += 100;
            } else if (a > 3000 && a < 20000) {
                count += 1000;
            } else if (a > 20000) {
                count += 10000;
            } else if (a < 1000 && a > 100) {
                count += 10;
            } else {
                count++;
            }
            totalValue.textContent = count.toString();
            setTimeout(iterateResult, 1);
        } else if (count > total) {
            const a = count - total;
            if (a > 1000 && a < 3000) {
                count -= 100;
            } else if (a > 3000 && a < 20000) {
                count -= 1000;
            } else if (a > 20000) {
                count -= 10000;
            } else if (a < 1000 && a > 100) {
                count -= 10;
            } else {
                count--;
            }
            totalValue.textContent = count.toString();
            setTimeout(iterateResult, 1);
        }

    };

    const countSum = () => {
        total = 0;
        let countValue = 1;
        let dayValue = 1;
        const typeDataValue = calcType.options[calcType.selectedIndex].dataset.value;
        const typeValue = calcType.options[calcType.selectedIndex].value;
        const squareValue = +calcSquare.value;

        if (typeValue === '0') {
            inputsCalc.forEach(item => {
                item.value = '';
            });
            totalValue.value = 0;
        }
        if (calcCount.value > 1) {
            countValue += (calcCount.value - 1) / 10;
        }

        if (calcDay.value && calcDay.value < 5) {
            dayValue *= 2;
        } else if (calcDay.value && calcDay.value < 10) {
            dayValue *= 1.5;
        }

        if (squareValue && typeDataValue) {
            total = Math.floor(total = price * typeDataValue * squareValue * countValue * dayValue);
        }

        iterateResult();
    };


    handler(calcBlock, 'change', e => {
        const target = e.target;
        if ((target.matches('select')) || (target.matches('input'))) {
            countSum();
        }
    });
};
calc(100);


//connect
const connect = () => {
    const inputsPhone = document.querySelectorAll('.form-phone');
    const inputsEmail = document.querySelectorAll('.form-email');
    const inputsName = document.querySelectorAll('.form-name');

    const inputText = document.querySelectorAll('input');
    const inputMessage = document.getElementById('form2-message');

    const regDash = item => {
        item.value = item.value.replace(/^-*/g, '').replace(/-*$/g, '').replace(/(-)\1+/g, '-');
    };

    const regExpStr = input => {
        input.value = input.value.replace(/[^а-яё\s?-]+/gi, '');
    };

    const regExpMail = input => {
        input.value = input.value.replace(/[^\s][^a-z*'_.@~ !-]+/gi, ''.trim());
    };

    const regExpPhone = input => {
        input.value = input.value.replace(/[^-()\d]/g, '');
    };

    inputText.forEach(item => {
        handler(item, 'blur', e => {
            regDash(item);
            const arr = item.value.split(' ');
            const newArr = arr.filter(elem => {
                if (elem.trim() !== '') {
                    return true;
                }
            });
            item.value = newArr.join(' ');
            if ((e.target.matches('#form2-name')) || (e.target.matches('#form1-name'))) {
                inputsName.forEach(item => {
                    regExpStr(item);
                    if (item.value !== '') {
                        item.value = item.value[0].toUpperCase() +
                            item.value.substring(1, item.value.length);
                    }
                });

            } else if (e.target.matches('#form2-message')) {
                regExpStr(inputMessage);
            } else if ((e.target.matches('#form2-email')) || (e.target.matches('#form1-email'))) {
                inputsEmail.forEach(item => {
                    regExpMail(item);

                });
            } else if ((e.target.matches('#form2-phone')) || (e.target.matches('#form1-phone'))) {
                inputsPhone.forEach(item => {
                    regExpPhone(item);
                });
            }

            if (!item.value.toString().match(/[а-яёa-z0-9]/gi)) {
                item.value = '';
            }
        });
    });
};


connect();
