import handler from "./handler.js";



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

export default photo;
