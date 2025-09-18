
const hamburger = document.getElementById('hamburger');
const overlay = document.getElementById('overlay');

hamburger.addEventListener('click', () => {
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.classList.remove('active');
  }
});

console.log("Insure Landing Page Loaded");
