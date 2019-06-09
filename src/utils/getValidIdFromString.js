import isEmpty from './isEmpty';
/**
 * @description Return valid id for label and input tags
 *
 * @param {string} string
 *
 * @return {string} id
 */
const getValidIdFromString = (string) => {
  if (isEmpty(string)) return null;

  const _str = string.trim().toLowerCase().split(' ');

  if (_str.length === 1) {
    return _str.shift();
  }
  return _str.join('-');
};

export default getValidIdFromString;
