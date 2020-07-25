//wrapers
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

//Form data
const inputName = document.querySelector('.form__name');
const inputDescription = document.querySelector('.form__description');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__explorer');
const addImage = addElementModal.querySelector(".form__description");
const addTitle = addElementModal.querySelector(".form__name");

//Toggle popups
function togglePopUp(modal) {
  modal.classList.toggle('popup_open');
}

function outsideClick(closePop) {
  
  closePop.addEventListener('click', (e) => {
    if (e.target.classList.contains("popup")) {
      closePop.classList.remove("popup_open");

    }
  });

  window.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
      closePop.classList.remove("popup_open");
    }
  })
};


profileEditButton.addEventListener('click', () => {
  togglePopUp(editProfileModal);
  outsideClick(editProfileModal);
})
  
  profileCloseButton.addEventListener('click', () => {
    togglePopUp(editProfileModal); 
 
    inputName.value = profileName.textContent;
    inputDescription.value = profileDescription.textContent;
  
  });

  editProfileform.addEventListener('submit', (e) => {
  e.preventDefault();

  profileName.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;

  togglePopUp(editProfileModal); 
  
});

profileAddButton.addEventListener('click', () => {
  togglePopUp(addElementModal);
  outsideClick(addElementModal);
});

closeAddElementButton.addEventListener('click', () => {
  togglePopUp(addElementModal);
  
});

closeImageButton.addEventListener('click', () => {
  togglePopUp(imageModal);
 
});

const initialCards = [
  {
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
];

const list = document.querySelector('.element');
const elementTemplate = document.querySelector('.element__template').content.querySelector('.element__card');

function createCard(data) {

  const cardElement = elementTemplate.cloneNode(true);
  const elementImage = cardElement.querySelector('.element__img');
  const elementTitle = cardElement.querySelector('.element__title');
  const elementLikeButton = cardElement.querySelector('.element__like-button');
  const elementDeleteButton = cardElement.querySelector('.element__delete-button');
  const figureImage = imageModal.querySelector('.figure__image');
  const figureCaption = imageModal.querySelector('.figure__figcaption');

  elementTitle.textContent = data.name;
  elementImage.style.backgroundImage = 'url(' + data.link + ')';

  elementDeleteButton.addEventListener('click', () => {
    cardElement.remove()
  });

  elementLikeButton.addEventListener('click', () => {
    elementLikeButton.classList.toggle('element__like-button_filled');
 });

  elementImage.addEventListener('click', () => {
    togglePopUp(imageModal);
    outsideClick(imageModal);
    figureImage.src = `${data.link}`;
    figureImage.alt = "";
    figureCaption.textContent = data.name;
    });
  
list.prepend(cardElement);  
};

initialCards.forEach((data) => createCard(data));

addElementSubmitButton.addEventListener('click', () => {  

  createCard({name: addTitle.value, link: addImage.value});

  togglePopUp(addElementModal);
});  