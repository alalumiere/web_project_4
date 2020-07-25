function showErrorMessage(input, form, rest) {
  const error = document.querySelector('#' + input.id + '-error');
  const { errorClass, inputErrorClass } = rest;
  error.textContent = input.validationMessage;

  error.classList.add(errorClass);
  input.classList.add(inputErrorClass);
};

function hideErrorMessage(input, form, rest) {
    const error = document.querySelector('#' + input.id + '-error');
    error.classList.remove(rest.errorClass);
    input.classList.remove(rest.inputErrorClass);
  };

function checkInputValidity(input, form, rest) {
  if(input.validity.valid) {
    hideErrorMessage(input, form, rest);
  } else {
    showErrorMessage(input, form, rest);
  };
};

function toggleButtonState(inputs, button, {inactiveButtonClass, ...rest}) {
  const isValid = inputs.every((input) => input.validity.valid)
    if(isValid) {
      button.classList.remove(inactiveButtonClass);
    } else {
        button.classList.add(inactiveButtonClass);
    };
};

function enableValidation({formSelector, inputSelector, submitButtonSelector, ...rest}) {
  const forms = [...document.querySelectorAll(formSelector)];

  forms.forEach((form) => {
    form.addEventListener('submit', ((e) => {
      e.preventDefault()
    }));
 
    const inputs = [...form.querySelectorAll(inputSelector)];
    const button = form.querySelector(submitButtonSelector);

    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        checkInputValidity(input, form, rest);
        toggleButtonState(inputs, button, rest);
      });
    });
    
  });
};

enableValidation({
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "form__submit-button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
  });