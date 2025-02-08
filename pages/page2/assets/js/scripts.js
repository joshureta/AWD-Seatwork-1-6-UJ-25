let storedData = JSON.parse(localStorage.getItem("studentsData")) || [];


function addSubject() {
    let row = `<tr>
        <td><input type="text" class="subject" placeholder="Subject"></td>
        <td><input type="number" class="units" placeholder="Units" min="1"></td>
        <td><input type="number" class="grades" placeholder="Grades" min="0" max="100"></td>
    </tr>`;
    document.getElementById("subjectInputs").innerHTML += row;
}

function calculateGWA() {
    let name = document.getElementById("studentName").value.trim();
    if (name === "") {
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


    let studentData = { name: name, gwa: gwa };
    storedData.push(studentData);
    localStorage.setItem("studentsData", JSON.stringify(storedData));
}

function clearInputs() {
    document.getElementById("studentName").value = "";
    document.getElementById("subjectInputs").innerHTML = "";
    document.getElementById("gwaResult").innerHTML = "";
    localStorage.removeItem("studentsData");
    storedData = [];
}

function displayStoredData(){
    let gwaResultElement = document.getElementById ("gwaResult");
    gwaResultElement.innerHTML = "";

    storedData.forEach(student => {
        gwaResultElement.innerHTML +=  `<p><strong>${student.name}'s GWA:</strong> ${student.gwa}</p>`;
    });
    }
displayStoredData();