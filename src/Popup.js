export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  open() {
    this._popupElement.classList.add('.popup_open');
    document.addEventListener('keyup', this._handleEscClose);
  }
  close() {
    this._popupElement.classList.remove('.popup_open');
    document.removeEventListener('keyup', this._handleEscClose);
  }
  _handleEscClose(e) {
    if(e.which == 27) {
      this.close();
    }
    // if (e.key === "Escape") {
    //     const openedModal = document.querySelector('.popup_open');
    //     closeModal(openedModal);
    //   }
  }
  setEventListeners() {
    this._popupElement.addEventListener('click', (e) => {
        if(e.target.classList.contains('popup_close') || !e.target.closest('popup')) {
          this.close();
        }
    })
    // if (e.type === "click" && e.target.classList.contains("popup_open)) {
    //     closeModal(e.target);
    //   }
  }
}

