/////////Регистрация: Получение и запись данных//////
const regLogin = document.getElementById("regLogin");
const regPas = document.getElementById("regPas");
const regButton = document.getElementById("registerButton");
const regForm = document.getElementById("registerContent");

regForm.addEventListener("submit", (event) => {
  event.preventDefault(); ///предотвращение перезагрузки страницы
  let login = regLogin.value;
  alert(login);
  let password = regPas.value;
  alert(password);

  if (localStorage.getItem(login) !== null) {
    alert("Этот логин уже занят, придумайте другой");
  } else {
    localStorage.setItem(login, password);
  }
  console.log(localStorage);
  regLogin.value = "";
  regPas.value = "";
});

///////Аутентификация при входе в Личный кабинет/////
const signForm = document.getElementById("signForm");
const signLogin = document.getElementById("signLogin");
const signPas = document.getElementById("signPas");

signForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let signLog = signLogin.value;
  let signPassword = signPas.value;

  if (localStorage.getItem(signLog) === signPassword) {
    alert(`Вы успешно зашли ${signLog}!!!`);
  } else {
    alert("Неверный логин или пароль");
  }
  //   signLog.textContent = "";
  signLogin.value = "";
  signPas.value = "";
});
