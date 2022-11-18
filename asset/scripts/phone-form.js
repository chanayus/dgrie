const phoneInput = document.querySelector("#phone-number-input");

phoneInput.addEventListener("keyup", () => {
  phoneInput.value = phoneInput.value.replace(/[^\d]/, "");
});
