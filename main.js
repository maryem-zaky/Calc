document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.button');
    const display = document.getElementById('display');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.getAttribute('data-value');
            if (value === 'AC') {
                display.textContent = '0';
            } else if (value === 'DE') {
                display.textContent = display.textContent.slice(0, -1) || '0';
            } else if (value === '=') {
                try {
                    display.textContent = eval(display.textContent.replace('×', '*').replace('÷', '/'));
                } catch {
                    display.textContent = 'Error';
                }
            } else {
                if (display.textContent === '0') {
                    display.textContent = value;
                } else {
                    display.textContent += value;
                }
            }
        });
    });
});
