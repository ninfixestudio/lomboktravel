const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
    }
    else {
        navbar.classList.remove('scrolled');
    }
});

// Add event listener to the hamburger menu
const menu = document.querySelector('.nav-menu');
const toggle = document.querySelector('.menu-toggle');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    toggle.classList.toggle('active');
});

// Close the menu when a link is clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');

        toggle.classList.remove('active');
    });
});

// Kalau scroll otomatis menutup menu
window.addEventListener('scroll', () => {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        toggle.classList.remove('active');
    }
});