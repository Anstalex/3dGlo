// import handler from "./handler.js";
//
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
// export default slider;
