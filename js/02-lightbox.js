import { galleryItems } from "./js/gallery-items";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

function creatElemnt(gallery) {
  const imageEl = gallery
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
<a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`
    )
    .join("");

  return imageEl;
}

new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250 });
