/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */

function showSalary(data, age) {
  let result = '';
  let someUser = data.filter(item => item.age <= age);
  for (let i = 0; i < someUser.length; i++) {
    result += someUser[i].name + ', ' + someUser[i].balance + '\n';
  }
 
  return (result.slice(0, result.length - 1));
}