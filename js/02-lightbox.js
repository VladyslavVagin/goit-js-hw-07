import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryMarkup = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
).join('');

const galleryContainer = document.querySelector('.gallery');
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

let gallery = new SimpleLightbox('.gallery__item a', {
    captionsData: `alt`,
    captionDelay: 250,
});
