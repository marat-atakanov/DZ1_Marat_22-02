const emailRegExp = /^[A-Za-z0-9._]+@[A-Za-z]+\.([A-Za-z]+)*$/;
const passwordRegExp = /\w{4,}/;

const email = document.querySelector('#email');
const password = document.querySelector('#password');
const enterButton = document.querySelector('button');
const check = document.querySelector('#check');

enterButton.addEventListener('click', () => {
    if (emailRegExp.test(email.value) && passwordRegExp.test(password.value)) {
        check.innerText = 'Valid';
        check.style.color = 'darkcyan'
    } else {
        check.innerText = 'Invalid login or password';
        check.style.color = 'darkcyan'
    }

})

