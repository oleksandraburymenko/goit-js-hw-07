import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', onImgClick);

const createGalleryGrid = ({ preview, original, description }) => 
`<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`;

const markupGallery = galleryItems.map(e => createGalleryGrid(e)).join('');
gallery.insertAdjacentHTML('afterbegin', markupGallery);

let instance;
function onImgClick (e) {
  e.preventDefault()
  if (e.target.nodeName !== 'IMG') {
      return;
  }
  instance = basicLightbox.create(
  `<img src="${e.target.dataset.source}" alt="${e.target.alt}" />
  `, {
    onShow: (instance) => { document.addEventListener(`keydown`, escModal) },
    onClose: (instance) => { document.removeEventListener(`keydown`, escModal) }
  });

  instance.show()
}

function escModal ({code}) {
  if (code === `Escape`) {
    instance.close()
  }
}
