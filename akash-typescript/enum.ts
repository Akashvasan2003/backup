

enum DaysOfWeek {
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6
}

function isDayOfWeek(day: number): boolean {
    return day >= DaysOfWeek.Sunday && day <= DaysOfWeek.Saturday;
}


const inputDay = 7;
console.log(isDayOfWeek(inputDay)); 
