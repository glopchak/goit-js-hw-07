import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector(".gallery");


function galleryItemsMarkup(items){
return items.map(item => 
    `<div class="gallery__item">
        <a class="gallery__link" 
        href="${item.original}">
        <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
        />
        </a>
    </div>`).join('')
};


function onGalleryClick (event){
    event.preventDefault();
    if(event.target.nodeName !== "IMG"){
        return;
    };
    const imgInstance = basicLightbox.create(`<img src="${event.target.dataset.source}" alt="${event.target.description}">`,{
        closable: true,
        onShow: () => {window.addEventListener('keydown', onModalPressEsc)},
        onClose: () => {window.removeEventListener('keydown', onModalPressEsc)},});
        
        imgInstance.show();
        
    //     function onModalPressEsc (event){
    // const isEsc = event.code === 'Escape';
    // if (isEsc) {
    //     imgInstance.close();
    //     }
    // };

    function onModalPressEsc (event){
        if(event.code ===  'Escape'){
            imgInstance.close();
            window.removeEventListener('keydown', onModalPressEsc);
        }
    }
};



galleryContainer.insertAdjacentHTML("beforeend", galleryItemsMarkup(galleryItems));
galleryContainer.addEventListener('click', onGalleryClick);
console.log(galleryItems);
