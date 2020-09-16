import {openModal} from "./Utils.js";
import PopupWithImage from "./PopupWithImage.js";

const imageModal = document.querySelector('.popup_type_image');
const figureImage = imageModal.querySelector('.figure__image');
const figureCaption = imageModal.querySelector('.figure__figcaption');

// function escapeToCloseModal(e) {
//   if (e.key === "Escape") {
//     const openedModal = document.querySelector('.popup_open');
//     closeModal(openedModal);
//   }
// }

// function clickToCloseModal(e) {
//   if (e.type === "click" && e.target.classList.contains("popup_open")) {
//     closeModal(e.target);
//   }
// }

// function openModal(modal) {
//   modal.classList.add('popup_open');
//   document.addEventListener('keyup', escapeToCloseModal);
//   document.addEventListener('click', clickToCloseModal);
// }

// function closeModal(modal) {
//   modal.classList.remove('popup_open');
//   document.removeEventListener('keyup', escapeToCloseModal);
//   document.removeEventListener('click', clickToCloseModal);
// }

class Card {
  constructor({data, handelCardClick}, elementSelector) {
    this._name = data.name;
    this._link = data.link;
    this._elementSelector = elementSelector;
    this._handelCardClick = handelCardClick;
  }


  _getCardTemplate() {
    const elementTemplate = document
    .querySelector(this._elementSelector)
    .content
    .querySelector('.element__card')
    .cloneNode(true);
    
    return elementTemplate;
  }

  _handleLikeIcon = () => {
    const elementLikeButton = this._card.querySelector('.element__like-button');
    elementLikeButton.classList.toggle('element__like-button_filled');
  }

  _handleImagePreview = () => {
    openModal(imageModal);
    figureImage.src = `${this._link}`;
    figureImage.alt = "";
    figureCaption.textContent = this._name;
  }

  _handelDeleteCard = () => {
  this._card.remove();
  this._card = null;
  }

  _setEventListeners() {
    const elementImage = this._card.querySelector('.element__img');
    const elementLikeButton = this._card.querySelector('.element__like-button');
    const elementDeleteButton = this._card.querySelector('.element__delete-button');

    elementImage.addEventListener('click', this._handleImagePreview);
    elementLikeButton.addEventListener('click', this._handleLikeIcon);
    elementDeleteButton.addEventListener('click', this._handelDeleteCard);
  }

  generateCard() {
    this._card = this._getCardTemplate().cloneNode(true);
    const elementImage = this._card.querySelector('.element__img');
    const elementTitle = this._card.querySelector('.element__title');

    elementTitle.textContent = this._name;
    elementImage.style.backgroundImage = 'url(' + this._link + ')';

    this._setEventListeners();

    return this._card;
  }
}

export default Card;



// function createCard(data) {

//     const cardElement = elementTemplate.cloneNode(true);
//     const elementImage = cardElement.querySelector('.element__img');
//     const elementTitle = cardElement.querySelector('.element__title');
//     const elementLikeButton = cardElement.querySelector('.element__like-button');
//     const elementDeleteButton = cardElement.querySelector('.element__delete-button');
//     const figureImage = imageModal.querySelector('.figure__image');
//     const figureCaption = imageModal.querySelector('.figure__figcaption');

//     elementTitle.textContent = data.name;
//     elementImage.style.backgroundImage = 'url(' + data.link + ')';

//     elementDeleteButton.addEventListener('click', () => {
//       cardElement.remove();
//     })

//     elementLikeButton.addEventListener('click', () => {
//       elementLikeButton.classList.toggle('element__like-button_filled');
//     })

//     elementImage.addEventListener('click', () => {
//       openModal(imageModal);
//       figureImage.src = `${data.link}`;
//       figureImage.alt = "";
//       figureCaption.textContent = data.name;
//     })
//     return cardElement;
//   }