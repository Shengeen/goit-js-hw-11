import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '57057900-bb12584643415bb5cc9150859';

export function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data);
}
