const editButton = document.querySelector('.profile__info_edit-button');
const closeButton = document.querySelector('.popup__close-button');
const popUp = document.querySelector('.popup');
const form = document.querySelector('.form');
const inputName = document.querySelector('.form__name');
const inputDescription = document.querySelector('.form__description');
const profileName = document.querySelector('.profile__info_name');
const profileDescription = document.querySelector('.profile__info_explorer'); 
const saveButton = document.querySelector('.form__submit-button')




function togglepopUp() {
  popUp.classList.toggle('popup_open');
}

  editButton.addEventListener('click', togglepopUp)
  
  closeButton.addEventListener('click', () => {
    togglepopUp();

    if(popUp.classList.includes('popup_open')) {
    
      inputName.value = profileName.textContent;
      inputDescription.value = profileDescription.textContent;
    
    }
    });

form.addEventListener('submit', (e) => {
  e.preventDefault();

  profileName.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;

  togglepopUp(); 

});