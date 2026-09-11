const photos = document.querySelectorAll('.gallery img, .gallery-video');

let current = 0;

function showPhoto(index) {

    photos.forEach(photo => {
        photo.classList.remove('active');
    });

    photos[index].classList.add('active');

}

function nextPhoto() {

    current++;

    if (current >= photos.length) {
        current = 0;
    }

    showPhoto(current);

}

function prevPhoto() {

    current--;

    if (current < 0) {
        current = photos.length - 1;
    }

    showPhoto(current);

}

showPhoto(current);
