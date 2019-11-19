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