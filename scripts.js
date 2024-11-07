document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

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

// Start the picture rotation every 5 seconds
setInterval(changeProfilePicture, 5000);
