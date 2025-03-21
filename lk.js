/////////Регистрация: Получение и запись данных//////
const regLogin = document.getElementById('regLogin');
const regPas = document.getElementById('regPas');
const regButton = document.getElementById('registerButton');
const regForm = document.getElementById('registerContent');

regForm.addEventListener('submit', event => {
    event.preventDefault(); ///предотвращение перезагрузки страницы
    let login = regLogin.value;
    alert(login);
    let password = regPas.value;
    alert(password);
    localStorage.setItem(login, password);
    console.log(localStorage);
    login.value = '';
    password.value = '';
})


///////Аутентификация при входе в Личный кабинет/////
const signForm = document.getElementById('signForm');
const signLogin = document.getElementById('signLogin');
const signPas = document.getElementById('signPas');

signForm.addEventListener('submit', event => {
    event.preventDefault();


    let signLog = signLogin.value;
    let signPassword = signPas.value;
    let regPasword = localStorage.getItem('123');
    let regLog = localStorage.key(0);
    if (signLog === regLog && signPassword === regPasword) {
        alert(`Вы успешно зашли ${signLog}!!!`);
    } else {
        alert('Неверный логин или пароль');
    }
    signLog.textContent = '';
    signPassword.textContent = '';
})
