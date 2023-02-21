var course_name;
var total_marks;
var obtained_grade;
let flag = 0;


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
    let qom = document.getElementById("course-1-qom").value;
    let qtm = document.getElementById("course-1-qtm").value;
    let aom = document.getElementById("course-1-aom").value;
    let atm = document.getElementById("course-1-atm").value;
    let mtom = document.getElementById("course-1-mtom").value;
    let mttm = document.getElementById("course-1-mttm").value;
    let tom = document.getElementById("course-1-tom").value;
    let ttm = document.getElementById("course-1-ttm").value;

    let labAO = document.getElementById("course-1-labAO").value;
    let labAT = document.getElementById("course-1-labAT").value;
    let labMTO = document.getElementById("course-1-labMTO").value;
    let labMTT = document.getElementById("course-1-labMTT").value;
    let labTO = document.getElementById("course-1-labTO").value;
    let labTT = document.getElementById("course-1-labTT").value;

    let aqm = (((qom / qtm) * 15) + ((aom / atm) * 10));
    let mtm = ((mtom / mttm) * 25);
    let tm = ((tom / ttm) * 50);

    let labAssignmentMarks = ((labAO / labAT) * 25);
    let labMidTermMarks = ((labMTO / labMTT) * 25);
    let labTerminalMarks = ((labTO / labTT) * 50);
    let labTotalMarks = ((labAssignmentMarks + labTerminalMarks + labMidTermMarks) * 0.25);

    if (document.getElementById("course-1-labAO").value != "") {
        total_marks = (((aqm + mtm + tm) * 0.75) + labTotalMarks);
        obtained_grade = grade(total_marks);
    }
    else {
        total_marks = aqm + mtm + tm;
        obtained_grade = grade(total_marks);
    }

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

let show_lab = () => {
    if (flag == 0) {
        document.getElementsByClassName("lab")[0].style.display = "block";
        document.getElementById("course-1-lab").value = "Remove Lab Marks";
        flag = 1;
    }
    else if (flag == 1) {
        document.getElementsByClassName("lab")[0].style.display = "none";
        document.getElementById("course-1-labAO").value = "";
        document.getElementById("course-1-lab").value = "Enter Lab Marks";
        flag = 0;
    }
}
