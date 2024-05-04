window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(0, 0, 255, 0.8)'; // Darker blue gradient when scrolled
    } else {
        navbar.style.backgroundColor = 'rgba(0, 0, 255, 0.5)'; // Original blue gradient when not scrolled
    }
});
function calculateDaysBetweenDates(begin, end) {
