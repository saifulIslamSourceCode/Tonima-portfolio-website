//Work section slider
const slider = document.getElementById('slider');
const cards = document.querySelectorAll('.card');
let index = 0;

function updateSlider() {
  const cardWidth = cards[0].offsetWidth;
  slider.style.transform = `translateX(-${index * cardWidth}px)`;
}

function nextSlide() {
  index = (index + 1) % cards.length;
  updateSlider();
}

function prevSlide() {
  index = (index - 1 + cards.length) % cards.length;
  updateSlider();
}

// Responsive on resize
window.addEventListener('resize', updateSlider);

// Optional: Call once on load
window.addEventListener('DOMContentLoaded', updateSlider);


  //nav links text will be black after 100 vh
  window.addEventListener("scroll", () =>{
    let navLinks = document.querySelectorAll('.nav');
    let targetHeight = window.innerHeight * 1.6;

    if(window.scrollY >= targetHeight) {
      navLinks.forEach(links => links.classList.add("black"));
    } else {
      navLinks.forEach(links => links.classList.remove("black"));

    }
  })


  // Work section add displayNan for hover effect
  let imgConteiner_1 = document.getElementById("dresses_div_1");
  let imgConteiner_2 = document.getElementById("dresses_div_2");
  let imgConteiner_3 = document.getElementById("dresses_div_3");
  let imgConteiner_4 = document.getElementById("dresses_div_4");

  function zoomEvent(container) {

    let img = container.getElementsByTagName("img")[0];
    let scale = 2;

    // Move over image
    img.addEventListener('mousemove', (e) => {
      const rect = img.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      img.style.transformOrigin = `${x}% ${y}%`;
      img.style.transform = `scale(${scale})`;
    });

    // // Zoom in/out with mouse wheel over image
    // img.addEventListener('wheel', (e) => {
    //   e.preventDefault();
    //   scale += e.deltaY * -0.001;
    //   scale = Math.min(Math.max(1, scale), 3);
    //   img.style.transform = `scale(${scale})`;
    // });

    // Reset only when mouse leaves the image
    img.addEventListener('mouseleave', () => {
      scale = 2;
      img.style.transform = 'scale(1)';
    });





  }

  zoomEvent(imgConteiner_1);
  zoomEvent(imgConteiner_2);
  zoomEvent(imgConteiner_3);
  zoomEvent(imgConteiner_4);
