var UniversityUserRole;
(function (UniversityUserRole) {
    UniversityUserRole["ADMIN"] = "Admin";
    UniversityUserRole["PROFESSOR"] = "Professor";
    UniversityUserRole["STUDENT"] = "Student";
    UniversityUserRole["REGISTRAR"] = "Registrar";
    UniversityUserRole["LIBRARIAN"] = "Librarian";
    UniversityUserRole["ACCOUNTANT"] = "Accountant";
})(UniversityUserRole || (UniversityUserRole = {}));
function getRoleInformation(role) {
    switch (role) {
        case UniversityUserRole.ADMIN:
            return "Admin manages university operations and policies.";
        case UniversityUserRole.PROFESSOR:
            return "Professor conducts research and teaches students.";
        case UniversityUserRole.STUDENT:
            return "Student enrolls in courses and participates in academic activities.";
        case UniversityUserRole.REGISTRAR:
            return "Registrar handles student records and enrollment processes.";
        case UniversityUserRole.LIBRARIAN:
            return "Librarian manages library resources and assists students.";
        case UniversityUserRole.ACCOUNTANT:
            return "Accountant oversees financial transactions and budgeting.";
        default:
            return "Unknown role.";
    }
}
console.log(getRoleInformation(UniversityUserRole.PROFESSOR));
console.log(getRoleInformation(UniversityUserRole.ACCOUNTANT));
