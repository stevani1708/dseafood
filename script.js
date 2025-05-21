// Anda bisa menambahkan fungsionalitas interaktif di sini jika dibutuhkan.
// Misalnya, untuk menambahkan item ke keranjang saat klik ikon plus.

document.querySelectorAll('.fa-plus').forEach(icon => {
  icon.addEventListener('click', () => {
    alert('Ditambahkan ke keranjang!');
  });
});
  document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
      hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('open');
      });
    }
  });
