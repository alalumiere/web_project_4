//wrapers
const editProfileModal = document.querySelector('.popup__type_edit-profile');
const addElementModal = document.querySelector('.popup__type_add-element');
const imageModal = document.querySelector('.popup__type_image');
const editProfileform = editProfileModal.querySelector('.form');
const addElementForm = addElementModal.querySelector('.form');

//Buttons and other DOM Elements
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const profileCloseButton = editProfileModal.querySelector('.popup__close-button');
const closeImageButton = imageModal.querySelector('.popup__close-button');
const addElementButtonOpen = document.querySelector('.popup__type_add-element');
const closeAddElementButton = addElementModal.querySelector('.popup__close-button');
const addElementSubmitButton = addElementForm.querySelector('.form__submit-button');

//Form data
const inputName = document.querySelector('.form__name');
const inputDescription = document.querySelector('.form__description');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__explorer');
const addImage = addElementModal.querySelector(".form__description");
const addTitle = addElementModal.querySelector(".form__name");


function togglepopUp(modal) {
  modal.classList.toggle('popup_open');
}

profileEditButton.addEventListener('click', () => {
  togglepopUp(editProfileModal);
})
  
  profileCloseButton.addEventListener('click', () => {
    togglepopUp(editProfileModal);

<<<<<<< HEAD
});
=======
    if(editProfileModal.classList.includes('editProfileModal')) {
    
      inputName.value = profileName.textContent;
      inputDescription.value = profileDescription.textContent;
    }
  });
>>>>>>> develop

  editProfileform.addEventListener('submit', (e) => {
  e.preventDefault();

  profileName.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;

  togglepopUp(editProfileModal); 
});

profileAddButton.addEventListener('click', () => {
  togglepopUp(addElementModal);
});

addElementSubmitButton.addEventListener('click', () => {  

  createCard({name: addTitle.value, link: addImage.value});

  togglepopUp(addElementModal);
});

closeAddElementButton.addEventListener('click', () => {
  togglepopUp(addElementModal);
});

closeImageButton.addEventListener('click', () => {
  togglepopUp(imageModal);
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

initialCards.forEach((data) => {

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
    elementDeleteButton.closest(".todo__item");
    cardElement.remove()
  });

  elementLikeButton.addEventListener('click', (evt) => {
    elementLikeButton.classList.toggle('element__like-button_filled');
 });

  elementImage.addEventListener('click', () => {
    togglepopUp(imageModal);
    figureImage.src = `${data.link}`;
    figureCaption.textContent = data.name;
    });

  list.prepend(cardElement);  
});

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
    elementDeleteButton.closest(".todo__item");
    cardElement.remove()
  });

  elementLikeButton.addEventListener('click', (evt) => {
    elementLikeButton.classList.toggle('element__like-button_filled');
 });

  elementImage.addEventListener('click', () => {
    togglepopUp(imageModal);
    figureImage.src = `${data.link}`;
    figureCaption.textContent = data.name;
    });

    list.prepend(cardElement);   
};