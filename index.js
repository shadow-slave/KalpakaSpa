const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.overlay');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('menu-active'); // Toggle hamburger animation
    if (navLinks.style.height === '100%') {
        navLinks.style.height = '0';  // Close the menu
    } else {
        navLinks.style.height = '100%'; // Open the menu
    }
});
