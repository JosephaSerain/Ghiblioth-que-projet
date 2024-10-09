

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.querySelector('.logo-ghibli').classList.add('fade-in');
        document.querySelector('.presentation-studio').classList.add('fade-in');
    }, 100);
});

document.addEventListener('DOMContentLoaded', function() {
  const burgerMenu = document.querySelector('.burger-menu');
  const navList = document.querySelector('.nav-list');

  if (burgerMenu && navList) {
      burgerMenu.addEventListener('click', function() {
          navList.classList.toggle('active');
          this.classList.toggle('active');
      });
  } else {
      console.error('Burger menu or navigation list not found');
  }
});

document.addEventListener('DOMContentLoaded', function(){
    const typeFilter = document.getElementById('type-filter');
    const cards = document.querySelectorAll('.card');
  
    typeFilter.addEventListener('change', function(){
      const selectedType = this.value;
  
      cards.forEach(card => {
        const cardTypes = card.dataset.types;
        if (cardTypes) {
          const typeArray = cardTypes.split(',');
          if (selectedType === 'all' || typeArray.includes(selectedType)) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        }
      });
      const visibleCards = Array.from(cards).filter(card => card.style.display !== 'none');
        visibleCards.forEach(card => cardContainer.appendChild(card));
    });
});
 