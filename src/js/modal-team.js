import refs from './refs';
const refsTeam = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  backdropModalTeam: document.querySelector('.backdrop-team'),
};

function onModalTeamBtn() {
  refsTeam.openModalBtn.addEventListener('click', toggleModal);
  refsTeam.closeModalBtn.addEventListener('click', toggleModal);
  refsTeam.backdropModalTeam.addEventListener('click', onBackdropClick);
}

function toggleModal() {
  refsTeam.modal.classList.toggle('visually-hidden');
}

//закрытие при нажатии на Esc
document.addEventListener('keydown', e => {
  if (e.code === 'Escape') {
    toggleModal();
  }
});

//закрытие при нажатии на backdrop

function onBackdropClick(evt) {
  if (refsTeam.backdropModalTeam === evt.target) {
    toggleModal();
  }
}

onModalTeamBtn();
