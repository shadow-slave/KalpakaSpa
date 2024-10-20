const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.overlay');
const menuContent = document.querySelector('.menu-content');
const social = document.querySelector('.social');
const menuText = document.querySelector('.menu-text');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('menu-active'); // Toggle hamburger animation
    
    if (navLinks.style.height === '100%') {
        navLinks.style.height = '0';  // Close the menu
        
        // Remove animation class when menu is closed
        menuContent.classList.remove('animate'); 
        social.classList.remove('animate'); 
        menuText.style.display = 'inline';  // Show the previous element

    } else {
        navLinks.style.height = '100%'; // Open the menu
        
        // Add animation class when menu is opened
        menuContent.classList.add('animate'); 
        social.classList.add('animate'); 
        menuText.style.display = 'none';
    }
});
