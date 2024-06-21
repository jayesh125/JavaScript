let input = document.getElementById('input');
let buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.textContent;

        console.log(buttonText);

        if (buttonText === 'C') {
            input.textContent = '';
        } else if (buttonText === '<') {
            input.textContent = input.textContent.slice(0, -1);
        } else if (buttonText === '=') {
            try {
                input.textContent = eval(input.textContent);
            } catch (error) {
                input.textContent = 'Error';
            }
        } else {
            input.textContent += buttonText;
        }
        input.scrollLeft = input.scrollWidth;
    });
});
