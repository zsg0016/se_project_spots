const config = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit-btn",
  inactiveButtonClass: "form__submit-btn_disabled",
  inputErrorClass: "form__input-error",
  errorClass: "form__error_visible",
};

const resetValidation = (formElement) => {
  const inputErrorList = Array.from(
    formElement.querySelectorAll(".form__error-message")
  );
  inputErrorList.forEach((errorElement) => {
    errorElement.textContent = "";
    errorElement.classList.remove(config.errorClass);
  });

  const inputList = Array.from(formElement.querySelectorAll(".form__input"));
  inputList.forEach((inputElement) => {
    inputElement.classList.remove(config.inputErrorClass);
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, submitBtn, config) => {
  if (hasInvalidInput(inputList)) {
    submitBtn.classList.add(config.inactiveButtonClass);
    submitBtn.disabled = true;
  } else {
    submitBtn.classList.remove(config.inactiveButtonClass);
    submitBtn.disabled = false;
  }
};

const checkInputValidity = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  if (!inputElement.validity.valid) {
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(config.errorClass);
    inputElement.classList.add(config.inputErrorClass);
  } else {
    errorElement.classList.remove(config.errorClass);
    inputElement.classList.remove(config.inputErrorClass);
  }
};

const setEventListeners = (formElement, config) => {
  const submitBtn = formElement.querySelector(config.submitButtonSelector);
  submitBtn.classList.add(config.inactiveButtonClass);
  const inputList = Array.from(
    formElement.querySelectorAll(config.inputSelector)
  );
  toggleButtonState(inputList, submitBtn, config);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(inputList, submitBtn, config);
    });
  });
};

function enableValidation(config) {
  const formList = document.querySelectorAll(config.formSelector);
  formList.forEach((formElement) => {
    setEventListeners(formElement, config);
  });
}

enableValidation(config);
