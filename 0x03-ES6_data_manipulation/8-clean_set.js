export default function cleanSet(set, startString) {
  // returns a string of all the set values that start with a specific string
  if (typeof startString !== 'string') return '';
  if (!(set instanceof Set)) throw new TypeError('set must be a Set object');

  const result = [];

  for (const val of set.values()) {
    if (typeof val === 'string' && val.startsWith(startString)) {
      const substr = val.substring(startString.length);

      if (substr !== val) result.push(substr);
    }
  }
  return result.join('-');
}
