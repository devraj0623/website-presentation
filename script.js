// 1. Time-aware Greeting Engine
const greetingElement = document.getElementById('dynamic-greeting');
const currentHour = new Date().getHours();
let greetingText = 'Welcome to my profile!';

if (currentHour < 12) {
  greetingText = 'Good Morning! Welcome to my profile.';
} else if (currentHour < 18) {
  greetingText = 'Good Afternoon! Welcome to my profile.';
} else {
  greetingText = 'Good Evening! Welcome to my profile.';
}
greetingElement.textContent = greetingText;

// 2. Class-Based Light/Dark Theme Engine
const toggleBtn = document.querySelector('#dark-mode-toggle');

toggleBtn.addEventListener('click', function() {
  // Gracefully toggles the .dark-mode design system overrides on body element
  document.body.classList.toggle('dark-mode');
  
  // Console logging audit layer
  console.log("Dark mode toggled. State Active: " + document.body.classList.contains('dark-mode'));
});

// 3. Decorative Micro-Interactions (Interactive Headline)
const nameHeader = document.getElementById('user-name');
nameHeader.addEventListener('click', () => {
  nameHeader.style.color = '#3498db';
  setTimeout(() => {
    nameHeader.style.color = '';
  }, 1000);
});

// =========================================================
// 4. NEW: Photo Gallery Array & Loop Implementation
// =========================================================

// Array holding your provided picture URLs
const devrajImages = [
  'https://i.postimg.cc/vZ5D4Vb8/Whats-App-Image-2026-06-06-at-18-27-43.jpg',
  'https://i.postimg.cc/hjVqr9ZG/Whats-App-Image-2026-06-06-at-18-27-21.jpg',
  'https://i.postimg.cc/sxKq6KYx/Whats-App-Image-2026-06-06-at-18-25-59.jpg',
  'https://i.postimg.cc/NGbnwJHW/Whats-App-Image-2026-06-06-at-18-26-38.jpg'
];

// Tracks the current active index location
let currentIndex = 0;

// Gather DOM targets
const galleryImg = document.getElementById('gallery-img');
const nextBtn = document.getElementById('next-btn');

// Event listener loops through images seamlessly
nextBtn.addEventListener('click', () => {
  // Increment index pointer
  currentIndex++;

  // Reset back to index 0 if the loop exceeds array length
  if (currentIndex >= devrajImages.length) {
    currentIndex = 0;
  }

  // Update image source attribute cleanly
  galleryImg.src = devrajImages[currentIndex];

  // Log track state status to console
  console.log(`Gallery actively switched to image index: [${currentIndex}]`);
});