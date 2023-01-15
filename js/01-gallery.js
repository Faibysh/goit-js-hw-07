import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryItemsRef = document.querySelector(".gallery");
const galleryMarkup = createMarkUp(galleryItems);

galleryItemsRef.insertAdjacentHTML("beforeend", galleryMarkup);

galleryItemsRef.addEventListener('click', onClick);

function createMarkUp(gallery) {
  return gallery.map(
    ({ preview, original, description }) => {
      return `
      <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}


function onClick(evt) {
  evt.preventDefault();
  const isImage = evt.target.classList.contains("gallery__image");
  if (!isImage) {
    return;

  }

  basicLightbox.create(
    `
  <div class="modal">
  <img src="${evt.target.dataset.source}">
  </div>
  `
  )
    .show();
  }

 