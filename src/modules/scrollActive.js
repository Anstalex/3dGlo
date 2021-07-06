import handler from "./handler.js";



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

export default scrollActive;
