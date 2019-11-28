/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow(m, n) {
  x = +prompt('Введите число x: ', 0);
  n = +prompt('Введите степень n: ', 0);
  if (Math.round(n) != n || n < 1) {
    return alert('Значение степени должно быть натуральным числом!');
  }

  return alert(`Число: ${x} в степени: ${n}, равно: ${x ** n}`);
}
pow();