import FormValidator from './FormValidator.js';
import Card from './Card.js';

//wrappers
const editProfileModal = document.querySelector('.popup_type_edit-profile');
const addElementModal = document.querySelector('.popup_type_add-element');
const imageModal = document.querySelector('.popup_type_image');
const editProfileform = editProfileModal.querySelector('.form');
const addElementForm = addElementModal.querySelector('.form');

//Buttons and other DOM Elements
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const profileCloseButton = editProfileModal.querySelector('.popup__close-button');
const closeImageButton = imageModal.querySelector('.popup__close-button');
const closeAddElementButton = addElementModal.querySelector('.popup__close-button');
const addElementSubmitButton = addElementForm.querySelector('.form__submit-button');
const editProfileSubmitButton = editProfileform.querySelector('.form__submit-button');

//Form data
const inputName = document.querySelector('.form__name');
const inputDescription = document.querySelector('.form__description');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__explorer');
const addImage = addElementModal.querySelector(".form__description");
const addTitle = addElementModal.querySelector(".form__name");
const list = document.querySelector('.element');
// const elementTemplate = document.querySelector('.element__template').content.querySelector('.element__card');

const defaultConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "form__submit-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
}

const editFormValidator = new FormValidator(defaultConfig, editProfileform);
const addFormValidator = new FormValidator(defaultConfig, addElementForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();


// Open and Close popups
function escapeToCloseModal(e) {
  if (e.key === "Escape") {
    const openedModal = document.querySelector('.popup_open');
    closeModal(openedModal);
  }
}

function clickToCloseModal(e) {
  if (e.type === "click" && e.target.classList.contains("popup_open")) {
    closeModal(e.target);
  }
}

function openModal(modal) {
  modal.classList.add('popup_open');
  document.addEventListener('keyup', escapeToCloseModal);
  document.addEventListener('click', clickToCloseModal);
}

function closeModal(modal) {
  modal.classList.remove('popup_open');
  document.removeEventListener('keyup', escapeToCloseModal);
  document.removeEventListener('click', clickToCloseModal);
}

editProfileSubmitButton.addEventListener('click', () => {
  closeModal(editProfileModal);
})

addElementSubmitButton.addEventListener('click', () => {
  closeModal(addElementModal);
})

profileEditButton.addEventListener('click', () => {
  openModal(editProfileModal);
})

profileCloseButton.addEventListener('click', () => {
  closeModal(editProfileModal);

  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
})

editProfileform.addEventListener('submit', (e) => {
  e.preventDefault(e);

  profileName.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;

  closeModal(editProfileform);
})

profileAddButton.addEventListener('click', () => {
  openModal(addElementModal);
})

closeAddElementButton.addEventListener('click', () => {
  closeModal(addElementModal);
})

closeImageButton.addEventListener('click', () => {
  closeModal(imageModal);
})

const initialCards = [{
    name: "Minnewaska",
    link: "./images/minnewaska.jpg"
  },
  {
    name: "Glacier Bay",
    link: "./images/glacierbay.jpg"
  },
  {
    name: "Angels Landing",
    link: "./images/angelslanding.jpg"
  },
  {
    name: "Guadalupe",
    link: "./images/guadalupemountains.jpg"
  },
  {
    name: "Badlands",
    link: "./images/badlands.jpg"
  },
  {
    name: "Point Reyes",
    link: "./images/pointreyes.jpg"
  }
]

//Create a New Card
// function createCard(data) {

//   const cardElement = elementTemplate.cloneNode(true);
//   const elementImage = cardElement.querySelector('.element__img');
//   const elementTitle = cardElement.querySelector('.element__title');
//   const elementLikeButton = cardElement.querySelector('.element__like-button');
//   const elementDeleteButton = cardElement.querySelector('.element__delete-button');
//   const figureImage = imageModal.querySelector('.figure__image');
//   const figureCaption = imageModal.querySelector('.figure__figcaption');

//   elementTitle.textContent = data.name;
//   elementImage.style.backgroundImage = 'url(' + data.link + ')';

//   elementDeleteButton.addEventListener('click', () => {
//     cardElement.remove();
//   })

//   elementLikeButton.addEventListener('click', () => {
//     elementLikeButton.classList.toggle('element__like-button_filled');
//   })

//   elementImage.addEventListener('click', () => {
//     openModal(imageModal);
//     figureImage.src = `${data.link}`;
//     figureImage.alt = "";
//     figureCaption.textContent = data.name;
//   })
//   return cardElement;
// }

const newCard = (data) => {
  const card = new Card(data, '.element__template');
  list.prepend(card.generateCard());
  // list.prepend(createCard(data));
}

initialCards.forEach((data) => newCard(data));

addElementForm.addEventListener('submit', () => {
  newCard({
    name: addTitle.value,
    link: addImage.value
  });

  closeModal(addElementForm);

})