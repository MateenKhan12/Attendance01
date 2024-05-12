document.addEventListener("DOMContentLoaded", function() {
    const coursesList = document.getElementById("courses-list");

    // Sample course data (you can replace this with actual course data)
    const coursesData = [
        { name: "Mathematics" },
        { name: "Physics" },
        { name: "Biology" }
        // Add more courses as needed
    ];

    // Function to create a course attendance form
    function createCourseForm(course) {
        const courseDiv = document.createElement("div");
        courseDiv.classList.add("course");

        const courseNameLabel = document.createElement("label");
        courseNameLabel.textContent = `Mark attendance for ${course.name}:`;
        courseDiv.appendChild(courseNameLabel);

        const studentNameInput = document.createElement("input");
        studentNameInput.type = "text";
        studentNameInput.placeholder = "Your Name";
        courseDiv.appendChild(studentNameInput);

        const markAttendanceBtn = document.createElement("button");
        markAttendanceBtn.textContent = "Mark Attendance";
        courseDiv.appendChild(markAttendanceBtn);

        markAttendanceBtn.addEventListener("click", function() {
            const studentName = studentNameInput.value.trim();

            if (studentName === "") {
                alert("Please enter your name.");
                return;
            }

            const timestamp = new Date().toLocaleString();
            const message = `${studentName} marked attendance for ${course.name} as present (${timestamp})`;
            console.log(message);
            alert("Attendance marked successfully!");

            // Clear the input field after marking attendance
            studentNameInput.value = "";
        });

        return courseDiv;
    }

    // Create attendance form for each course
    coursesData.forEach(course => {
        const courseForm = createCourseForm(course);
        coursesList.appendChild(courseForm);
    });
});
