var course_name;
var total_marks;
var obtained_grade;

let grade = (total_marks) => {
    let student_grade;

    if (total_marks >= 90) {
        student_grade = 4.0;
    }
    else if (total_marks >= 85) {
        student_grade = 3.7;
    }
    else if (total_marks >= 80) {
        student_grade = 3.3;
    }
    else if (total_marks >= 75) {
        student_grade = 3.0;
    }
    else if (total_marks >= 70) {
        student_grade = 2.7;
    }
    else if (total_marks >= 65) {
        student_grade = 2.3;
    }
    else if (total_marks >= 60) {
        student_grade = 2.0;
    }
    else if (total_marks >= 55) {
        student_grade = 1.7;
    }
    else if (total_marks >= 50) {
        student_grade = 1.3;
    }
    else if (total_marks < 50) {
        student_grade = 0.0;
    }

    if (total_marks > 100) {
        console.log("Invalid Score");
        student_grade = 'X';
    }

    return student_grade.toFixed(2);
}

let calculate = () => {
    course_name = document.getElementById("course-1").value;
    let aqom = document.getElementById("course-1-aqom").value;
    let aqtm = document.getElementById("course-1-aqtm").value;
    let mtom = document.getElementById("course-1-mtom").value;
    let mttm = document.getElementById("course-1-mttm").value;
    let tom = document.getElementById("course-1-tom").value;
    let ttm = document.getElementById("course-1-ttm").value;

    let aqm = ((aqom / aqtm) * 25);
    let mtm = ((mtom / mttm) * 25);
    let tm = ((tom / ttm) * 50);

    total_marks = aqm + mtm + tm;
    obtained_grade = grade(total_marks);

    console.log(course_name);
    console.log("Total Obtained Marks = ", total_marks);
    console.log("Obtained Grade = ", obtained_grade);
}

let show_result = () => {
    calculate();

    document.getElementById("course-1-name").innerHTML = course_name.toUpperCase();
    document.getElementById("course-1-marks").innerHTML = total_marks.toFixed(2) + "%";
    document.getElementById("course-1-grade").innerHTML = "GPA = " + obtained_grade;

    document.getElementsByClassName("course-result")[0].style.display = "flex";
}

