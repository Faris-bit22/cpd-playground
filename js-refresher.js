const students = [
    {
        id: 1,
        name: "Amina",
        year: 3,
        grades: [9, 8, 10],
        contact: { github: "amina-dev" },
    },
    {
        id: 2,
        name: "Emir",
        year: 2,
        grades: [6, 7, 7],
    },
    {
        id: 3,
        name: "Lejla",
        year: 3,
        grades: [10, 9, 9],
        contact: { github: "lejla-codes" },
    },
    {
        id: 4,
        name: "Tarik",
        year: 3,
        grades: [7, 6, 8],
    },
];
const greet = (name, year) => {
    return `Hi ${name}, you are in year ${year}`;
};

//students.forEach((student) => {
//    console.log(greet(student.name, student.year));
//});
students.forEach(({ name, year }) => {
    console.log(greet(name, year));
});
// Task 6 - Array.map()

const studentNames = students.map((student) => student.name);

console.log("Student names:", studentNames);
// Task 7 - Array.filter()

const thirdYearStudents = students.filter(
    (student) => student.year === 3
);

const thirdYearNames = thirdYearStudents.map(
    (student) => student.name
);

console.log("Third-year students:", thirdYearNames);