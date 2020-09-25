import '../pages/index.css';
import FormValidator from './FormValidator.js';
import Card from './Card.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import Section from './Section.js';


//wrappers
// const editProfileModal = document.querySelector('.popup_type_edit-profile');
// const addElementModal = document.querySelector('.popup_type_add-element');
// // const imageModal = document.querySelector('.popup_type_image');
// const editProfileform = editProfileModal.querySelector('.form');
// const addElementForm = addElementModal.querySelector('.form');

//Buttons and other DOM Elements
// const profileEditButton = document.querySelector('.profile__edit-button');
// const profileAddButton = document.querySelector('.profile__add-button');
// const profileCloseButton = editProfileModal.querySelector('.popup__close-button');
// const closeImageButton = imageModal.querySelector('.popup__close-button');
// const closeAddElementButton = addElementModal.querySelector('.popup__close-button');
// const addElementSubmitButton = addElementForm.querySelector('.form__submit-button');
// const editProfileSubmitButton = editProfileform.querySelector('.form__submit-button');

//Form data
// const inputName = document.querySelector('.form__name');
// const inputDescription = document.querySelector('.form__description');
// const profileName = document.querySelector('.profile__name');
// const profileDescription = document.querySelector('.profile__explorer');
// const addImage = addElementModal.querySelector(".form__description");
// const addTitle = addElementModal.querySelector(".form__name");
// const list = document.querySelector('.element');

const cardList = new Section({

})


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
const editPopup = new PopupWithForm('.popup_type_edit-profile');
const addCardPopup = new PopupWithForm('.popup_type_add-element');
const imageModal = new PopupWithImage('.popup_type_image');

editPopup.setEventListeners();
addCardPopup.setEventListeners();
imageModal.setEventListeners();

const newSection = new Section({
  data: items,
  renderer: (item) => {
      const card = new Card(item, '.element__card')
      const cardElement = card.generateCard();
      defaultCardList.addItem(cardElement);
  }
}, elementsContainer);


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

// editProfileSubmitButton.addEventListener('click', () => {
//   closeModal(editProfileModal);
// })

// addElementSubmitButton.addEventListener('click', () => {
//   closeModal(addElementModal);
// })

// profileEditButton.addEventListener('click', () => {
//   openModal(editProfileModal);
// })

// profileCloseButton.addEventListener('click', () => {
//   closeModal(editProfileModal);

//   inputName.value = profileName.textContent;
//   inputDescription.value = profileDescription.textContent;
// })

// editProfileform.addEventListener('submit', (e) => {
//   e.preventDefault(e);

//   profileName.textContent = inputName.value;
//   profileDescription.textContent = inputDescription.value;

//   closeModal(editProfileform);
// })

// profileAddButton.addEventListener('click', () => {
//   openModal(addElementModal);
// })

// closeAddElementButton.addEventListener('click', () => {
//   closeModal(addElementModal);
// })

// closeImageButton.addEventListener('click', () => {
//   closeModal(imageModal);
// })

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


const newCard = (data) => {
  const card = new Card(data, '.element__template');
  list.prepend(card.generateCard());
  
}

initialCards.forEach((data) => newCard(data));

addElementForm.addEventListener('submit', () => {
  newCard({
    name: addTitle.value,
    link: addImage.value
  });

  closeModal(addElementForm);

})