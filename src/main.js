import { getImagesByQuery, per_page } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showError,
  showMessage,
  showLoadMoreButton,
  hideLoadMoreButton,
  loadMoreBtn,
} from './js/render-functions';

const form = document.querySelector('.form');

let page = 1;
let amountOfPages = 0;
let searchedQuery = '';

form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  clearGallery();
  hideLoadMoreButton();
  loadMoreBtn.removeEventListener('click', onLoadMore);
  const input = event.target.elements.searchtext;
  searchedQuery = input.value.trim();

  if (searchedQuery === '') {
    console.log('Your input is empty');
    return;
  }

  page = 1;
  showLoader();

  try {
    const data = await getImagesByQuery(searchedQuery);
    const images = data.hits;
    amountOfPages = Math.ceil(data.totalHits / per_page);
    if (!images.length) {
      showError(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      return;
    }
    createGallery(images);

    if (page < amountOfPages) {
      loadMoreBtn.addEventListener('click', onLoadMore);
      showLoadMoreButton();
    } else {
      showMessage("We're sorry, but you've reached the end of search results.");
    }
  } catch (error) {
    showError(error.message);
  } finally {
    hideLoader();
    event.target.reset();
  }
}

async function onLoadMore() {
  page++;
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(searchedQuery, page);
    const images = data.hits;
    if (!images.length) {
      showError(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      return;
    }

    createGallery(images);

    scrollDown();

    if (page >= amountOfPages) {
      showMessage("We're sorry, but you've reached the end of search results.");
      hideLoadMoreButton();
      loadMoreBtn.removeEventListener('click', onLoadMore);
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    showError(error.message);
  } finally {
    hideLoader();
  }
}

function scrollDown() {
  const card = document.querySelector('.gallery-item');
  const getCardHeight = card.getBoundingClientRect().height;
  window.scrollBy({
    left: 0,
    top: getCardHeight * 2,
    behavior: 'smooth',
  });
}
