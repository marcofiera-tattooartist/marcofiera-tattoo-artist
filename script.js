const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slider-track img');

const prevButton = document.querySelector('.slider-btn.prev');
const nextButton = document.querySelector('.slider-btn.next');

let currentSlide = 0;

function showSlide(index){

    if(index < 0){
        currentSlide = slides.length - 1;
    }

    else if(index >= slides.length){
        currentSlide = 0;
    }

    else{
        currentSlide = index;
    }

    track.style.transform = translateX(-${currentSlide * 100}%);
}

nextButton.addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

prevButton.addEventListener('click', () => {
    showSlide(currentSlide - 1);
});
