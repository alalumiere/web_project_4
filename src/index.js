import "../pages/index.css";
import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import Section from "./Section.js";
import UserInfo from "./UserInfo.js";

const list = document.querySelector(".element");

const forms = [...document.querySelectorAll(".popup__form")];

const editUserInfo = new UserInfo()



forms.forEach((form) => {
  const validatedForm = new FormValidator(
    {
      formSelector: ".popup__form",
      inputSelector: ".popup__input",
      submitButtonSelector: ".popup__button",
      inactiveButtonClass: "form__submit-button_disabled",
      inputErrorClass: "popup__input_type_error",
      errorClass: "popup__error_visible",
    },
    form
  );
  validatedForm.enableValidation();
});

// Open and Close popups
const editPopup = new PopupWithForm({
  popupSelector: ".popup_type_edit-profile",
});
const addCardPopup = new PopupWithForm({
  popupSelector: ".popup_type_add-element",
});
const imageModal = new PopupWithImage(".popup_type_image");

editPopup.setEventListeners();
addCardPopup.setEventListeners();
imageModal.setEventListeners();


const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');

// const profileCloseButton = editProfileModal.querySelector('.popup__close-button');


profileEditButton.addEventListener("click", () => {
  editPopup.open();
})

profileAddButton.addEventListener("click", () => {
  addCardPopup.open();
})

const initialCards = [
  {
    name: "Minnewaska",
    link: "./images/minnewaska.jpg",
  },
  {
    name: "Glacier Bay",
    link: "./images/glacierbay.jpg",
  },
  {
    name: "Angels Landing",
    link: "./images/angelslanding.jpg",
  },
  {
    name: "Guadalupe",
    link: "./images/guadalupemountains.jpg",
  },
  {
    name: "Badlands",
    link: "./images/badlands.jpg",
  },
  {
    name: "Point Reyes",
    link: "./images/pointreyes.jpg",
  },
];

const newSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, ".element__template");
      const cardElement = card.generateCard();
      newSection.addItem(cardElement);
    },
    handleCardClick: (data) => {
      imageModal.open(data);
    },

  },
  list
);

newSection.renderer();