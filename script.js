function onClick(event) {
  'use strict';
  event.preventDefault();

  var quantityInput = document.getElementById('quantity');
  var productSelect = document.getElementById('product');

  var raw = quantityInput.value;

  // Проверка корректности ввода: только целое неотрицательное число
  if (raw.match(/^\d+$/) === null) {
    alert('Ошибка: введите целое положительное число.');
    return;
  }

  var quantity = parseInt(raw, 10);
  var price = parseInt(productSelect.value, 10);
  var total = price * quantity;

  alert('Стоимость заказа: ' + total + ' руб.');
}

window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  var form = document.getElementById('order-form');
  form.addEventListener('submit', onClick);
});