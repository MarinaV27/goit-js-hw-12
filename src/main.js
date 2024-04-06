import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';

const form = document.querySelector('.search-form');
const list = document.querySelector('.list');
const load = document.querySelector('.loader');
form.addEventListener('submit', handleImages);


async function handleImages(event) {
    event.preventDefault();
    load.classList.add('loader');
    const input = event.target.elements.search.value.trim();
    if (input === '') {
      iziToast.error({
        backgroundColor: 'lightred',
        icon: false,
        progressBar: false,
        close: false,
        position: 'topRight',
        message: 'Please, fill the field!',
      });
      return;
    }
    try {
    const value = await getImages(input)
        if (value.hits && value.hits.length === 0) {
          iziToast.error({
            backgroundColor: 'red',
            progressBar: false,
            close: false,
            position: 'topRight',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
          });
        }
  
        const markup = renderImages(value.hits);
        list.innerHTML = markup;
        const lightbox = new SimpleLightbox('.gallery-link', {
          captionsData: 'alt',
        });
        lightbox.refresh();
      
      } catch (error) {
        console.error('Error occurred while fetching images:', error);
        iziToast.error({
          backgroundColor: 'red',
          icon: false,
          progressBar: false,
          close: false,
          position: 'topRight',
          message:
            'Sorry, an error occurred while fetching images. Please try again!',
        });
      }
      //.finally(() => load.classList.remove('loader'));
    //event.target.reset();
  }

