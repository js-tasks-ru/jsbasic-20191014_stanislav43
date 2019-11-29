/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow(m, n) {
  m = +prompt('Введите число m: ', 0);
  n = +prompt('Введите степень n: ', 0);
  if (Math.round(n) != n || n < 1) {
    return alert('Значение степени должно быть натуральным числом!');
  }
  return alert(`Число: ${m} в степени: ${n}, равно: ${m ** n}`);
}
pow();