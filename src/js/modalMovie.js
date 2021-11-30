// import cardMovieModal from '../templates/card_movie_modal.hbs';
// import cardsModalsMarkup from './markupCardMovie';
// import { onCreateMarkup, normalRatingYearGenres } from './markupCardMovie';
// import Api from './apiFetch';



export default function modalMovie() {

  const refs = {
    movieCards: document.querySelector('.js-cards-movie-list'),
    movieModal: document.querySelector('.lightbox'),
    backdropOverlay: document.querySelector('.lightbox__overlay'),
    movieContent: document.querySelector('.lightbox__content'),
    closeModal: document.querySelector('[data-action="close-lightbox"]'),
    createCardMovie: document.querySelector('.card_modal'),
  };


  refs.movieModal.addEventListener('click', onModalClick);
  refs.movieCards.addEventListener('click', onPictureClick);
  refs.closeModal.addEventListener('click', onCloseModalClick);

  // открытие модалки при клике на картинку из галереи фильмов

  function onPictureClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('card-movie__img')) {
      return;
    }

    refs.movieModal.classList.add('is-open');
    // console.log(modalMarkup(evt.path[3]));
    refs.createCardMovie.innerHTML = '';
    refs.createCardMovie.insertAdjacentHTML('afterbegin', modalMarkup(evt.path[3]));
    
    const buttonAddToWatchet = document.querySelector('.button-watched-modal');
    const buttonAddToQueue = document.querySelector('.button-queue-modal');
    console.log(buttonAddToWatchet);
    buttonAddToWatchet.addEventListener('click', onAddToWatched);
    buttonAddToQueue.addEventListener('click', addToQueue);
    disableScrolling();
  }

  function modalMarkup(el) {
    return `
    <div data-id=${el.dataset.id} class="card_movie">
        <div class="img_movie"><img class="img_movie__card" src="${el.dataset.src}" alt="${el.dataset.title}" alt=""></div>
        <div class="about_movie">
          <h1 class="about_movie__title">${el.dataset.title}${el.dataset.name}</h1>
          
          <table class="about_movie__table">
            <tr class="about_movie__item">
              <td class="about_movie__type">Vote / Votes</td>
              <td><span class="rating">${el.dataset.vote}</span> / <span class="votes">${el.dataset.votes}</span></td>
            </tr>
            <tr class="about_movie__item">
              <td class="about_movie__type">Popularity</td>
              <td>${el.dataset.popularity}</td>
            </tr>
            <tr class="about_movie__item">
              <td class="about_movie__type">Original Title</td>
              <td>${el.dataset.title}${el.dataset.name}</td>
            </tr>
            <tr class="about_movie__item">
              <td class="about_movie__type">Genre</td>
              <td>${el.dataset.genre}</td>
            </tr>
          </table>
    
          <h2 class="about_movie__list">ABOUT</h2>
          <p class="about_movie__text">${el.dataset.overview}</p>
          <div class="modal-button">
            <button id="add-movie" class="button-watched button-watched-modal">add to Watched</button>
            <button id="queue-movie" class="button-queue button-queue-modal">add to queue</button>
          </div>
        </div>
    </div>`;
  }
  // закрывается по кнопке

  function onCloseModalClick() {
    refs.movieModal.classList.remove('is-open');
    refs.movieContent.src = '';
    enableScrolling();
  }

  // при клике на бэкдроп закрывается модалка

  function onModalClick(evt) {
    if (refs.movieModal === evt.target) {
      onCloseModalClick();
      enableScrolling();
    }
  }

  // при клике на ESC закрывается модалка

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      onCloseModalClick();
      enableScrolling();
    }
  });
}
modalMovie();
function onAddToWatched(event) {
 console.log(event.target.closest('article').dataset.id);
    console.log('add to watched');
    
}
function addToQueue() {
  console.log('queueueueue');

}
function disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){
      window.scrollTo(x, y);
    };
}

function enableScrolling(){
  window.onscroll = function () { };
  }