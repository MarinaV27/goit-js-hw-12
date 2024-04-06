export function getImages(q) {
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/'
    const params = new URLSearchParams({
      key: '43180958-6b06a0884e2ebb29e4f1cb8bf',
      q,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    });
    const url = `${BASE_URL}${END_POINT}?${params}`;
    return fetch(url)
      .then(res => res.json())
      .catch(error => {
        console.error('Error occurred while fetching images:', error);
        throw error;
      });
  }