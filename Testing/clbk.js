function displayStudent(name) {
    console.log("Student name is: " + name);
}

function getStudent(setName) {
    setName("Yazh");
}

getStudent(displayStudent);
