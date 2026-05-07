// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const galleryList = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
export const loadMoreBtn = document.querySelector('.btn-load-more');
const SLBInstance = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
});

export function createGallery(images) {
  galleryList.insertAdjacentHTML(
    'beforeend',
    images
      .map(
        ({
          webformatURL: preview,
          largeImageURL: origin,
          tags,
          likes,
          views,
          comments,
          downloads,
        }) => {
          return `<li class="gallery-item">
          <a href="${origin}" class="gallery-link">
              <img src='${preview}' alt='${tags}' />
              <div class="img-desc-container">
                <div class="img-desc-wrapper">
                    <p class="img-desc-titles">Likes</p>
                    <p>${likes}</p>
                </div>
                <div class="img-desc-wrapper">
                    <p class="img-desc-titles">Views</p>
                    <p>${views}</p>
                </div>
                <div class="img-desc-wrapper">
                    <p class="img-desc-titles">Comments</p>
                    <p>${comments}</p>
                </div>
                <div class="img-desc-wrapper">
                    <p class="img-desc-titles">Downloads</p>
                    <p>${downloads}</p>
                </div>
              </div>
              </a>
          </li>`;
        }
      )
      .join('')
  );
  SLBInstance.refresh();
}
export function clearGallery() {
  galleryList.innerHTML = '';
}
export function showLoader() {
  loader.classList.add('is-open');
}
export function hideLoader() {
  loader.classList.remove('is-open');
}
export function showError(message) {
  iziToast.show({
    message,
    backgroundColor: 'red',
    messageColor: 'white',
    maxWidth: 432,
    iconUrl: './img/error-icon.svg',
    position: 'bottomRight',
  });
}
export function showMessage(message) {
  iziToast.show({
    message,
    backgroundColor: 'lightblue',
    messageColor: 'white',
    position: 'bottomRight',
  });
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.add('is-visible');
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.remove('is-visible');
}
