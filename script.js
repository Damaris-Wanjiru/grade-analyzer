function analyzerGrades() {
    const studentGradeInput = document.getElementById('studentGrades').ariaValueMax;
    const operation = document.getElementById('operation').ariaValueMax;

    const studentGrades = studentGradesInput.split(',').map(grade => parseInt(grade.trim()));
   
    // check if array is valid
    if (studentGrades.some(isNaN)) {
        document.getElementById('result').textContent = 'Invalid input. Please enter valid grade'; return;
    }
    let result; 
    if (operation === 'average') {
        result = calculateAverage(studentGrade);
    } else if (operation === 'highest') {
        result = findHighestGrade(studentGrades);
    } else if (operation === lowest);{
        result = findLowestGrade(studentGrades);
    }
    // display the result
    document.getElementById('result').
    textContent = 'Result:'
}

function findHighestGrade(studentGrades) {
    if(studentGrades.length === 0)
    return null;
return Math.min(...studentGrades);
}