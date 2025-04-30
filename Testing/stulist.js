// studentManager.js
const fs = require('fs');
const readline = require('readline');
const path = './students.json';

// Utility functions
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = (query) => new Promise(resolve => rl.question(query, resolve));

// Load students
const loadStudents = async () => {
    try {
        const data = await fs.promises.readFile(path, 'utf-8');
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
};

// Save students
const saveStudents = async (students) => {
    await fs.promises.writeFile(path, JSON.stringify(students, null, 2));
};

// 1. Add a new student
const addStudent = async () => {
    const name = await askQuestion('Enter name: ');
    const age = parseInt(await askQuestion('Enter age: '), 10);
    const marks = parseFloat(await askQuestion('Enter marks: '));
    const city = await askQuestion('Enter city: ');

    if (isNaN(age) || isNaN(marks)) {
        console.log('Invalid input. Age and Marks must be numbers.');
        return;
    }

    const students = await loadStudents();
    const newStudent = { id: Date.now(), name, age, marks, city };
    students.push(newStudent);
    await saveStudents(students);
    console.log('Student added successfully.');
};

// 2. List all students
const listStudents = async () => {
    const students = await loadStudents();
    students.forEach(s => console.log(s));
};

// 3. Find students with marks > 80
const findTopStudents = async () => {
    const students = await loadStudents();
    const topStudents = students.filter(s => s.marks > 80);
    topStudents.forEach(s => console.log(s));
};

// 4. Sort students
const sortStudents = async () => {
    const choice = await askQuestion('Sort by (name/marks): ');
    const students = await loadStudents();

    if (choice === 'name') {
        students.sort((a, b) => a.name.localeCompare(b.name));
    } else if (choice === 'marks') {
        students.sort((a, b) => b.marks - a.marks);
    } else {
        console.log('Invalid choice');
        return;
    }

    students.forEach(s => console.log(s));
};

// 5. Update a student
const updateStudent = async () => {
    const name = await askQuestion('Enter name of student to update: ');
    const students = await loadStudents();
    const index = students.findIndex(s => s.name === name);

    if (index === -1) {
        console.log('Student not found.');
        return;
    }

    const newMarks = parseFloat(await askQuestion('Enter new marks: '));
    if (!isNaN(newMarks)) students[index].marks = newMarks;

    await saveStudents(students);
    console.log('Student updated.');
};

// 6. Delete a student
const deleteStudent = async () => {
    const name = await askQuestion('Enter name of student to delete: ');
    const students = await loadStudents();
    const filtered = students.filter(s => s.name !== name);
    await saveStudents(filtered);
    console.log('Student deleted if existed.');
};

// 7. Callback example
const readFileWithCallback = (callback) => {
    fs.readFile(path, 'utf-8', (err, data) => {
        if (err) return callback(err);
        callback(null, JSON.parse(data));
    });
};

// 8. Promises example
const readFileWithPromise = () => {
    return fs.promises.readFile(path, 'utf-8')
        .then(data => JSON.parse(data));
};

// 9. Async/Await example
const showStudentDataAsync = async () => {
    console.log('Loading student data...');
    await new Promise(res => setTimeout(res, 1000));
    const students = await loadStudents();
    console.log('Student Data:', students);
};

// Main menu
const main = async () => {
    while (true) {
        console.log(`\n=== Student Manager ===\n1. Add Student\n2. List Students\n3. Top Students (>80 marks)\n4. Sort Students\n5. Update Student\n6. Delete Student\n7. Callback Demo\n8. Promise Demo\n9. Async/Await Demo\n0. Exit`);

        const choice = await askQuestion('Choose an option: ');
        switch (choice) {
            case '1': await addStudent(); break;
            case '2': await listStudents(); break;
            case '3': await findTopStudents(); break;
            case '4': await sortStudents(); break;
            case '5': await updateStudent(); break;
            case '6': await deleteStudent(); break;
            case '7': readFileWithCallback((err, data) => {
                        if (err) console.error('Callback error:', err);
                        else console.log('Callback Data:', data);
                      });
                      break;
            case '8': readFileWithPromise()
                        .then(data => console.log('Promise Data:', data))
                        .catch(err => console.error('Promise error:', err));
                      break;
            case '9': await showStudentDataAsync(); break;
            case '0': rl.close(); return;
            default: console.log('Invalid choice');
        }
    }
};

main();
