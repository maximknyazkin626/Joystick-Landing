let modalClose = document.getElementById("modalClose");
let formModal = document.getElementById("formModal");
let feedback = document.getElementById("feedback");

feedback.addEventListener("submit", (e) => {
  e.preventDefault();
  formModal.classList.remove("hide");
});

modalClose.onclick = function () {
  formModal.classList.add("hide");
};
