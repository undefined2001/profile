document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.querySelector('.overlay');

    toggleButton.addEventListener('click', () => {
        const isVisible = navLinks.getAttribute('data-visible') === 'true';

        // Toggle the visibility of the navigation and overlay
        navLinks.setAttribute('data-visible', !isVisible);
        overlay.style.display = isVisible ? 'none' : 'block';
    });

    // Close the menu when overlay is clicked
    overlay.addEventListener('click', () => {
        navLinks.setAttribute('data-visible', 'false');
        overlay.style.display = 'none';
    });
});



const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entry.target); // Check which elements are being observed
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });


document.querySelectorAll('.skill-card, .project-card').forEach(card => observer.observe(card));

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });



// Optional: Add smooth scroll to education section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});