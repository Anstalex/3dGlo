import handler from "./handler";


const calc = (price = 100) => {
    const inputsCalc = document.querySelectorAll('.calc-item[type=number]');
    inputsCalc.forEach(item => {
        handler(item, 'input', () => {
            item.value = item.value.replace(/\D/g, '');
        });

    });

    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcDay = document.querySelector('.calc-day');
    const calcCount = document.querySelector('.calc-count');
    const totalValue = document.getElementById('total');
    let count = 0;
    let total;

    const iterateResult = () => {
        if (count === total) {
            totalValue.textContent = total;
        } else if (count < total) {
            const a = total - count;
            if (a > 100 && a < 1000) {
                count += 100;
            } else if (a > 1000 && a < 10000) {
                count += 1000;
            } else if (a > 10000) {
                count += 10000;
            } else if (a < 1000 && a > 10) {
                count += 10;
            } else {
                count++;
            }
            totalValue.textContent = count.toString();
            setTimeout(iterateResult, 1);
        } else if (count > total) {
            const a = count - total;
            if (a > 100 && a < 1000) {
                count -= 100;
            } else if (a > 1000 && a < 10000) {
                count -= 1000;
            } else if (a > 10000) {
                count -= 10000;
            } else if (a < 100 && a > 10) {
                count -= 10;
            } else {
                count--;
            }
            totalValue.textContent = count.toString();
            setTimeout(iterateResult, 1);
        }

    };

    const countSum = () => {
        total = 0;
        let countValue = 1;
        let dayValue = 1;
        const typeDataValue = calcType.options[calcType.selectedIndex].dataset.value;
        const typeValue = calcType.options[calcType.selectedIndex].value;
        const squareValue = +calcSquare.value;

        if (typeValue === '0') {
            inputsCalc.forEach(item => {
                item.value = '';
            });
            totalValue.value = 0;
        }
        if (calcCount.value > 1) {
            countValue += (calcCount.value - 1) / 10;
        }

        if (calcDay.value && calcDay.value < 5) {
            dayValue *= 2;
        } else if (calcDay.value && calcDay.value < 10) {
            dayValue *= 1.5;
        }

        if (squareValue && typeDataValue) {
            total = Math.floor(total = price * typeDataValue * squareValue * countValue * dayValue);
        }

        iterateResult();
    };


    handler(calcBlock, 'change', e => {
        const target = e.target;
        if ((target.matches('select')) || (target.matches('input'))) {
            countSum();
        }
    });
};

export default calc;
