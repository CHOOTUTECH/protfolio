  // Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');

menuBtn.addEventListener('click', () => {
    navbar.querySelector('.nav-links').classList.toggle('active');
});

// Newsletter Form Submission
const newsletterForm = document.getElementById('newsletter-form');
const emailInput = document.getElementById('email-input');
const successMsg = document.getElementById('success-msg');

newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page reload
    
    if(emailInput.value.trim() !== '') {
        // Show success message
        successMsg.style.display = 'block';
        emailInput.value = ''; // Clear input
        
        // Hide message after 3 seconds
        setTimeout(() => {
            successMsg.style.display = 'none';
        }, 3000);
    }
});