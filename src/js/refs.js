export default {
  // =====================Карточка фильма=========================
  cardsMovieList: document.querySelector('.js-cards-movie-list'),
  searchForm: document.querySelector('#search-form'),
  searchForm: document.querySelector('.js-movies-search'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
  // =============================================================

  homeLink: document.querySelector('.home-link'),
  libraryLink: document.querySelector('.library-link'),
  libraryHeader: document.querySelector('.js-library__header'),
  homeHeader: document.querySelector('.js-home__header'),
  libraryHomeLink: document.querySelector('.library-home__link'),
  genreSearchLink: document.querySelectorAll('.js-genres'),
  filmoteka: document.querySelector('.logo__text'),
  libraryFilmoteka: document.querySelector('.js-library__text'),
  icon: document.querySelector('.icon-style'),
  libraryIcon: document.querySelector('.filmoteka'),

  //=================================
  autenticatorButton: document.querySelector('.authenticator-thumb'),
  autenticatorModal: document.querySelector('.lightbox__aut'),
  autenticatorModalClose: document.querySelector('.autenticator-close'),
  autenticatorForm: document.getElementById('signin'),

  autenticatorUser: document.getElementById('user'),
  autenticatorPassword: document.getElementById('pass'),
};
