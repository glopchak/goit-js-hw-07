import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryContainer = document.querySelector(".gallery");

function galleryItemsMarkup(items){
return items.map(item => 
    `<a class="gallery__item" href="${item.original}">
    <img class="gallery__image" 
    src="${item.preview}" 
    alt="${item.description}" />
    </a>`).join('')
};
galleryContainer.insertAdjacentHTML("beforeend", galleryItemsMarkup(galleryItems));

const gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});


// const refs ={
//     gallery: document.querySelector(".gallery"),
// };
//  function galleryRender (galleryItems){
//      refs.gallery.innerHTML = galleryItems.reduce(
//          (acc, {preview, original, description } = galleryItems) =>
//          acc + 
//          `<a class="gallery__item" href="${original}">
//      <img class="gallery__image" src="${preview}"  alt="${description}" />
//     </a>`, "");
//  };

//  galleryRender(galleryItems);
//  const galleryRide = new SimpleLightbox(".gallery a", {
//     captionsData: "alt",
//     captionDelay: 250,
//  });