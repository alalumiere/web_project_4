import Popup from './Popup.js';

class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._form = this._popupForm.querySelector('.popup__form')
  }
  close(link, caption) {
    this._popupElement.querySelector('.figure__image').src = link;
    this._popupElement.querySelector('.figure__figcaption').src = caption;
    super.close();
  }
  _getInputValues() {
    this._inputValues = Array.from(this._form.querySelectorAll(".popup__input"));
    this._formValues = {};
    this._inputValues.forEach((input) => this._formValues[input.name] = input.value);

    return this._formValues;
  }

  setEventListeners() {
    this._popupElement.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleSubmitForm(this._getInputValues());
      this.close();
    })
    super.setEventListeners();
}


  setSubmitAction(action) {
    this._handleSubmitForm = action;
  }
}

export default PopupWithForm;