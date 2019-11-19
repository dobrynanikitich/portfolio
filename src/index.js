const expandBtn = document.querySelector('.expandBtn');
const expandEducationList = document.querySelector('.expandEducationList');
const expandArrow = document.querySelector('.fa-arrow-right');

let isExpanded = false;

const showExpandHandler = () => {
    isExpanded = !isExpanded;
    if (isExpanded) {
        expandEducationList.classList.remove('displayNone');
        expandArrow.style.transform = 'rotate(90deg)';
    } else {
        expandEducationList.classList.add('displayNone');
        expandArrow.style.transform = 'rotate(0deg)';
    }
}

expandBtn.addEventListener('click', showExpandHandler);

//Implement slider

const carouselSlide = document.querySelector('.carouselSlider');
const carouselImages = document.querySelectorAll('.carouselSlider .slide');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) {
        return;
    }
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter += 1;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

prevBtn.addEventListener('click', () => {
    if (counter <= 0) {
        return;
    }
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter -= 1;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})

