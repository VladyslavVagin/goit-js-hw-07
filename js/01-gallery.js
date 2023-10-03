import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryMarkup = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item">
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

const galleryContainer = document.querySelector('.gallery');
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onClickImageShow);

function onClickImageShow(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}">`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", onPressEsc);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", onPressEsc);
      },
    }
  );

  instance.show();

  function onPressEsc(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
};
