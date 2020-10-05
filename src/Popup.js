class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    console.log(popupSelector);
  }

  open() {
    this._popupElement.classList.add("popup_open");
    document.addEventListener("keyup", this._handleEscClose);
  }
  close() {
    this._popupElement.classList.remove("popup_open");
    document.removeEventListener("keyup", this._handleEscClose);
  }
  _handleEscClose(e) {
    if (e.key === "Escape") {
      this.close();
    }
  }
  setEventListeners() {
    this._popupElement.addEventListener("click", (e) => {
      if (
        e.target.classList.contains(".popup__close-button") ||
        !e.target.closest(".popup")
      ) {
        this.close();
      }
    });
  }

  // setEventListeners() {
  //   this._popupElement.addEventListener = (e) => {
  //     if (e.type === "click" && e.target.classList.contains("popup_open")) {
  //       closeModal(e.target);
  //     }
  //   };
  // }
}

export default Popup;
