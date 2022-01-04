const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const listGallery = document.querySelector(".js-gallery");
const modalForm = document.querySelector(".js-lightbox");
const modalImage = modalForm.querySelector(".lightbox__image");
const btnClose = modalForm.querySelector(
  `button[data-action="close-lightbox"]`
);
const refBackdrop = modalForm.querySelector(".lightbox__overlay");

const gallery = galleryItems.map(
  ({ preview, original, description }) =>
    `<li class="gallery__item">
   <a class="gallery__link" href="#">
     <img class="gallery__image"
       src="${preview}"
       data-source="${original}"
       alt="${description}"/>
   </a>
    </li>`
);

listGallery.insertAdjacentHTML("afterbegin", gallery.join(" "));

listGallery.addEventListener("click", onOpenModalForm);

function onOpenModalForm(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  modalForm.classList.add("is-open");

  if (e.target.dataset.source) {
    modalImage.src = e.target.dataset.source;
    modalImage.alt = e.target.alt;
  }
}

btnClose.addEventListener("click", onCloseModal);

function onCloseModal() {
  modalForm.classList.remove("is-open");
  modalImage.removeAttribute("src");
  modalImage.removeAttribute("alt")
}

refBackdrop.addEventListener("click", onCLoseBackdrop);

function onCLoseBackdrop(e) {
  if (e.target) {
    onCloseModal();
  }
}

document.addEventListener("keydown", onCloseKey);

function onCloseKey(e) {
  if (e.code === "Escape") {
    onCloseModal();
  }
}
