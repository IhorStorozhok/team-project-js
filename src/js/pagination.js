import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import '../sass/common/_pagination.scss';
import Api from './apiFetch';
import {api} from './markupCardMovie';
import {onRatingFixedNumber, onFilmReleaseYear, onRemoveGenres, modalMovie, refs} from './markupCardMovie';

export default function renderPaginationMovie (totalItems) {
  const paginationContainer = document.getElementById('pagination');
  const options = {
    totalItems,
    itemsPerPage: 20,
    visiblePages: 10,
    page: 1,
    centerAlign: false,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
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

  const pagination = new Pagination (paginationContainer, options);
  console.log(pagination);

  pagination.on('beforeMove', evt => {
    const { page } = evt;
  });
  
  pagination.on('afterMove', ({ page }) => console.log(page));
}

