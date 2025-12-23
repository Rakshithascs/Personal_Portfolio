function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// ===== TYPING EFFECT =====
const texts = ["Web Developer", "Full Stack Developer"];
let index = 0;
let charIndex = 0;
let isDeleting = false;

const typingText = document.getElementById("typing-text");

function typeEffect() {
    const current = texts[index];

    if (!isDeleting) {
        typingText.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
            setTimeout(() => isDeleting = true, 1200);
        }
    } else {
        typingText.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % texts.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 60 : 100);
}

typeEffect();
d// CONTACT FORM SUCCESS MESSAGE
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    document.getElementById("success-msg").style.display = "block";

    this.reset();

    setTimeout(() => {
        document.getElementById("success-msg").style.display = "none";
    }, 3000);
});