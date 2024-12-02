document.getElementById('hamburger-menu').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');

    // Change le statut aria-expanded pour l'accessibilité
    const isExpanded = this.getAttribute('aria-expanded') === 'true' || false;
    this.setAttribute('aria-expanded', !isExpanded);
});

document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('submit-form').addEventListener('click', (e) => {
    e.preventDefault();
    const form = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    }
    submitForm(form).then((response) => {
        alert('Email sent')
    }).catch((error) => {
        console.log('error:', error);
        alert('Error with Email')
    });
})

// Profile picture URLs
const profilePictures = [
    'img/profile2.jpeg',
    'img/profile.png',
];

let currentIndex = 0;
const profilePicElement = document.getElementById('profile-pic');

// Function to change profile picture with a smooth transition
function changeProfilePicture() {
    // Fade out effect
    profilePicElement.style.transition = 'opacity 0.5s';
    profilePicElement.style.opacity = 0;

    setTimeout(() => {
        // Update the profile picture
        currentIndex = (currentIndex + 1) % profilePictures.length;
        profilePicElement.src = profilePictures[currentIndex];

        // Fade in effect
        profilePicElement.style.opacity = 1;
    }, 500); // Delay to wait for fade out before changing the picture
}

// Submit Contact form
async function submitForm(form) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(form),
    }
    return fetch('http://localhost:3000/contact', requestOptions)
}

// Start the picture rotation every 5 seconds
setInterval(changeProfilePicture, 5000);
