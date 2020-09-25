import Popup from './Popup.js';

class PopupWithForm extends Popup {
  constructor({popupSelector, formSubmit}) {
    super(popupSelector);
    this._formSubmit = formSubmit;
  }
  _getInputValues() {
    this._inputs = this._popupElement.quarySelectorAll('.popup__input');
    this._formParameters = {};
    this._inputs.forEach((input) => (this._formParameters[input.name] = input.value));
    return this._formParameters;
  }
  setEventListeners() {
    this._popupElement.addEventListener('submit', (e) => {
      e.preventDefault();

      this._formSubmit(this._getInputValues());
      this.close();
    });
    super.setEventListeners();
  }

  close() {
    const addElementSelector = this._popupElement.quarySelector('.popup_type_add-element');
    addElementSelector.reset();
    super.close();
  }
}

export default PopupWithForm;