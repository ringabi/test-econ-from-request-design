const popupBgSearchMob = document.querySelector('.popup-bg-search-mob');
const popupSearchMob = document.querySelector('.popup-search-mob');
const openPopupSearchMob = document.querySelector('.header form > img');
const closePopupSearchMob = document.querySelector('.close-popup-search-mob');

const getWindowWidth = () => window.innerWidth || document.body.clientWidth;

openPopupSearchMob.addEventListener('click', (e) => {
  if (getWindowWidth() <= 415) {    
    e.preventDefault();
    popupBgSearchMob.classList.add('active');
    popupSearchMob.classList.add('active');
  }
});

closePopupSearchMob.addEventListener('click', () => {
  popupBgSearchMob.classList.remove('active');
  popupSearchMob.classList.remove('active');
});

const popupBgMenuMob = document.querySelector('.popup-bg-menu-mob');
const popupMenuMob = document.querySelector('.popup-menu-mob');
const openPopupMenuMob = document.querySelector('.header > img:nth-of-type(1)');
const closePopupButtonMenuMob = document.querySelector('.close-popup-menu-mob');

openPopupMenuMob.addEventListener('click', (e) => {
  if (getWindowWidth() <= 415) {    
    e.preventDefault();
    popupBgMenuMob.classList.add('active');
    popupMenuMob.classList.add('active');
  }
});

closePopupButtonMenuMob.addEventListener('click', () => {
  popupBgMenuMob.classList.remove('active');
  popupMenuMob.classList.remove('active');
});

const popupBgFilterMob = document.querySelector('.popup-bg-filter-mob');
const popupFilterMob = document.querySelector('.popup-filter-mob');
const openPopupFilterMob = document.querySelector('#bar-chart');
const closePopupFilterMob = document.querySelector('.close-popup-filter-mob');

openPopupFilterMob.addEventListener('click', (e) => {
  if (getWindowWidth() <= 415) {    
    e.preventDefault();
    popupBgFilterMob.classList.add('active');
    popupFilterMob.classList.add('active');
  }
});

closePopupFilterMob.addEventListener('click', () => {
  popupBgFilterMob.classList.remove('active');
  popupFilterMob.classList.remove('active');
});