import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const imagesMarkup = createGalleryList(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);

galleryContainer.addEventListener('click', onImgClick);

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

function onImgClick(event) {
    event.preventDefault();
   
    if (!event.target.classList.contains('gallery__image')){
        return;
    }
    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`);
    instance.show();
    
galleryContainer.addEventListener("keydown", onEscapeClick);
  function onEscapeClick(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
    
