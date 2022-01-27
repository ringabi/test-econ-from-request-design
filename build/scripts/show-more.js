const showMore = document.querySelector('.grid-4 .show-more');
const hide = document.querySelector('.grid-4 .hide');
const hiddenCards = document.querySelectorAll('.grid-4 .card.d-md-none');
const grid4 = document.querySelector('.grid-4'); 

showMore.addEventListener('click', () => {
  showMore.style.display = 'none';
  grid4.classList.add('grid-4-rows-10');
  hide.classList.add('d-md-block');

  hiddenCards.forEach(hiddenCard => {
    hiddenCard.style.display = 'block';
    hiddenCard.classList.add('mt-sm-minus69px');
  });
});

hide.addEventListener('click', () => {
  hide.classList.remove('d-md-block');

  for (hiddenCard of hiddenCards) {
    hiddenCard.style.display = 'none';
  }

  grid4.classList.remove('grid-4-rows-10');
  showMore.style.display = 'block';
});