const students = [
    {
        student1: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student2: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student3: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    }
];

const calculateAverage = (studentObj) => {
    const scores = Object.values(studentObj);
    const sum = scores.reduce((acc, score) => acc + score, 0);
    return Math.round(sum / scores.length);
};

const result = students.map(student => {
    const [studentName, studentData] = Object.entries(student)[0];
    const average = calculateAverage(studentData);
    return { [studentName]: { average } };
});

console.log(result);
