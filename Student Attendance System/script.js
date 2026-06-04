document.addEventListener("DOMContentLoaded", () => {

    const studentNameInput = document.getElementById("studentName");
    const addStudentBtn = document.getElementById("addStudentBtn");
    const saveAttendanceBtn = document.getElementById("saveAttendanceBtn");
    const tableBody = document.getElementById("studentTableBody");

    let students = [];

    // Load Saved Data
    const savedStudents = localStorage.getItem("students");

    if (savedStudents) {
        students = JSON.parse(savedStudents);
        renderTable();
    }

    // Add Student
    addStudentBtn.addEventListener("click", () => {

        const name = studentNameInput.value.trim();

        if (name === "") {
            alert("Please Enter Student Name");
            return;
        }

        students.push({
            name: name,
            status: "Present"
        });

        studentNameInput.value = "";

        renderTable();
    });

    // Save Attendance
    saveAttendanceBtn.addEventListener("click", () => {

        localStorage.setItem(
            "students",
            JSON.stringify(students)
        );

        alert("Attendance Saved Successfully!");

    });

    // Table Buttons
    tableBody.addEventListener("click", (e) => {

        // Present / Absent
        if (e.target.classList.contains("toggle-btn")) {

            const index = Number(e.target.dataset.index);

            students[index].status =
                students[index].status === "Present"
                    ? "Absent"
                    : "Present";

            renderTable();
        }

        // Delete Student
        if (e.target.classList.contains("delete-btn")) {

            const index = Number(e.target.dataset.index);

            students.splice(index, 1);

            renderTable();
        }
    });

    // Render Table
    function renderTable() {

        tableBody.innerHTML = "";

        students.forEach((student, index) => {

            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${index + 1}</td>

                <td>${student.name}</td>

                <td>
                    <div class="${student.status === "Present" ? "present" : "Absents"}">
                        <p>${student.status}</p>
                    </div>
                </td>

                <td>
                    <div class="${student.status === "Present" ? "MarkAbsent" : "MarkPresentbtn"}">
                        <button
                            class="toggle-btn"
                            data-index="${index}">
                            ${student.status === "Present"
                                ? "Mark Absent"
                                : "Mark Present"}
                        </button>
                    </div>
                </td>

                <td>
                    <div class="Deletebtn">
                        <button
                            class="delete-btn"
                            data-index="${index}">
                            Delete
                        </button>
                    </div>
                </td>
            `;

            tableBody.appendChild(row);
        });

        updateCounts();
    }

    // Update Footer Counts
    function updateCounts() {

        document.getElementById("totalStudents").textContent =
            students.length;

        document.getElementById("presentStudents").textContent =
            students.filter(
                student => student.status === "Present"
            ).length;

        document.getElementById("absentStudents").textContent =
            students.filter(
                student => student.status === "Absent"
            ).length;
    }

    updateCounts();
});
