// Typing Animation for Subtitle
const tagline = "Innovating at the intersection of technology and business.";
let i = 0;
function typeWriter() {
    if (i < tagline.length) {
        document.getElementById("typing-text").innerHTML += tagline.charAt(i);
        i++;
        setTimeout(typeWriter, 50); // Typing speed
    }
}
window.onload = typeWriter;

// Accordion for Reports
document.querySelectorAll('.list-item-header').forEach(header => {
    header.addEventListener('click', () => {
        const accordionContent = header.nextElementSibling;
        const isOpen = accordionContent.classList.contains('is-open');

        document.querySelectorAll('.accordion-content').forEach(content => {
            content.classList.remove('is-open');
        });

        if (!isOpen) {
            accordionContent.classList.add('is-open');
        }
    });
});

// Scroll-based fade-in for Timeline
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5 // Trigger when 50% of the item is visible
});

document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
