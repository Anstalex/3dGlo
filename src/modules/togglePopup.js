import handler from "./handler.js";


const html = document.querySelector('html');
let count = -20;
const popupContent = document.querySelector('.popup-content');
const popup = document.querySelector('.popup');
let idAnimate;

const popupShow = () => {
    if (html.clientWidth > 768) {
        if (count < 50) {
            popup.style.display = 'block';
            popupContent.style.display = 'block';
            popupContent.style.transform = 'translateX(-50%)';
            count += 2;
            popupContent.style.left = `${count}%`;
            idAnimate = requestAnimationFrame(popupShow);
        } else {
            cancelAnimationFrame(idAnimate);
        }
    } else if (html.clientWidth <= 768) {
        popup.style.display = 'block';
        popupContent.style.display = 'block';
        popupContent.style.left = '50%';
        popupContent.style.transform = 'translateX(-50%)';
    }
};

export const popupHide = () => {
    popupContent.style.transform = '';
    if (html.clientWidth > 768) {
        if (count >= 50 && count < 100) {
            idAnimate = requestAnimationFrame(popupHide);
            count += 2;
            popupContent.style.left = `${count}%`;
        } else {
            cancelAnimationFrame(popupHide);
            popup.style.display = 'none';
            popupContent.style.display = 'none';
            count = -20;
        }
    } else if (html.clientWidth <= 768) {
        popup.style.display = 'none';
        popupContent.style.display = 'none';
    }


};

export default () => handler(document, 'click', e => {
    const target = e.target;
    if (target.matches('.popup-btn')) {
        requestAnimationFrame(popupShow);
    }
    if (target.matches('.popup-close')) {
        requestAnimationFrame(popupHide);
    } else if ((!target.closest('.popup-content')) && (!target.closest('.popup-btn'))) {
        requestAnimationFrame(popupHide);
    }
});

