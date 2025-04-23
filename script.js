
// Event Handling for Hero Section Button
const ctaButton = document.getElementById('ctaButton');
let clickCount = 0;

ctaButton.addEventListener('click', () => {
  clickCount++;
  ctaButton.textContent = `Clicked ${clickCount} Times!`;
  ctaButton.classList.toggle('bg-yellow-500');
});

// Hover effect for CTA button
ctaButton.addEventListener('mouseenter', () => {
  ctaButton.classList.add('scale-105');
});
ctaButton.addEventListener('mouseleave', () => {
  ctaButton.classList.remove('scale-105');
});

// Double-click easter egg
ctaButton.addEventListener('dblclick', () => {
  alert('🎉 Secret Unlocked! Use code TECHFIX2025 for a discount!');
});

// Keypress detection (for fun interactivity)
document.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    ctaButton.click(); // Simulate button click on Enter key
  }
});

// Image Gallery Interactivity
const galleryImages = document.querySelectorAll('.gallery-img');
const galleryCaption = document.getElementById('galleryCaption');

galleryImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    galleryCaption.textContent = `Viewing ${img.alt} Process`;
    galleryImages.forEach(i => i.classList.remove('border-4', 'border-blue-600'));
    img.classList.add('border-4', 'border-blue-600');
  });
});

// Tabs Functionality
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Update active button
    tabButtons.forEach(btn => btn.classList.remove('active', 'bg-blue-600', 'text-white'));
    button.classList.add('active', 'bg-blue-600', 'text-white');
    
    // Show corresponding content
    const tabId = button.getAttribute('data-tab');
    tabContents.forEach(content => {
      content.classList.add('hidden');
      if (content.id === tabId) {
        content.classList.remove('hidden');
      }
    });
  });
});

// Form Validation
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

// Real-time validation
nameInput.addEventListener('input', () => {
  if (nameInput.value.trim() === '') {
    nameError.classList.remove('hidden');
  } else {
    nameError.classList.add('hidden');
  }
});

emailInput.addEventListener('input', () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailError.classList.remove('hidden');
  } else {
    emailError.classList.add('hidden');
  }
});

passwordInput.addEventListener('input', () => {
  if (passwordInput.value.length < 8) {
    passwordError.classList.remove('hidden');
  } else {
    passwordError.classList.add('hidden');
  }
});

// Form submission
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let isValid = true;

  if (nameInput.value.trim() === '') {
    nameError.classList.remove('hidden');
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailError.classList.remove('hidden');
    isValid = false;
  }

  if (passwordInput.value.length < 8) {
    passwordError.classList.remove('hidden');
    isValid = false;
  }

  if (isValid) {
    alert('Form submitted successfully!');
    contactForm.reset();
  }
});
