var course_name;
var total_marks;
var obtained_grade;

let grade = (total_marks) => {
    let student_grade;

    if (total_marks >= 90) {
        student_grade = 'A';
    }
    else if (total_marks >= 80) {
        student_grade = 'B';
    }
    else if (total_marks >= 70) {
        student_grade = 'C';
    }
    else if (total_marks >= 60) {
        student_grade = 'D';
    }
    else if (total_marks < 60) {
        student_grade = 'F';
    }

    if (total_marks > 100) {
        console.log("Invalid Score");
        student_grade = 'X';
    }

    return student_grade;
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

    document.getElementById("course-1-name").innerHTML = course_name;
    document.getElementById("course-1-marks").innerHTML = total_marks.toFixed(2);
    document.getElementById("course-1-grade").innerHTML = obtained_grade;

    document.getElementsByClassName("course-result")[0].style.display = "flex";
}

