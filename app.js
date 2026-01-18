const thumbnailsContainer = document.getElementById('thumbnails');
const bigDisplay = document.getElementById('bigDisplay');

const images = [
{
    src: 'https://images.interestingengineering.com/2023/10/13/image/jpeg/IzubGvzSpg6RWTyBRHGLO3yLa20ovCB6Wm7cjJep.jpg',
    alt: 'Picture of the sun'
},
{
    src: 'https://svs.gsfc.nasa.gov/vis/a000000/a003900/a003909/tour.1200.jpg',
    alt: 'Picture of the moon'
},
{
    src: 'https://www.nas.nasa.gov/SC21/assets/swag/zoom/NASA_SC21_ISS_zoom.jpg',
    alt: 'Picture of the earth'
},
{
    src: 'https://svs.gsfc.nasa.gov/vis/a010000/a013800/a013840/13840_31_WIDE_THUMB.jpg',
    alt: 'Giant star'
},
{
    src: 'https://svs.gsfc.nasa.gov/vis/a010000/a014100/a014146/GRB_artist_concept_desktop.png',
    alt: 'Black hole'
}
];
const prevButton = document.querySelector('.nav-arrow.left');
const nextButton = document.querySelector('.nav-arrow.right');

function showNextImage() {
    currentIndex++;


    if (currentIndex >= images.length) {
    currentIndex = 0;
}

showBigImage(currentIndex);
}

function showPrevImage() {
    currentIndex--;

if (currentIndex < 0) {
    currentIndex = images.length - 1;
}
showBigImage(currentIndex);
}
nextButton.addEventListener('click', showNextImage);
prevButton.addEventListener('click', showPrevImage);


let currentIndex = 0;
function showBigImage(index) {
bigDisplay.innerHTML = '';
const img = document.createElement('img');
img.src = images[index].src;
img.alt = images[index].alt;
bigDisplay.appendChild(img);
currentIndex = index;
}

function createThumbnails() {
images.forEach((image, index) => {
    const thumb = document.createElement('img');
    thumb.src = image.src;
    thumb.alt = image.alt;

thumb.addEventListener('click', () => {
    showBigImage(index);
    
});

thumbnailsContainer.appendChild(thumb);
});
}
document.addEventListener('keydown', (event) => {
if (event.key === 'ArrowRight') {
    currentIndex++;

if (currentIndex >= images.length) {
    currentIndex = 0;
}

showBigImage(currentIndex);
}

if (event.key === 'ArrowLeft') {
    currentIndex--;

if (currentIndex < 0) {
    currentIndex = images.length - 1;
    }

showBigImage(currentIndex);
}
});
createThumbnails();
showBigImage(0);
createThumbnails()
createBigImage(images[0])