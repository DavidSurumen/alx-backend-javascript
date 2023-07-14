export default function createInt8TypedArray(length, position, value) {
  // returns a new ArrayBuffer with an Int8 value at a specific position
  if (typeof length !== 'number' || typeof position !== 'number' || typeof value !== 'number') {
    throw new TypeError('length or position or value is not a number');
  }
  if (position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new DataView(new ArrayBuffer(length), 0, length);
  buffer.setInt8(position, value);

  return buffer;
}
