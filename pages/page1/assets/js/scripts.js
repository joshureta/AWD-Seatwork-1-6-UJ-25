function calculateGWA() {
    let name = document.getElementById("name").value;
    let gradesInput = document.getElementById("grades").value;
    //input by the user
    if (!name || !gradesInput) {
        alert("Please enter both name and grades.");
        return;
    }
    
    let grades = gradesInput.split(',').map(num => parseFloat(num.trim()));
    
    if (grades.length !== 5 || grades.some(isNaN)) {
        alert("Please enter exactly 5 valid numerical grades.");
        return;
    }
    //calculate the GWA
    let total = grades.reduce((acc, curr) => acc + curr, 0);
    let gwa = (total / grades.length).toFixed(2);
    //show the result
    let tableBody = document.getElementById("resultTable").querySelector("tbody");
    let newRow = tableBody.insertRow();
    
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${grades.join(", ")}</td>
        <td>${gwa}</td>
    `;
    document.getElementById("name").value = "";
    document.getElementById("grades").value = "";
}