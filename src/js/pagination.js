import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import {onCreateMarkup, onError} from './markupCardMovie';
export {createPaginationTrending, createPaginationSearch, container};
import {Api} from './apiFetch';
import {themeIcon, themeSwitchButton} from './theme_switcher';

const filmListRef = document.querySelector('.js-cards-movie-list');
const container = document.getElementById('tui-pagination-container');

const options = {
    totalItems: 10,
    itemsPerPage: 20,
    visiblePages: 5,
    page: 1,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn" style="font-weight: 500;">{{page}}</a>',
      currentPage: '<strong class="tui-page-btn tui-is-selected" style="background-color: #FF6B08; border-radius: 5px; width: 40px; height: 40px; padding: 13px 11px;">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
          '<span class="tui-ico-ellip">...</span>' +
        '</a>'
    }
  };  

function  createPaginationTrending (result) {
    options.totalItems = result.total_results;
    const pagination = new Pagination(container, options);
    pagination.on('afterMove', (event) => {
        const currentPage = event.page;
        options.page = currentPage;
        const api2 = new Api;
        api2.page = currentPage;
        api2.fetchMovie()
            .then(data => {
                filmListRef.innerHTML = '';
                options.page = 1;
                onCreateMarkup(data);
                window.scroll(top);
              })
            .catch(onError);
   });
}

function  createPaginationSearch (result, inputValue) {
    options.totalItems = result.total_results;
    options.page = 1;
    const pagination = new Pagination(container, options);
    const api2 = new Api;
    pagination.on('afterMove', (event) => {
        const currentPage = event.page;
        options.page = currentPage;
        api2.page = currentPage;
        api2.searchQuery = inputValue;

        api2.fetchSearch()
        .then(data => {
            filmListRef.innerHTML = '';
            onCreateMarkup(data);
            window.scroll(top);
            themeCheck(); 
            // if(data.length < 20) {
            //   console.log(5555);
            // };       
          })
          .catch(onError);
    });

}

const onScrollToTop = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  })
};

const buttonTop = document.querySelector('.buttonTop');
buttonTop.addEventListener('click', onScrollToTop);

const showButton = function () {
  if(window.scrollY > 300) {
    buttonTop.style.display = 'block';
  }  else {
    buttonTop.style.display = 'none';
  }
}

window.onscroll = function () {
    showButton();
  };


