import axios from 'axios';

export function getImagesByQuery(query) {
  return axios('https://pixabay.com/api/', {
    params: {
      key: '55699245-ea32969c729087c9356aa5786',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  })
    .then(({ data: { hits } }) => {
      return hits;
    })
    .catch(error => {
      throw new Error(error.message);
    });
}
