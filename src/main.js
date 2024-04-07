import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';

let query;
let currentPage = 1;
let maxPage = 0;
const pageSize = 15;


const form = document.querySelector('.search-form');
const list = document.querySelector('.list');
const load = document.querySelector('.loader');
const btnLoadMore = document.querySelector('.btn-load-more');

form.addEventListener('submit', handleImages);


async function handleImages(event) {
    event.preventDefault();
    const input = event.target.elements.search.value.trim();
    //list.innerHTML = "";
    currentPage = 1;
    showLoader();
  const data = await getImages(query, currentPage);
  maxPage = Math.ceil(data.totalHits / pageSize);
  renderImages(data.hits);
    
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
    showLoader ();
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
          captionDelay: 250,
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
        hideLoader();
      }
      //.finally(() => load.classList.remove('loader'));
    event.target.reset();
    showLoadMore()
  }
btnLoadMore.addEventListener('click', onLoadMoreClick);

async function onLoadMoreClick(){
  currentPage += 1;
showLoader();
try{

const data = await getImages(query, currentPage);
renderImages(data.hits);
if (currentPage >= maxPage) {
  hideLoadMore();
  iziToast.show({
    color: 'green',
    message: `Sorry, you have reached the end of collection.`,
    position: 'topCenter',
    timeout: 1000,
  });
}
} catch (err) {
console.log(err);
}

hideLoader();
checkBtnStatus();
}
//hideLoader();
//hideLoadMore();
function showLoadMore() {
  btnLoadMore.classList.remove('hidden');
}
function hideLoadMore() {
  btnLoadMore.classList.add('hidden');
}
function showLoader () {
  load.classList.remove('hidden');
}
function hideLoader () {
  load.classList.add('hidden');
}
function checkBtnStatus() {
  if (currentPage >= maxPage) {
    hideLoadMore();
  } else {
    showLoadMore();
  }
}
