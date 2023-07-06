export default function updateStudentGradeByCity(students, city, newGrades) {
  const idsArray = newGrades.map((st) => st.studentId);

  return students.filter((stud) => stud.location === city)
    .map((stud) => {
      const student = stud;

      if (idsArray.includes(student.id)) {
        student.grade = newGrades.filter((st) => st.studentId === student.id)[0].grade;
      } else {
        student.grade = 'N/A';
      }
      return student;
    });
}
