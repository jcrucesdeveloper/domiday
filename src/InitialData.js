import {DayToText, MonthToText, MonthDays} from './Components/Utilities/Helpers';

const currentDate = new Date();

const currentDay = currentDate.getDate();
const dayOfTheWeek =  currentDate.getDay();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();


//January case later
const pastMonthString = MonthToText(currentMonth - 1);
const pastMonthDays = MonthDays(pastMonthString);

const monthString = MonthToText(currentMonth);
const monthDays = MonthDays(monthString);
const todayString = DayToText(dayOfTheWeek);






const initialData = {


    domiItems: {
        
    },
    boxes: { 
        'box-0': {  id: 'box-0',
                    category: 'Goals',
                    boxItemsIds: []
                    },
        'box-1': {  id: 'box-1',
                    category: 'Habits',
                    boxItemsIds: []
                    },
        'box-2': {  id: 'box-2',
                    category: 'Objectives',
                    boxItemsIds: []
                    },      
    },

    
    user:{
        username : '',
        img: '',
        tutorial: false,
        progress: [],
        domiIds: [],
        boxIds : ['box-0','box-1','box-2']
    },
    day:{
        currentDay: currentDay,
        dayOfTheWeek : dayOfTheWeek,
        currentDayString: todayString,
        month: currentMonth,
        monthString: monthString,
        year: currentYear,
        dayOfMonth: monthDays,
        dayOfPastMonth: pastMonthDays,
        domi : [
            {  
                hour: 1,
                domiItems: [{}],
                domiIdItems: []
            },
            {
                hour: 2,
                domiItems: [{}],
                domiIdItems: []
            },
            {
                hour: 3,
                domiItems: [{}],
                domiIdItems: []
            },
            {
                hour: 4,
                domiItems: [{}],
                domiIdItems: []
            },
            {
                hour: 5,
                domiItems: [{}],
                domiIdItems: []
            },
            {
                hour: 6,
                domiItems: [{}],
                domiIdItems: []
            },
            {
                hour: 7,
                domiItems: [{}],
                domiIdItems: []
            },
            {
                hour: 8,
                domiItems: [{}],
                domiIdItems: []
            },
            {
                hour: 9,
                domiItems: [{}],
                domiIdItems: []
            },
            {
                hour: 10,
                domiItems: [{}],
                domiIdItems: []
            },
            {
                hour: 11,
                domiItems: [{}],
                domiIdItems: []
            },
            {
                hour: 12,
                domiItems: [{}],
                domiIdItems: []
            },
            {
                hour: 13,
                domiItems: [{}],
                domiIdItems: []
            },
            {
                hour: 14,
                domiItems: [{}],
                domiIdItems: []
            },
            {
                hour: 15,
                domiItems: [{}],
                domiIdItems: []
            },
            {
                hour: 16,
                domiItems: [{}],
                domiIdItems: []
            },
            {
                hour: 17,
                domiItems: [{}],
                domiIdItems: []
            },
            {
                hour: 18,
                domiItems: [{}],
                domiIdItems: []
            },
            {
                hour: 19,
                domiItems: [{}],
                domiIdItems: []
            },
            {
                hour: 20,
                domiItems: [{}],
                domiIdItems: []
            },
            {
                hour: 21,
                domiItems: [{}],
                domiIdItems: []
            },
            {
                hour: 22,
                domiItems: [{}],
                domiIdItems: []
            },
            {
                hour: 23,
                domiItems: [{}],
                domiIdItems: []
            },
            {
                hour: 24,
                domiItems: [{}],
                domiIdItems: []
            },

        ]
    },
   

}

export default initialData;