// Typing Animation for Subtitle
const tagline = "Innovating at the intersection of technology and business.";
let i = 0;
function typeWriter() {
    if (i < tagline.length) {
        document.getElementById("typing-text").innerHTML += tagline.charAt(i);
        i++;
        setTimeout(typeWriter, 40); // Typing speed
    }
}
window.onload = typeWriter;

// Accordion for Reports
document.querySelectorAll('.list-item-header').forEach(header => {
    header.addEventListener('click', () => {
        const listItem = header.closest('.list-item');
        const accordionContent = listItem.querySelector('.accordion-content');
        const accordionIcon = listItem.querySelector('.accordion-icon');
        const isCurrentlyOpen = accordionContent.classList.contains('is-open');

        document.querySelectorAll('.list-item').forEach(item => {
            const content = item.querySelector('.accordion-content');
            const icon = item.querySelector('.accordion-icon');
            
            content.classList.remove('is-open');
            item.classList.remove('is-open');
            if (icon) {
                icon.classList.remove('is-rotated');
            }
        });

        // Toggle the clicked accordion
        if (!isCurrentlyOpen) {
            accordionContent.classList.add('is-open');
            listItem.classList.add('is-open');
            if (accordionIcon) {
                accordionIcon.classList.add('is-rotated');
            }
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
