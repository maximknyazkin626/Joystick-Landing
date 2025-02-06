let modalClose = document.getElementById("modalClose");
let formModal = document.getElementById("formModal");
let feedback = document.getElementById("feedback");
let modalText = document.querySelector(".modalText");
let inputName = document.getElementById("inputName");
let inputNum = document.getElementById("inputNum");

/////Отправление формы и появление модального окна
feedback.addEventListener("submit", (e) => {
  e.preventDefault();
  formModal.classList.remove("hide");
  let name = document.getElementById("inputName").value;
  modalText.textContent = `Мы обязательно перезвоним тебе, ${name}!`;
});

//////Исчезание модального окна
formModal.onclick = () => {
  formModal.classList.add("hide");
  inputName.value = "";
  inputNum.value = "";
};

modalClose.onclick = function () {
  formModal.classList.add("hide");
  inputName.value = "";
  inputNum.value = "";
};

//////Подсказка для номера телефона
inputNum.addEventListener("focus", () => {
  inputNum.placeholder = "+7-(9**)-***-**-**";
});

//////Открытие бургер-меню
let burgerLogo = document.getElementById("burgerLogo");
let burger = document.getElementById("burger");

burgerLogo.onclick = () => {
  burger.style.display = "flex";
};

burger.onclick = () => {
  burger.style.display = "none";
};

//////Валидация на ввод имени(проверка что имя не пустое)
function validationEmpty(event) {
  let input = event.target;
  if (input.value.trim() === "") {
    alert("Нет уж, введи нормальное имя пожалуйста");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  inputName.addEventListener("blur", validationEmpty);
});
