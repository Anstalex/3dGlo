import handler from "./handler.js";



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
            if  (target.closest('li>a')) {
                e.preventDefault();
                const targetUrl = target.href.match(/#([^ ]*)/)[1];
                const elemPlace = document.getElementById(`${targetUrl}`);
                elemPlace.scrollIntoView({
                    block: "start",
                    behavior: "smooth"
                });
                menuClose();

            }
            menuClose();
        } else if (target.closest('.menu')) {
            menuOpen();
        }
    });
};

export default toggleMenu;
