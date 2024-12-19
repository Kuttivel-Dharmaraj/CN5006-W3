const dateofBirth = "12/12/1980";

const getStudentName = () => "Your Name Here";

const getCampusName = () => "UEL Campus";

// Exporting functions and variable
exports.getName = getStudentName;
exports.Location = getCampusName;
exports.dob = dateofBirth;
exports.Studentgrade = (marks) => {
    if (marks > 50 && marks < 70) return "B grade";
    else return "A grade";
};
