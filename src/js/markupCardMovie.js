import createCardMovies from '../templates/cardMovie.hbs';
// import createPreloader from '../partials/preloader.html';
import refs from './refs';
import Api from './apiFetch';
import modalMovie from './modalMovie';

const api = new Api();

refs.searchForm.addEventListener('submit', onSearchMovies);
// refs.loadMoreBtn.addEventListener('click', onLoadMore);

//==============Карточка фильма============================
// запрос данных для жанров (возвращает массив объектов с свойствами жанров)
api
  .fetchGenres()
  .then(genres => {
    genres.forEach(el => {
      genresArrayStr.push(el);
    });
  })
  .catch(onError);

const genresArrayStr = [];

// Заменяет значение жанра на строку с именем жанра
function onRemoveGenres(data) {
  data.forEach(el => {
    el.genre_ids = onComparingArrayAndObject(el.genre_ids, genresArrayStr);
    return;
  });
}

//итерация числового массива по значению свойства (id) объекта
function onComparingArrayAndObject(arr, obj) {
  let genresStr = [];
  arr.forEach(el => {
    const values = Object.values(obj);
    values.forEach(value => {
      if (value.id == el) {
        genresStr.push(' ' + value.name);
      }
    });
    return;
  });
  return genresStr;
}

// Разметка карточек фильмов по запросу на бэк
function normalRatingYearGenres(data) {
  onRatingFixedNumber(data.results);
  onFilmReleaseYear(data.results);
  onRemoveGenres(data.results);
}

function onCreateMarkup(data) {
  refs.cardsMovieList.insertAdjacentHTML('afterbegin', createCardMovies(data.results));
}

api.fetchMovie()
  .then(data => {
    setTimeout(() => { 
      normalRatingYearGenres(data)
      onCreateMarkup(data);
      onPreloader();
    }, 700);
  })
  .catch(onError);

// перезаписывает значение рейтинга с числом после запятой
function onRatingFixedNumber(data) {
  data.forEach(el => {
    el.vote_average = el.vote_average.toFixed(1);
    return;
  });
}

// перезаписывает значение даты на год
function onFilmReleaseYear(data) {
  data.forEach(el => {
    return (
      (el.release_date = onSliceNumber(el.release_date)) ||
      (el.first_air_date = onSliceNumber(el.first_air_date))
    );
  });
}

//отрезает лишние символы и остается год. Так приходит с бека "2021-11-11"
function onSliceNumber(release) {
  if (release == undefined) {
    return;
  }
  return release.slice(0, 4);
}

function onError() {
  refs.textError.classList.remove('is-hidden')
    setTimeout(() => {
      refs.textError.classList.add('is-hidden')
  }, 2000);

  console.log('Search result not successful. Enter the correct movie name and');
}

//==============Поиск фильма============================

function onSearchMovies(e) {
  e.preventDefault();
  api.query = e.currentTarget.elements.query.value;
  resetMarkup();
  api.fetchSearch(e)
  .then((data) => {
    normalRatingYearGenres(data)
    onCreateMarkup(data);
    onPreloader();
  })
  .catch(onError);
}

function resetMarkup() {
  refs.cardsMovieList.innerHTML = '';
  api.resetPageNumber();
}

// ================Спинер=============================

function onPreloader() {
  refs.preloaderOverflow.classList.add('is-hidden')
}

// onPreloader(onSearchMovies())

// function onMarkupPreloader() {
  
// }

// ===================================================
// ===================================================
// Подгрузка страниц
// function onLoadMore() {
//   api.fetchSearch()
//     .then(data => {
//       normalRatingYearGenres()
//       return refs.cardsMovieList.insertAdjacentHTML('beforeend', createCardMovies(data.results))
//     })
//     .catch(onError)
// }