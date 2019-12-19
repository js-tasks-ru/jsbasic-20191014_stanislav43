/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let numStr = '';
  for (let i = 0; i < str.length; i++) {
    if (isFinite(str[i]) || str[i] == '-' || str[i] == '.') {
      numStr += str[i];
    } else {
      numStr += ';';
    }
  }
  let arr = numStr.split(';');
  for (let i = 0; i < arr.length; i++) {
    arr = arr.map(item => isNaN(parseFloat(item)) ? arr.splice(i, item) : parseFloat(item)); 
  }
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let result = {min, max};
  return result;
}