function calculateAverage() {
    const subject1 = parseFloat(document.getElementById('subject1').value);
    const subject2 = parseFloat(document.getElementById('subject2').value);
    const subject3 = parseFloat(document.getElementById('subject3').value);
    const subject4 = parseFloat(document.getElementById('subject4').value);
    const subject5 = parseFloat(document.getElementById('subject5').value);

    if (isNaN(subject1) || isNaN(subject2) || isNaN(subject3) || isNaN(subject4) || isNaN(subject5)) {
        alert('Please enter valid numbers for all subjects.');
        return;
    }

    const average = (subject1 + subject2 + subject3 + subject4 + subject5) / 5;
    const resultElement = document.getElementById('result');
    resultElement.innerText = `The average grade is: ${average.toFixed(2)}`;
    resultElement.classList.remove('hidden');
    resultElement.classList.add('visible');
}
