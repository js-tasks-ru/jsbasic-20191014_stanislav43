/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow(m, n) {
  if (Math.round(n) != n || n < 1) {
    return alert('Значение степени должно быть натуральным числом!');
  }
  return (m ** n);
}