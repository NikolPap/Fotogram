const PHOTOS = [
  "antenna-2156818_1280.jpg",
  "autumn-9875155_1280.jpg",
  "blue-flower-6620619_1280.jpg",
  "duck-9826181_1280.jpg",
  "louvre-7146800_1280.jpg",
  "milky-way-3802391_1280.jpg",
  "mushrooms-8328101_1280.jpg",
  "ruhr-area-8770681_1280.png",
  "sparrow-9617024_1280.jpg",
  "tavern-7411977_1280.jpg",
  "waterfall-4726196_1280.jpg",
  "waterfall-7478709_1280.jpg",
];

const PHOTOS_DESCRIPTION = [
  "Radio antenna tower against a blue sky",
  "Colorful autumn forest with orange and yellow leaves",
  "Close-up of a delicate blue flower in bloom",
  "Wild duck swimming on a calm lake",
  "The Louvre Museum with its glass pyramid in Paris",
  "Starry night sky showing the Milky Way galax",
  "Group of mushrooms growing on forest ground",
  "Cityscape of the Ruhr area in Germany with buildings and lights",
  "Small sparrow perched on a tree branch",
  "Cozy rustic tavern interior with wooden tables",
  "Tall waterfall surrounded by lush green fores",
  "Powerful waterfall cascading over rocky cliffs",
];

let currentIndex = 0;
const dialogRef = document.getElementById("myDialog");

function logDownWBubblingProtection(event) {
  event.stopPropagation();
}

dialogRef.addEventListener("click", (event) => {
  if (event.target === dialogRef) {
    closeDialog();
  }
});


function initArray() {
  new_image = document.getElementById("gallery");
  for (let i = 0; i < PHOTOS.length; i++) {
    new_image.innerHTML +=  `<button class="open_dialog_button box_shadow" tabindex="1" onclick="openDialog(${i}, event)" ><img  class="main-image"   src= "./img/images/${PHOTOS[i]}" alt = "${PHOTOS_DESCRIPTION[i]}"></button>`;
   
  }
}

function openDialog(i, event) {
  currentIndex = i;
  const dialogImage = document.getElementById("open_dialog_image");
  const dialogHeadline = (document.getElementById("dialog_headline").innerHTML =
    PHOTOS[i]);
  const photoNumber = (document.getElementById("photo_number").innerHTML =
    i + 1 + " / " + PHOTOS.length);
  dialogImage.innerHTML = `<img class="dialog_image" src= "./img/images/${PHOTOS[i]}" alt = "${PHOTOS_DESCRIPTION[i]}">`;
  dialogRef.showModal();
  dialogRef.classList.add("opened");
  event.stopPropagation();
}

function closeDialog() {
  dialogRef.close();
  dialogRef.classList.remove("opened");
}

function previusPhoto(event) {
  currentIndex = (currentIndex - 1 + PHOTOS.length) % PHOTOS.length;
  openDialog(currentIndex, event);
  event.stopPropagation();
}

function forwardPhoto(event) {
  currentIndex = (currentIndex + 1) % PHOTOS.length;
  openDialog(currentIndex, event);
}

