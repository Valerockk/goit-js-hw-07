const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const handleName = (event) => {
  nameOutput.textContent =
    event.currentTarget.value === "" ? "незнакомец" : event.currentTarget.value;
};

nameInput.addEventListener("input", handleName);
