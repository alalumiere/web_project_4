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
    
// export {openModal};