document.addEventListener('DOMContentLoaded', () => {
  const increaseButtons = document.querySelectorAll('.increase');
  const decreaseButtons = document.querySelectorAll('.decrease');
  const itemQtys = document.querySelectorAll('.item-qty');
  const itemTotals = document.querySelectorAll('.item-total');
  const totalFinal = document.querySelector('.total-final span:last-child');

  const formatRupiah = (value) => {
    return 'Rp ' + value.toLocaleString('id-ID');
  };

  const recalculateTotal = () => {
    let total = 0;
    itemTotals.forEach((item) => {
      total += parseInt(item.getAttribute('data-total')) || 0;
    });
    totalFinal.textContent = formatRupiah(total);
  };

  increaseButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const qtySpan = document.querySelector(`.item-qty[data-id="${id}"]`);
      const totalSpan = document.querySelector(`.item-total[data-id="${id}"]`);
      const unitPrice = parseInt(totalSpan.getAttribute('data-price'));

      let currentQty = parseInt(qtySpan.textContent);
      currentQty++;
      qtySpan.textContent = currentQty;

      const newTotal = unitPrice * currentQty;
      totalSpan.setAttribute('data-total', newTotal);
      totalSpan.textContent = formatRupiah(newTotal);

      recalculateTotal();
    });
  });

  decreaseButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const qtySpan = document.querySelector(`.item-qty[data-id="${id}"]`);
      const totalSpan = document.querySelector(`.item-total[data-id="${id}"]`);
      const unitPrice = parseInt(totalSpan.getAttribute('data-price'));

      let currentQty = parseInt(qtySpan.textContent);
      if (currentQty > 1) {
        currentQty--;
        qtySpan.textContent = currentQty;

        const newTotal = unitPrice * currentQty;
        totalSpan.setAttribute('data-total', newTotal);
        totalSpan.textContent = formatRupiah(newTotal);

        recalculateTotal();
      }
    });
  });

  // Initialize totals
  itemTotals.forEach((item) => {
    const unitPrice = parseInt(item.getAttribute('data-price'));
    const id = item.getAttribute('data-id');
    const qty = parseInt(document.querySelector(`.item-qty[data-id="${id}"]`).textContent);
    const total = unitPrice * qty;
    item.setAttribute('data-total', total);
    item.textContent = formatRupiah(total);
  });

  recalculateTotal();
});
