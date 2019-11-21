const expandBtn = document.querySelector('.expandBtn');
const expandEducationList = document.querySelector('.expandEducationList');
const expandArrow = document.querySelector('.fa-arrow-right');

let isExpanded = false;
let startSwipeCoords;
let finishSwipeCoords;

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
});

//implement swiper

let mobileCounter = 1;
let clientX;

const showInfoBtnYellow = document.querySelector('.showSlideInfoMobile1');
const showInfoBtnRdp = document.querySelector('.showSlideInfoMobile2');
const yellowInfo = document.querySelector('.theyalowInfoListMobile');
const rdpInfo = document.querySelector('.rdpInfoListMobile');
const theYellowPreview = document.querySelector('.theyallowScreenMobile');
const rdpPreview = document.querySelector('.rdpScreenMobile');
const mobileCarouselSlider = document.querySelector('.mobileCarouselSlider');
const carouselImagesMobile = document.querySelectorAll('.mobileCarouselSlider .slideMobile');
const sizeMobile = carouselImagesMobile[0].clientWidth;

mobileCarouselSlider.style.transform = 'translateX(' + (-sizeMobile * mobileCounter) + 'px)';

const showInfoYellowHandler = () => {
    const yellowPreview = document.querySelector('.theyallowScreenMobile');
    if (yellowInfo.classList.contains('noActive')) {
        yellowInfo.style.display = 'flex';
        yellowInfo.classList.remove('noActive');
        theYellowPreview.classList.add('displayNone');
    } else {
        yellowInfo.style.display = 'none';
        yellowInfo.classList.add('noActive');
        theYellowPreview.classList.remove('displayNone');
    }
}

const showInfoRdbHandler = () => {
    const rdbPreview = document.querySelector('.rdpInfoListMobile');
    if (rdpInfo.classList.contains('noActive')) {
        rdpInfo.style.display = 'flex';
        rdpInfo.classList.remove('noActive');
        rdpPreview.classList.add('displayNone');
    } else {
        rdpInfo.style.display = 'none';
        rdpInfo.classList.add('noActive');
        rdpPreview.classList.remove('displayNone');
    }
}


const makeSwapHandler = (delta) => {
    if (delta < -1) {
        mobileCarouselSlider.style.transition = 'transform 0.4s ease-in-out';
        mobileCounter += 1;
        mobileCarouselSlider.style.transform = 'translateX(' + (-sizeMobile * mobileCounter) + 'px)';
    }
    if (delta > 1) {
        mobileCarouselSlider.style.transition = 'transform 0.4s ease-in-out';
        mobileCounter -= 1;
        mobileCarouselSlider.style.transform = 'translateX(' + (-sizeMobile * mobileCounter) + 'px)';
    }
}

const swipeStartHandler = (e) => {
    // e.preventDefault();
    clientX =  e.touches[0].clientX
}

const swipeFinishHandler = (e) => {
    let delta = e.changedTouches[0].clientX - clientX;
    makeSwapHandler(delta);
}

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
});

mobileCarouselSlider.addEventListener('transitionend', () => {
    if (carouselImagesMobile[mobileCounter].id === 'lastCloneMobile') {
        mobileCarouselSlider.style.transition = 'none';
        mobileCounter = carouselImagesMobile.length - 2;
        mobileCarouselSlider.style.transform = 'translateX(' + (-sizeMobile * mobileCounter) + 'px)';
    }
    if (carouselImagesMobile[mobileCounter].id === 'firstCloneMobile') {
        mobileCarouselSlider.style.transition = 'none';
        mobileCounter = carouselImagesMobile.length - mobileCounter;
        mobileCarouselSlider.style.transform = 'translateX(' + (-sizeMobile * mobileCounter) + 'px)';
    }
});

showInfoBtnYellow.addEventListener('click', showInfoYellowHandler);
showInfoBtnRdp.addEventListener('click', showInfoRdbHandler);
mobileCarouselSlider.addEventListener('touchstart', swipeStartHandler);
mobileCarouselSlider.addEventListener('touchend', swipeFinishHandler);


