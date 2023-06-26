export default function createIteratorObject(report) {
  const obj = report.allEmployees;
  const emp = [];

  for (const itm of Object.values(obj)) {
    emp.push(...itm);
  }

  let idx = -1;
  const employeesIter = {
    [Symbol.iterator]() {
      return {
        next() {
          idx += 1;
          return idx < emp.length ? { value: emp[idx], done: false } : { done: true };
        },
      };
    },
  };

  return employeesIter;
}
