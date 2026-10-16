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

// Task 8 - Average Grades

const average = (grades) => {
    const sum = grades.reduce((total, grade) => total + grade, 0);
    return sum / grades.length;
};

const studentsWithAverages = students.map((student) => ({
    ...student,
    average: average(student.grades),
}));

studentsWithAverages.forEach((student) => {
    console.log(`${student.name}: ${student.average.toFixed(2)}`);
});

// Task 9 - Object Spread

const emir = students.find((student) => student.name === "Emir");

const updatedEmir = {
    ...emir,
    year: 3,
};

console.log(`Original: ${emir.name} is in year ${emir.year}`);
console.log(`Updated: ${updatedEmir.name} is in year ${updatedEmir.year}`);

// Task 10 - Optional Chaining and Nullish Coalescing

students.forEach((student) => {
    const github = student.contact?.github ?? "no GitHub";

    console.log(`${student.name}: ${github}`);
});

// Task 11 - Async/Await and Fetch API

const loadUser = async (id) => {
    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );

        if (!response.ok) {
            throw new Error("Failed to fetch user");
        }

        const user = await response.json();

        console.log(`User ${id}: ${user.name}`);
    } catch (error) {
        console.log(`Could not load user ${id}`);
    }
};

loadUser(1);