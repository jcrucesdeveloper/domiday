function es_bisiesto(year){
    return year % 4 === 0 & year % 100 !== 0 || year % 400 === 0;
}


const DayToText = function (x) {
    if(x === 0) return "Sunday";
    if(x === 1) return "Monday";
    if(x === 2) return "Tuesday";
    if(x === 3) return "Wednesday";
    if(x === 4) return "Thursday ";
    if(x === 5) return "Friday";
    if(x === 6) return "Saturday";
    return null;
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
    return 'December';

}

const MonthDays = function(month,year){
    if(month === "January") return 31;
    if(month === "February") {
        if(es_bisiesto(year)) return 29;
        else return 28
    }
    if(month === "March") return 31;
    if(month === "April") return 30;
    if(month === "May") return 31;
    if(month === "June") return 30;
    if(month === "July") return 31;
    if(month === "August") return 31;
    if(month === "September") return 30;
    if(month === "October") return 31;
    if(month === "November") return 30;
    if(month === "December") return 31;
    return null;
}


export {DayToText, MonthToText, MonthDays};