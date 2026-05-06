import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showError,
} from './js/render-functions';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  clearGallery();
  const input = event.target.elements.searchtext;

  if (input.value.trim() === '') {
    console.log('Your input is empty');
    return;
  }

  showLoader();

  getImagesByQuery(input.value.trim())
    .then(data => {
      if (!data.length) {
        showError(
          'Sorry, there are no images matching your search query. Please try again!'
        );
        return;
      }
      createGallery(data);
    })
    .catch(error => {
      showError(error.message);
    })
    .finally(() => {
      hideLoader();
      event.target.reset();
    });
}
