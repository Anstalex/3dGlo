'use strict';
const html = document.querySelector('html');

function maskPhone(selector, masked = '+7 (___) ___-__-__') {
    const elems = document.querySelectorAll(selector);

    function mask(event) {
        const keyCode = event.keyCode;
        const template = masked,
            def = template.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, "");
        let i = 0,
            newValue = template.replace(/[_\d]/g, a => (i < val.length ? val.charAt(i++) || def.charAt(i) : a));
        i = newValue.indexOf("_");
        if (i !== -1) {
            newValue = newValue.slice(0, i);
        }
        let reg = template.substr(0, this.value.length).replace(/_+/g,
            a => "\\d{1," + a.length + "}").replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
            this.value = newValue;
        }
        if (event.type === "blur" && this.value.length < 5) {
            this.value = "";
        }

    }

    for (const elem of elems) {
        elem.addEventListener("input", mask);
        elem.addEventListener("focus", mask);
        elem.addEventListener("blur", mask);
    }

}

maskPhone('.form-phone');

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
            (target.closest('li>a')) || target.closest('.close-btn')) {
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
    const btnScroll = document.querySelector('a>img');
    const service = document.getElementById('service-block');

    handler(btnScroll, 'click', e => {
        e.preventDefault();
        service.scrollIntoView({
            block: "start",
            behavior: "smooth"
        });
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
            if (a > 100 && a < 1000) {
                count += 100;
            } else if (a > 1000 && a < 10000) {
                count += 1000;
            } else if (a > 10000) {
                count += 10000;
            } else if (a < 1000 && a > 10) {
                count += 10;
            } else {
                count++;
            }
            totalValue.textContent = count.toString();
            setTimeout(iterateResult, 1);
        } else if (count > total) {
            const a = count - total;
            if (a > 100 && a < 1000) {
                count -= 100;
            } else if (a > 1000 && a < 10000) {
                count -= 1000;
            } else if (a > 10000) {
                count -= 10000;
            } else if (a < 100 && a > 10) {
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
    const regExpName = input => {
        input.value = input.value.replace(/[^\sа-яё]+/gi, '');
    };
    const regExpMessages = input => {
        input.value = input.value.replace(/[^а-яё0-9\s.,;:?!\-"'()]+/gi, '');
    };
    const regExpMail = input => {
        input.value = input.value.replace(/[^a-z0-9\-@_.]+/gi, '');
    };
    const regExpPhone = input => {
        input.value = input.value.replace(/[^-+()\d]/g, '');
    };
    const isValid = (item, condition, text) => {
        if (condition) {
            item.classList.add('valid');
            item.classList.remove('invalid');
            return true;
        } else {
            item.classList.add('invalid');
            item.classList.remove('valid');
            item.value = '';
            item.placeholder = text;
            return false;
        }
    };
    inputText.forEach(item => {
        handler(item, 'blur', e => {
            regDash(item);
            if (e.target.matches('.form-name')) {
                isValid(item, item.value.length > 1, 'Введите не менее 2 символов');
            } else if (e.target.matches('.form-email')) {
                isValid(item, ((item.value.length > 5) &&
                    (item.value.match(/.{2,}@(.{2,})\..{2,}/))), 'e-mail в формате kkk@mail.ru');
            } else if (e.target.matches('.form-phone')) {
                isValid(item, ((item.value.length === 0) ||
                    (item.value.length === 18)), 'Телефон должен содержать 11 цифр');
            } else if (e.target.matches('#form2-message')) {
                isValid(item, ((item.value.length > 5) ||
                    (item.value.length === 0)), 'Сообщение не должно быть  короче 5 символов');
            }
            const arr = item.value.split(' ');
            const newArr = arr.filter(elem => {
                if (elem.trim() !== '') {
                    return true;
                }
            });
            item.value = newArr.join(' ');
        });
        handler(item, 'input', e => {
            if (e.target.matches('.form-name')) {
                inputsName.forEach(item => {
                    regExpName(item);
                    if (item.value !== '') {
                        item.value = item.value[0].toUpperCase() +
                            item.value.substring(1, item.value.length);
                    }
                });

            } else if (e.target.matches('#form2-message')) {
                if (item.value !== '') {
                    item.value = item.value[0].toUpperCase() +
                        item.value.substring(1, item.value.length);
                }
                regExpMessages(inputMessage);
            } else if (e.target.matches('.form-email')) {
                inputsEmail.forEach(item => {
                    regExpMail(item);
                });
            } else if (e.target.matches('.form-phone')) {
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

//send-ajax-form

const sendForm = () => {
    const message = document.getElementById('form2-message');
    const errorMessage = 'Что-то пошло не так';
    const loadMessage = `<div class="ldio-preload">
                <div></div><div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                </div>`;
    const successMessage = 'Спасибо!Мы скоро с вами свяжемся!';

    const form1 = document.getElementById('form1');
    const form2 = document.getElementById('form2');
    const formModal = document.getElementById('form3');

    const statusMessages = document.createElement('div');
    statusMessages.style.cssText = `font-size: 2rem; min-height: 30px; margin: 30px 0; color:#ffffff;`;

    const postData = body => new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if (request.readyState !== 4) {
                return;
            }
            if (request.status === 200) {
                resolve();
            } else {
                reject(request.status);
            }
        });

        request.open('POST', './server.php');
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify(body));
    });
    const renderData = (event, form) => {
        const formInputs = form.querySelectorAll('input');
        event.preventDefault();
        form.appendChild(statusMessages);
        statusMessages.innerHTML = loadMessage;
        const formData = new FormData(form);

        const body = {};
        let test;
        for (const val of formData.entries()) {
            body[val[0]] = val[1];
            test = postData(body);

            test.then(response => {
                statusMessages.textContent = successMessage;
            });

            test.catch(error => {
                statusMessages.textContent = errorMessage;
                console.error(error);
            });
        }
        const iterate = () => {
            for (const item of formInputs) {
                item.value = '';
                message.value = '';
                item.classList.remove('invalid');
                item.classList.remove('valid');
            }
        };
        test
            .then(iterate)
            .catch(error => console.error(error));

    };

    form1.addEventListener('submit', e => {
        renderData(e, form1);
    });
    form2.addEventListener('submit', e => {
        renderData(e, form2);
    });
    formModal.addEventListener('submit', e => {
        renderData(e, formModal);
    });

};


sendForm();



