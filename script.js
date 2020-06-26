const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const popUp = document.querySelector('.popup');
const form = document.querySelector('.form');
const inputName = document.querySelector('.form__name');
const inputDescription = document.querySelector('.form__description');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__explorer');

function togglepopUp() {
  popUp.classList.toggle('popup_open');

}

  editButton.addEventListener('click', togglepopUp)
  
  closeButton.addEventListener('click', () => {
    togglepopUp();

});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  profileName.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;

  togglepopUp(); 

});