(() => {
  function accordion() {
    const accordionHeadlines = document.querySelectorAll('.accordion__headline');

    accordionHeadlines.forEach(accordionHeadline => {
      accordionHeadline.addEventListener('click', event => {
        accordionHeadline.classList.toggle('active');
        const accordionPanel = accordionHeadline.nextElementSibling;
        if(accordionHeadline.classList.contains('active')) {
          accordionPanel.style.display = 'block';
        } else {
          accordionPanel.style.display = 'none';
        }
      })
    })
  }

  function run() {
    accordion();
  }
  run();
})();