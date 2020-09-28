import openModal from "./Utils.js";

const imageModal = document.querySelector(".popup_type_image");
const figureImage = imageModal.querySelector(".figure__image");
const figureCaption = imageModal.querySelector(".figure__figcaption");

class Card {
  constructor({ data, handleCardClick }, elementSelector) {
    this._name = data.name;
    this._link = data.link;
    this._elementSelector = elementSelector;
    this._handleCardClick = handleCardClick;
  }

  _getCardTemplate() {
    const elementTemplate = document
      .querySelector(this._elementSelector)
      .content.querySelector(".element__card");
    return elementTemplate;
  }

  _handleLikeIcon = () => {
    const elementLikeButton = this._card.querySelector(".element__like-button");
    elementLikeButton.classList.toggle("element__like-button_filled");
  };

  // _handleImagePreview = () => {
  //   openModal(imageModal);
  //   figureImage.src = `${this._link}`;
  //   figureImage.alt = "";
  //   figureCaption.textContent = this._name;
  // }

  _handelDeleteCard = () => {
    this._card.remove();
    this._card = null;
  };

  _setEventListeners() {
    const elementImage = this._card.querySelector(".element__img");
    const elementLikeButton = this._card.querySelector(".element__like-button");
    const elementDeleteButton = this._card.querySelector(
      ".element__delete-button"
    );

    elementImage.addEventListener("click", () => this._handleCardClick());
    elementLikeButton.addEventListener("click", this._handleLikeIcon);
    elementDeleteButton.addEventListener("click", this._handelDeleteCard);
  }

  generateCard() {
    this._card = this._getCardTemplate().cloneNode(true);
    const elementImage = this._card.querySelector(".element__img");
    const elementTitle = this._card.querySelector(".element__title");

    elementTitle.textContent = this._name;
    elementImage.style.backgroundImage = "url(" + this._link + ")";

    this._setEventListeners();

    return this._card;
  }
}

export default Card;
