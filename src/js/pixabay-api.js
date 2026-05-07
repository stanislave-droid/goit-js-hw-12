import axios from 'axios';

export const per_page = 15;

export async function getImagesByQuery(query, page = 1) {
  const images = await axios('https://pixabay.com/api/', {
    params: {
      key: '55699245-ea32969c729087c9356aa5786',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page,
    },
  });
  return images.data;
}
