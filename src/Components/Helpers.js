const DayToText = function (x) {
    if(x === 0) return "Sunday";
    if(x === 1) return "Monday";
    if(x === 2) return "Tuesday";
    if(x === 3) return "Wednesday";
    if(x === 4) return "Thursday ";
    if(x === 5) return "Friday";
    if(x === 6) return "Saturday";
}


const Days = ['S','M','T','W','T','F','S'];
export default Days;
 


const MonthToText = function (x){
    
    if(x === 0) return "January";
    if(x === 1) return "February";
    if(x === 2) return "March";
    if(x === 3) return "April";
    if(x === 4) return "May";
    if(x === 5) return "June";
    if(x === 6) return "July";
    if(x === 7) return "August";
    if(x === 8) return "September";
    if(x === 9) return "October";
    if(x === 10) return "November";
    if(x === 11) return "December";

}

export {DayToText, MonthToText};