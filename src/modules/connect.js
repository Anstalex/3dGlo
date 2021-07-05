import handler from "./handler";


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

export default connect;
