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

document.querySelectorAll('.skill-card, .project-card').forEach(card => observer2.observe(card));

const educationData = [
    {
        school: "University Name",
        degree: "Bachelor of Science in Computer Science",
        location: "City, State",
        period: "2019 - 2023",
        gpa: "3.8/4.0",
        achievements: [
            "Dean's List: All semesters",
            "Senior Thesis: 'Machine Learning Applications in Healthcare'",
            "Teaching Assistant for Data Structures & Algorithms"
        ]
    },
    {
        school: "Another University",
        degree: "Associate of Arts in Liberal Arts",
        location: "City, State",
        period: "2017 - 2019",
        gpa: "3.9/4.0",
        achievements: [
            "Academic Excellence Award",
            "Student Government Representative",
            "Peer Tutor in Mathematics"
        ]
    }
];

function createEducationCard(edu) {
    return `
        <div class="education-card">
            <h3 class="school-name">${edu.school}</h3>
            <p class="degree">${edu.degree}</p>
            <div class="info-row">
                <span class="info-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    ${edu.location}
                </span>
                <span class="info-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    ${edu.period}
                </span>
                <span class="info-item">GPA: ${edu.gpa}</span>
            </div>
            <ul class="achievements">
                ${edu.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
            </ul>
        </div>
    `;
}

function renderEducation() {
    const container = document.getElementById('education-container');
    container.innerHTML = educationData.map(edu => createEducationCard(edu)).join('');
}

// Initial render
renderEducation();

// Optional: Add smooth scroll to education section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});