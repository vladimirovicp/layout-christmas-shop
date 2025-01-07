const scrollToTopButton = document.querySelector('.scroll__to-top');

if(scrollToTopButton){
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollToTopButton.style.opacity = 1;
      } else {
        scrollToTopButton.style.opacity = 0;
      }
    });

    scrollToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
}
