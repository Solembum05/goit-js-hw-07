import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
function createGaalery(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`;
    })
    .join('');
}
const addGalery = createGaalery(galleryItems);
galleryList.insertAdjacentHTML('beforeend', addGalery);

galleryList.addEventListener('click', onImgClick);

function onImgClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  basicLightbox
    .create(
      `<img width="1400" height="900" src="${event.target.dataset.source}">`
    )
    .show();
}
