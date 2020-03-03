import {DayToText, MonthToText, MonthDays} from './Components/Utilities/Helpers';

const currentDate = new Date();
const today =  currentDate.getDay();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();

const monthString = MonthToText(currentMonth);
const monthDays = MonthDays(monthString);
const todayString = DayToText(today);






const initialData = {

    user:{
        username : '',
        img: '',
        tutorial: false,
        progress: []
    },
    day:{
        currentDay : today,
        currentDayString: todayString,
        month: currentMonth,
        monthString: monthString,
        year: currentYear,
        dayOfMonth: monthDays,
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
    boxes: [
        {
            category: 'Habits',
            boxItems: {

            },
            boxItemsIds: []
        },
        {
            category: 'Objectives',
            boxItems: {},
            boxItemsIds: []
        },
        {
            category: 'Goals',
            boxItems: {},
            boxItemsIds: []
        },
    ]
}

export default initialData;