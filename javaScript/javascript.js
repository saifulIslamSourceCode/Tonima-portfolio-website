//Work section slider
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

  //nav links text will be black after 100 vh
  window.addEventListener("scroll", () =>{
    let navLinks = document.querySelectorAll('.nav');
    let targetHeight = window.innerHeight;

    if(window.scrollY >= targetHeight) {
      navLinks.forEach(links => links.classList.add("black"));
    } else {
      navLinks.forEach(links => links.classList.remove("black"));

    }
  })