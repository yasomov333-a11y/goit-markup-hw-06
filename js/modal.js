const orderButton = document.querySelector(".order-button");
const modalBackdrop = document.getElementById("modal");
const modalCloseBtn = document.querySelector(".modal-close-btn");

function openModal() {
  modalBackdrop.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalBackdrop.classList.remove("is-open");
  document.body.style.overflow = "";
}

orderButton.addEventListener("click", openModal);
modalCloseBtn.addEventListener("click", closeModal);

modalBackdrop.addEventListener("click", (event) => {
  if (event.target === modalBackdrop) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modalBackdrop.classList.contains("is-open")) {
    closeModal();
  }
});
