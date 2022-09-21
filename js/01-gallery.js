import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const imagesMarkup = createGalleryList(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);

function createGalleryList(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
       return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}""
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    }).join('');
}

console.log(imagesMarkup);
// galleryContainer.addEventListener('click', createGalleryList);