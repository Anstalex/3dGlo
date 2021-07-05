import handler from "./handler";


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

export default tabs;
