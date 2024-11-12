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

//Contact form
document.getElementById("form-btn").addEventListener("click", (event) => {

    event.preventDefault();
    
    const [name, email, subject, message] = getFormValues();
    const valid = validateContactForm(name, email, subject, message);

    if (valid) {   
        const form = {
            name: name,
            email: email,
            subject: subject,
            message: message,
        };
        // Fetch data to server
        console.log(form);
        resetFormValues();                  // Reset only if server saved data
    }
    
});
function getFormValues() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    return [name, email, subject, message];
}

function validateContactForm(name, email, subject, message) {

    const name_trimmed = name.trim();
    const email_trimmed = email.trim();
    const subject_trimmed = subject.trim();
    const message_trimmed = message.trim();
  
    // Regex for email and phone validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Validation messages
    if (name_trimmed === "") {
      alert("Name is required.");
      return false;
    }
  
    if (email_trimmed === "") {
      alert("Email is required.");
      return false;
    } else if (!emailRegex.test(email_trimmed)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    if (subject_trimmed === "") {
        alert("Subject is required.");
        return false;
    }
  
    if (message_trimmed === "") {
      alert("Message is required.");
      return false;
    } else if (message_trimmed.length < 10) {
      alert("Message must be at least 10 characters long.");
      return false;
    }
  
    // If all validations pass
    alert("Form submitted successfully!");
    
    return true;
}

function resetFormValues() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
}