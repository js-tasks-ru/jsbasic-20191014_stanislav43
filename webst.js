const inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73';
/**
 * Найти min/max в произвольной строке
 * @param   {String} входные данные
 * @returns {{min:Number, max:Number}}  объект
 */
function getMinMax(string) {
  //return console.log()
  //(parseFloat(string));
  let arr = string.split(' ');
  let num = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (parseFloat(arr[i]) == NaN) {
      arr[i] = parseFloat(arr[i]);
    } else {
      arr[i] = 0;
    }
    //num = (parseFloat(arr[i]) != NaN) ? parseFloat(arr[i]) : 0;
    //console.log(num);
  }
  console.log(arr);
}

getMinMax(inputData); // ожидается [-5.8, 73]
