const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

galleryImages.forEach((img, index) => {

    img.addEventListener('click', () => {

        currentIndex = index;

        lightboxImg.src = img.src;
        lightbox.style.display = 'flex';

    });

});

function showImage(index){

    if(index < 0){
        currentIndex = galleryImages.length - 1;
    }

    else if(index >= galleryImages.length){
        currentIndex = 0;
    }

    else{
        currentIndex = index;
    }

    lightboxImg.src = galleryImages[currentIndex].src;
}

nextBtn.addEventListener('click', () => {
    showImage(currentIndex + 1);
});

prevBtn.addEventListener('click', () => {
    showImage(currentIndex - 1);
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {

    if(e.target === lightbox){
        lightbox.style.display = 'none';
    }

});
