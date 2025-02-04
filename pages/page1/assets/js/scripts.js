function addSubject() {
    let row = `<tr>
        <td><input type="text" class="subject" placeholder="Subject"></td>
        <td><input type="number" class="units" placeholder="Units"></td>
        <td><input type="number" class="grades" placeholder="Grades"></td>
    </tr>`;
    document.getElementById("subjectInputs").innerHTML += row;
}

function calculateGWA() {
    let name = document.getElementById("studentName").value;
    if (name.trim() === "") {
        alert("Please enter a student name.");
        return;
    }

    let grades = document.querySelectorAll(".grades");
    let units = document.querySelectorAll(".units");
    let totalWeightedGrades = 0;
    let totalUnits = 0;

    for (let i = 0; i < grades.length; i++) {
        let grade = parseFloat(grades[i].value);
        let unit = parseFloat(units[i].value);

        if (isNaN(grade) || isNaN(unit) || unit <= 0) {
            alert("Please enter valid grades and units.");
            return;
        }

        totalWeightedGrades += grade * unit;
        totalUnits += unit;
    }

    let gwa = (totalWeightedGrades / totalUnits).toFixed(2);
    document.getElementById("gwaResult").innerHTML = `<strong>${name}'s GWA:</strong> ${gwa}`;
}

function clearInputs() {
    document.getElementById("studentName").value = "";
    document.getElementById("subjectInputs").innerHTML = "";
    document.getElementById("gwaResult").innerHTML = "";
}
