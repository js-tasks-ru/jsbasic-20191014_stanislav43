/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone(obj) {
  let objJSON = JSON.stringify(obj);
  return JSON.parse(objJSON);
}
