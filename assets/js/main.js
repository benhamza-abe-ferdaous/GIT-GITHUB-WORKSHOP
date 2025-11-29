// Main JavaScript for Animations

document.addEventListener('DOMContentLoaded', () => {
    
    // Select all elements that have animation classes
    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .fade-up');

    // Create an Intersection Observer
    // This watches elements to see if they are on screen
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is visible in the viewport
            if (entry.isIntersecting) {
                // Add the 'visible' class to trigger CSS animation
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Start observing each element
    animatedElements.forEach(el => observer.observe(el));

    console.log("IT Geeks Page Loaded - Animations Initialized");
});

