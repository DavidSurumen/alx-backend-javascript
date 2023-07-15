// WeakMap that tracks the number of times 'queryAPI' function is called for each endpoint
const weakMap = new WeakMap();

function queryAPI(endpoint) {
  // set endpoint key with value 0 in the WeakMap if not exist
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  // increment value of the key for each function call
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);

  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }

  return weakMap.get(endpoint);
}

export { weakMap, queryAPI };
