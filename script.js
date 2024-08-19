document.addEventListener('DOMContentLoaded', function () {
    // Smooth Scroll
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form Submission (for demonstration purposes)
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission behavior
        alert('Form submitted!'); // Simple alert on form submission
    });

    // Add class for navigation hover effect
    const navItems = document.querySelectorAll('nav ul li a');

    navItems.forEach(item => {
        item.addEventListener('mouseover', function () {
            this.classList.add('nav-hover');
        });
        item.addEventListener('mouseout', function () {
            this.classList.remove('nav-hover');
        });
    });

    // Dark Mode Toggle (Optional)
    const darkModeToggle = document.createElement('button');
    darkModeToggle.textContent = 'Toggle Dark Mode';
    darkModeToggle.classList.add('dark-mode-toggle');
    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
    });
});
