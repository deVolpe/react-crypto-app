import isEmpty from './isEmpty';

const getFirstWordFromString = (string) => {
  if (isEmpty(string)) return null;

  const _str = string.trim().toLowerCase().split(' ');

  return _str.shift();
};

export default getFirstWordFromString;
