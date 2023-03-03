import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', onImgClick);

function onImgClick (e) {
    e.preventDefault()
    if (e.target.nodeName !== 'IMG') {
        return;
    }
    const modal = basicLightbox.create(
    `<div class="modal">
    </div>`);

modal.show()
}

const createGalleryGrid = ({ preview, original, description }) => 
`<div class="gallery__item">
<a class="gallery__link" href="large-image.jpg">
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