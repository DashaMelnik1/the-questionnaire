const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
    // Предотвращает действие браузера по умолчанию. В данном случае — отправку формы
    // https://learn.javascript.ru/default-browser-action
    event.preventDefault();

    // Здесь твой код
    const name = document.querySelector('#name');
    const secondName = document.querySelector('#secondName');
    const email = document.querySelector('#email');
    const phone = document.querySelector('#phone');
    const agree = document.querySelector('#agree');

    const form = document.querySelector('.form');

    const sendButton = document.querySelector('#button');

    const darkening = document.querySelector('.darkening');
    const window = document.querySelector('.window');
    const text = document.querySelector('.text');
    const clickClose = document.querySelector('#close');


    sendButton.addEventListener('click', () => {
        fetch(`https://polinashneider.space/user`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer: DashaMelnik1'
                },
                body: JSON.stringify({
                    "name": name.value,
                    "secondName": secondName.value,
                    "phone": phone.value,
                    "email": email.value,
                    "agree": agree.checked = true
                }),
            })
            .then((result) => {
                return result.json();
            })
            .then((data) => {
                console.log(data);
                darkening.classList.add('content');
                window.classList.add('content');
                text.textContent = data.message;
                form.reset();

            })
            .catch((err) => {
                console.log(err);
                darkening.classList.add('content');
                window.classList.add('content');
                text.textContent = data.message;
            })
    })
    clickClose.addEventListener('click', () => {
        darkening.classList.remove('content');
        window.classList.remove('content');
    })
});