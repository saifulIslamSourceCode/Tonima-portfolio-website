const slider = document.getElementById('slider');
  const cards = document.querySelectorAll('.card');
  let index = 0;

  function updateSlider() {
    slider.style.transform = `translateX(-${index * 100}%)`;
  }

  function nextSlide() {
    index = (index + 1) % cards.length;
    updateSlider();
  }

  function prevSlide() {
    index = (index - 1 + cards.length) % cards.length;
    updateSlider();
  }