/**
 * Перемешивание массива (на основе алгоритма Фишера-Йетса)
 * @param {Array} array - Массив, который нужно перемешать
 * @return {Array} Перемешенный массив
 */
export const mixArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let k = Math.floor(Math.random() * (i + 1));
    let swap = array[k];
    array[k] = array[i];
    array[i] = swap;
  }

  return array;
};

/**
 * Копирования значений всех собственных перечисляемых свойств исходных объектов (a и b) в целевой объект
 * @param {Object} a - Исходный объект
 * @param {Object} b - Исходный объект
 * @return {Object} Получившийся целевой объект
 */
export const extendObject = (a, b) => Object.assign({}, a, b);
