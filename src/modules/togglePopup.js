import handler from "./handler.js";


const html = document.querySelector('html');
let count = '-20';
const popupContent = document.querySelector('.popup-content');
const popup = document.querySelector('.popup');
let idAnimate;

const popupShow = () => {
    popup.style.display = 'block';
    popupContent.style.display = 'block';

    if ((count < 38) && (html.clientWidth >= 768)) {
        count += 2;
        popupContent.style.left = `${count}%`;
        idAnimate = requestAnimationFrame(popupShow);
    } else if ((count < 20) && (html.clientWidth < 768)) {
        count += 2;
        popupContent.style.left = `${count}%`;
        idAnimate = requestAnimationFrame(popupShow);
    } else {
        cancelAnimationFrame(idAnimate);
    }

};

export const popupHide = () => {
    if ((count >= 38 && count < 100) && (html.clientWidth > 768)) {
        idAnimate = requestAnimationFrame(popupHide);
        count += 2;
        popupContent.style.left = `${count}%`;
    } else if ((count > +20) && (html.clientWidth >= 768)) {
        count += 2;
        popupContent.style.left = `${count}%`;
        idAnimate = requestAnimationFrame(popupShow);
    } else {
        cancelAnimationFrame(popupHide);
        popup.style.display = 'none';
        popupContent.style.display = 'none';
        count = -20;
    }
};

export default () => handler(document, 'click', e => {
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

