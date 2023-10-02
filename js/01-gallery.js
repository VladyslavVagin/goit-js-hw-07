import { galleryItems } from './gallery-items.js';
// Change code below this line

// Create markup of gallery elements 
const galleryMarkup = galleryItems.map(({preview, original, description}) => `<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`
).join('');

// Add markup to HTML 
const galleryContainer = document.querySelector('.gallery');
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

// Make delegation of events 
galleryContainer.addEventListener('click', onClickImageShow);

function onClickImageShow (evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== 'IMG') {
        return;
    }
// Recieve link for origignal image 
   const instance = basicLightbox.create(`<img src="${evt.target.dataset.source}">`);
   instance.show();
};

