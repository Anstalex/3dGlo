import handler from "./handler";


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

export default toggleMenu;
