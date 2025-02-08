document.addEventListener("DOMContentLoaded", function () {
    let storedData = JSON.parse(localStorage.getItem("studentsData")) || [];
    let tableBody = document.getElementById("studentsTableBody");

    if (storedData.length === 0) {
        tableBody.innerHTML = "<tr><td colspan='2'>No records found.</td></tr>";
    } else {
        storedData.forEach(student => {
            let row = `<tr>
                <td>${student.name}</td>
                <td>${student.gwa}</td>
            </tr>`;
            tableBody.innerHTML += row;
        });
    }
});

function clearStoredData() {
    if (confirm("Are you sure you want to clear all student records?")) {
        localStorage.removeItem("studentsData");
        document.getElementById("studentsTableBody").innerHTML = "<tr><td colspan='2'>No records found.</td></tr>";
    }
}
