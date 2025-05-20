// Anda bisa menambahkan fungsionalitas interaktif di sini jika dibutuhkan.
// Misalnya, untuk menambahkan item ke keranjang saat klik ikon plus.

document.querySelectorAll('.fa-plus').forEach(icon => {
  icon.addEventListener('click', () => {
    alert('Ditambahkan ke keranjang!');
  });
});
