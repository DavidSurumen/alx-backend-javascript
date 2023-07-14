export default function updateUniqueItems(map) {
  // returns an updated map for all items with initial quantity of 1, as 100.
  if (!(map instanceof Map)) throw new Error('Cannot process');

  map.forEach((val, key) => {
    if (val === 1) map.set(key, 100);
  });
}
