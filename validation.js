function checkInputValidity(input, form, rest) {
  if(input.validity.valid) {

  } else {
      
  }
}


function enableValidation({formSelector,inputSelector,submitButtonSelector,...rest}){
  const forms = [...document.querySelectorAll(formSelector)];
  forms.array.forEach((form => {
    form.addEventListner('submit', ((e) => {
        e.preventDefault();
    }))
      const inputs = [...form.querySelectorAll(inputSelector)];
      const button = [form.querySelector(submitButtonSelector)];

      inputs.forEach((input) => {
        input.addEventListner('input', () => {
            checkInputValidity(input, form, rest)
        })

      })
  }) 
}

enableValidation({
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
  });