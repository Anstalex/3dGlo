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

    const postData = body => fetch('./server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
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

            test
                .then(response => {
                    if (response.status !== 200) {
                        throw new Error('Status network not correct');
                    }
                    statusMessages.textContent = successMessage;
                }).then(() => {
                    setTimeout(() => { statusMessages.textContent = ''; }, 500);

                })
                .catch(error => {
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
        iterate();

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

export default sendForm;
