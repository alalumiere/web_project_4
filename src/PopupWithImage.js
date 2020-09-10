import Popup from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }
  open(link, caption) {
    this._popupElement.querySelector('.figure__image').src = link;
    this._popupElement.querySelector('.figure__figcaption').src = caption;
    super.open();
  }
}

