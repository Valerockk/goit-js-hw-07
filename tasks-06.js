const textInput = document.querySelector("#validation-input");

const validationText = (event) => {
  const validLength = Number(textInput.getAttribute("data-length"));
  const textLength = Number(event.currentTarget.value.length);

  if (validLength === textLength) {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
    return;
  }
  textInput.classList.remove("valid");
  textInput.classList.add("invalid");
};

textInput.addEventListener("blur", validationText);
