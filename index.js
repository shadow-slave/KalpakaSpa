const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.overlay');
const menuContent = document.querySelector('.menu-content');
const social = document.querySelector('.social');
const menuText = document.querySelector('.menu-text');
const googleReview = document.querySelector(".google-review");


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('menu-active'); // Toggle hamburger animation
    
    if (navLinks.style.height === '100%') {
        navLinks.style.height = '0';  // Close the menu
        
        // Remove animation class when menu is closed
        menuContent.classList.remove('animate'); 
        social.classList.remove('animate'); 
        menuText.style.display = 'inline';  // Show the previous element
        googleReview.style.display = 'inline';  //show google reviews

    } else {
        navLinks.style.height = '100%'; // Open the menu
        
        // Add animation class when menu is opened
        menuContent.classList.add('animate'); 
        social.classList.add('animate'); 
        menuText.style.display = 'none';
        googleReview.style.display = 'none';
    }
});

let currentSlide = 0;

function showSlide(slideIndex) {
  const slides = document.querySelectorAll('.slide');
  if (slideIndex >= slides.length) {
    currentSlide = 0;
  } else if (slideIndex < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = slideIndex;
  }
  const slidesContainer = document.querySelector('.slides');
  slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function changeSlide(direction) {
  showSlide(currentSlide + direction);
}

// Optional: Automatic slide change every 5 seconds
setInterval(() => {
  changeSlide(1);
}, 5000);

// Initialize the slider
showSlide(currentSlide);
