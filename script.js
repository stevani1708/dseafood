// Anda bisa menambahkan fungsionalitas interaktif di sini jika dibutuhkan.
// Misalnya, untuk menambahkan item ke keranjang saat klik ikon plus.

document.querySelectorAll('.fa-plus').forEach(icon => {
  icon.addEventListener('click', () => {
    alert('Ditambahkan ke keranjang!');
  });
});
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
