/**
 * @param {string} path relative path to image
 *
 * @return {string} absolute path to image
 *
 */
export default function getImageUrl(path) {
  if (!path) return null;

  return `{https://www.cryptocompare.com/}${path}`;
}

