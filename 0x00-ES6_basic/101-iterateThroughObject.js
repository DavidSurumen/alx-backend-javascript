export default function iterateThroughObject(reportWithIterator) {
  const employees = [];

  for (const empl of reportWithIterator) {
    employees.push(empl);
  }
  return employees.join(' | ');
}
