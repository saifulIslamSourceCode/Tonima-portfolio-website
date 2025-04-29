//header menu button click event
let btns = document.querySelectorAll(".menu_btn");
let sideBar = document.querySelector(".side_nav_div");
let rightSideBlock = document.querySelector(".block_right_div");
console.log(btns[0])



btns[0].addEventListener("click", ()=> {
  btns.forEach((b)=> b.classList.remove("menu_btn_click"));
  btns[1].classList.add("menu_btn_click");
  sideBar.classList.add("side_nav_div_visible");
  document.body.style.overflow = "hidden";
  rightSideBlock.classList.add("block_right_div_visible");
});
function removeSideBar() {
  btns.forEach((b)=> b.classList.remove("menu_btn_click"));
  btns[0].classList.add("menu_btn_click");
  sideBar.classList.remove("side_nav_div_visible");
  document.body.style.overflow = "auto";
  rightSideBlock.classList.remove("block_right_div_visible");
}
btns[1].addEventListener("click", ()=> {
  removeSideBar();
});

rightSideBlock.addEventListener("click", ()=> {
  removeSideBar()
})



// btns.forEach((btn, index) => {
//   btn.addEventListener('click', () => {
//     btns.forEach((b) => {
//       b.classList.remove('menu_btn_click');

//     });
//     btns[(index + 1) % 2].classList.add('menu_btn_click');
//   });
// });




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



  //header will be fixed after 100 vh //
  //star scroll nav will opacity 0



  window.addEventListener("scroll", () =>{
    let ulDiv = document.querySelector(".links-ul");
    let navLinks = document.querySelectorAll(".nav");
    let Pageheader = document.getElementById('Pageheader');
    let targetHeight = window.innerHeight * 0.2;

    if(window.scrollY >= targetHeight) {
      // navLinks.forEach(links => links.classList.add("black"));
      ulDiv.classList.add("fix-ul");
      Pageheader.classList.add("fixed");
    } else {
      // navLinks.forEach(links => links.classList.remove("black"));
      Pageheader.classList.remove("fixed");
      ulDiv.classList.remove("fix-ul");

    }
  });


//Select all nav links and sections
const navLinks = document.querySelectorAll('.nav');
const sections = document.querySelectorAll('section');

//Click listener to manually activate link
navLinks.forEach(link => {
  link.addEventListener('click', function () {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});
//add active class while scroll
window.addEventListener('DOMContentLoaded', (event) => {
  const navLinks = document.querySelectorAll('#navbar .nav');
  const sections = document.querySelectorAll('section[id]');

  function updateActiveLink() {
      let currentSectionId = '';
      const scrollPosition = window.scrollY;
      const offset = 150;

      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop - offset && scrollPosition < sectionTop + sectionHeight - offset) {
              currentSectionId = section.getAttribute('id');
          }
      });

      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
           const lastSection = sections[sections.length - 1];
           if (lastSection) {
               currentSectionId = lastSection.getAttribute('id');
           }
      }
      else if (scrollPosition < sections[0].offsetTop - offset) {
           currentSectionId = sections[0].getAttribute('id');
      }

      navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + currentSectionId) {
              link.classList.add('active');
          }
      });
  }

  window.addEventListener('scroll', updateActiveLink);
  updateActiveLink();
});




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


  // Resume section hover effect
  let jobTitle = document.querySelector(".current_job");
  let officeCard = document.querySelector(".office_card");

  function officeCardPuppu() {
    officeCard.style.display = "block"
  }
  function removeOfficeCard() {
    officeCard.style.display = "none"

  }
  jobTitle.addEventListener("mouseover", officeCardPuppu)
  officeCard.addEventListener("mouseover", officeCardPuppu)

  jobTitle.addEventListener("mouseleave", removeOfficeCard)
  officeCard.addEventListener("mouseleave", removeOfficeCard)

  // document.querySelector('#about').scrollIntoView({
  //   behavior: 'smooth'
  // });



