

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

document.addEventListener('DOMContentLoaded', function() {
  const expandableLists = document.querySelectorAll('.expandable-list');

  expandableLists.forEach(list => {
      const expandButton = list.querySelector('.expand-button');
      const movieListContainer = list.querySelector('.movie-list-container');
      const initialHeight = list.offsetHeight;

      expandButton.addEventListener('click', function() {
          list.classList.toggle('expanded');

          if (list.classList.contains('expanded')) {
              expandButton.textContent = 'Voir moins';
              movieListContainer.style.display = 'block';
              list.style.height = list.scrollHeight + 'px';
          } else {
              expandButton.textContent = 'Voir plus';
              list.style.height = initialHeight + 'px';
              // Utiliser setTimeout pour permettre l'animation avant de cacher le contenu
              setTimeout(() => {
                  movieListContainer.style.display = 'none';
              }, 300); // 300ms correspond à la durée de la transition CSS
          }
      });
  });
});