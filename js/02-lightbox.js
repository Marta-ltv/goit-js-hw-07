import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const imagesMarkup = createGalleryList(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);

galleryContainer.addEventListener('click', onImgClick);

function createGalleryList(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
       return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    }).join('');
}

function onImgClick(event) {
    event.preventDefault();
   
    if (!event.target.classList.contains('gallery__image')){
        return;
    }
    const lightbox = new SimpleLightbox('.gallery a', { 
        captionsData: 'alt',
        captionDelay: 250,
    });

}
    

