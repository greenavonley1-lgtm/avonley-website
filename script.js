document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    setTimeout(() => {
        fadeElements.forEach(element => {
            element.classList.add('appear');
        });
    }, 200);

    const dropdown = document.querySelector('.dropdown');
    const trigger = document.querySelector('.dropdown-trigger');

    trigger.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (!dropdown.classList.contains('show')) {
                e.preventDefault();
                dropdown.classList.add('show');
            }
        }
    });

    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });
});