// import ColorCardTpl from '../templates/gallery-items.hbs';
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);
const gallery = document.querySelector('.gallery');
const cardsMurkup = addMarkupToGellery(galleryItems);

gallery.insertAdjacentHTML('afterbegin', cardsMurkup);

function addMarkupToGellery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
        `;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsDelay: 250,
  captionsData: 'alt',
});
//////////////////////////////////////////
