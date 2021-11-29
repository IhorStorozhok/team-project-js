export default {
  // =====================Карточка фильма=========================
  cardsMovieList: document.querySelector('.js-cards-movie-list'),
  searchForm: document.querySelector('.js-movies-search'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),


  
  // =====================Спиннер=================================
  preloader: document.querySelector('.preloader'),
  // =============================================================
    
  textInputError: document.querySelector('.js-text-input-error'),

  homeLink: document.querySelector('.home-link'),
  libraryLink: document.querySelector('.library-link'),
  libraryHeader: document.querySelector('.js-library__header'),
  homeHeader: document.querySelector('.js-home__header'),
  libraryHomeLink: document.querySelector('.library-home__link'),
  // genreSearchLink: document.querySelectorAll('.js-genres'),
  filmoteka: document.querySelector('.logo__text'),
  libraryFilmoteka: document.querySelector('.js-library__text'),
  icon: document.querySelector('.icon-style'),

  libraryIcon: document.querySelector('.filmoteka'),

  //=================================
 

  libraryIcon:document.querySelector('.filmoteka'),


  // buttonAddWatched: document.querySelector('.')
  buttonWatchedRender: document.getElementById('library-watched__button'),
  buttonQueuedRender: document.getElementById('library-queued__button'),
  buttonAddToWatchet: document.querySelector('.button-watched'),
  buttonAddToQueue: document.querySelector('.button-queue'),

   autenticatorButton: document.querySelector('.authenticator-thumb'),
  autenticatorModal: document.querySelector('.lightbox__aut'),
  autenticatorModalClose: document.querySelector('.autenticator-close'),
  autenticatorForm: document.getElementById('signin'),

  autenticatorUser: document.getElementById('user'),
  autenticatorPassword: document.getElementById('pass'),

};
