// Load the header.html
fetch("../components/header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("Pageheader").innerHTML = data;
    initHeaderMenu(); // Activate header functionality after load
  });
  //fetch footer
fetch("../components/footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("pageFooter").innerHTML = data;
});
//fecth preloder
fetch("../components/loader.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("preloder_div").innerHTML = data;
});

function initHeaderMenu() {
  let btns = document.querySelectorAll(".menu_btn");
  let sideBar = document.querySelector(".side_nav_div");
  let rightSideBlock = document.querySelector(".block_right_div");
  let Pageheader = document.getElementById('Pageheader');

  btns[0].addEventListener("click", () => {
    btns.forEach((b) => b.classList.remove("menu_btn_click"));
    btns[1].classList.add("menu_btn_click");
    if(window.innerWidth > 768) {
      btns[1].style.left = "38rem";
    } else {
      btns[1].style.left = "20rem";
    }
  
    sideBar.classList.add("side_nav_div_visible");
    document.body.style.overflow = "hidden";
    rightSideBlock.classList.add("block_right_div_visible");
  });

  function removeSideBar() {
    btns.forEach((b) => b.classList.remove("menu_btn_click"));
    btns[0].classList.add("menu_btn_click");
    sideBar.classList.remove("side_nav_div_visible");
    document.body.style.overflow = "auto";
    rightSideBlock.classList.remove("block_right_div_visible");
  }

  btns[1].addEventListener("click", () => {
    btns[1].style.left = "4rem";
    removeSideBar();
  });

  rightSideBlock.addEventListener("click", () => {
    removeSideBar();
    btns[1].style.left = "4rem";
  });
}



  //header will be fixed after 100 vh //
  //star scroll nav will opacity 0

  window.addEventListener("scroll", () =>{
    let ulDiv = document.querySelector(".links-ul");
    let navLinks = document.querySelectorAll(".nav");
    let Pageheader = document.getElementById('Pageheader');
    let targetHeight = window.innerHeight * 0.1;

    if(window.scrollY >= targetHeight) {
      // navLinks.forEach(links => links.classList.add("black"));
      // ulDiv.classList.add("fix-ul");
      if(window.innerWidth > 768) {
        Pageheader.classList.add("fixed");
      }
      
    } else {
      // navLinks.forEach(links => links.classList.remove("black"));
      Pageheader.classList.remove("fixed");
      // ulDiv.classList.remove("fix-ul");

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



///preloder
// Function to hide preloader
// function hidePreloader() {
//   const preloader = document.getElementById('preloader');
//   preloader.classList.add('hide');
//   document.body.classList.remove('loading');
//   setTimeout(() => {
//     preloader.style.display = 'none';
//   }, 800); // match transition
// }

// // When DOM is ready (safer than window.load)
// document.addEventListener('DOMContentLoaded', () => {
//   // Set a fallback timeout in case window.load doesn’t fire
//   setTimeout(hidePreloader, 1500); // fallback after 1.5s
// });

// // When everything (including images) is loaded
// window.addEventListener('load', () => {
//   hidePreloader(); // normal hide
// });
// Wait for the DOM to load before binding the event
// Wait for the DOM to load before binding the event
document.addEventListener("DOMContentLoaded", function() {
  const preloader = document.getElementById('preloader');
  const startBtn = document.getElementById('startBtn');

  console.log('Start Button:', startBtn);  // Log for debugging
  console.log('Preloader:', preloader);  // Log for debugging

  if (startBtn) {
    startBtn.addEventListener('click', function() {
      console.log("Button clicked"); // Debugging log to see if click is detected

      // Fade out the preloader smoothly
      preloader.style.transition = 'opacity 1s';  // Smooth transition
      preloader.style.opacity = '0';

      // Wait for the fade-out to finish before hiding the preloader
      setTimeout(function() {
        preloader.style.display = 'none';  // Hide preloader after fade-out
      }, 1000); // Match the time with the CSS transition duration (1s)
    });
  } else {
    console.log('Button not found!');
  }
});
