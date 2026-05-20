/**
 * Mobile Navigation Toggle
 * Handles the menu button click and closes menu when links are clicked
 */

document.addEventListener('DOMContentLoaded', function () {
    const btnMobileNav = document.querySelector('.btn-mobile-nav');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav-link');

    // Toggle menu when hamburger button is clicked
    btnMobileNav.addEventListener('click', function () {
        mainNav.classList.toggle('nav-open');
    });

    // Close menu when a navigation link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            mainNav.classList.remove('nav-open');
        });
    });

    // Close menu when clicking outside the nav
    document.addEventListener('click', function (event) {
        const isClickInsideNav = mainNav.contains(event.target);
        const isClickOnButton = btnMobileNav.contains(event.target);

        if (!isClickInsideNav && !isClickOnButton && mainNav.classList.contains('nav-open')) {
            mainNav.classList.remove('nav-open');
        }
    });

    // Handle window resize - close menu on larger screens
    window.addEventListener('resize', function () {
        if (window.innerWidth > 704) { // 44em = 704px (44 * 16px)
            mainNav.classList.remove('nav-open');
        }
    });
});
