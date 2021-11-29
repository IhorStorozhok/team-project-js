import refs from './refs';

//auth modal opend

function onAutenticatorButton() {
  refs.autenticatorModal.classList.toggle('visually-hidden');
  console.log(refs.autenticatorForm);
}

refs.autenticatorButton.addEventListener('click', onAutenticatorButton);
refs.autenticatorModalClose.addEventListener('click', onAutenticatorButton);

refs.autenticatorForm.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault;
}
