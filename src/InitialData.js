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

    domi : {
        'domiContainer-1':{  
             id: 'domiContainer-1',
             hour: 1,
    
             domiIdItems: []
         },
         'domiContainer-2':{   
             id: 'domiContainer-2',
             hour: 2,
         
             domiIdItems: []
         },
         'domiContainer-3':{
             id: 'domiContainer-3',
             hour: 3,
             domiIdItems: []
         },
         'domiContainer-4':{   
             id: 'domiContainer-4',
             hour: 4,
           
             domiIdItems: []
         },
         'domiContainer-5':{   
             id: 'domiContainer-5',
             hour: 5,
             domiIdItems: []
         },
         'domiContainer-6':{   
             id: 'domiContainer-6',
             hour: 6,
             domiIdItems: []
         },
         'domiContainer-7':{   
             id: 'domiContainer-7',
             hour: 7,
             domiIdItems: []
         },
         'domiContainer-8':{   
             id: 'domiContainer-8',
             hour: 8,
             domiIdItems: []
         },
         'domiContainer-9':{
             id: 'domiContainer-9',
             hour: 9,
             domiIdItems: []
         },
         'domiContainer-10':{   
             id: 'domiContainer-10',
             hour: 10,
             domiIdItems: []
         },
         'domiContainer-11':{   
             id: 'domiContainer-11',
             hour: 11,
             domiIdItems: []
         },
         'domiContainer-12':{   
             id: 'domiContainer-12',
             hour: 12,
             domiIdItems: []
         },
         'domiContainer-13':{   
             id: 'domiContainer-13',
             hour: 13,
             domiIdItems: []
         },
         'domiContainer-14':{   
             id: 'domiContainer-14',
             hour: 14,
             domiIdItems: []
         },
         'domiContainer-15':{   
             id: 'domiContainer-15',
             hour: 15,
             domiIdItems: []
         },
         'domiContainer-16':{   
             id: 'domiContainer-16',
             hour: 16,
             domiIdItems: []
         },
         'domiContainer-17':{   
             id: 'domiContainer-17',
             hour: 17,
             domiIdItems: []
         },
         'domiContainer-18':{   
             id: 'domiContainer-18',
             hour: 18,
             domiIdItems: []
         },
         'domiContainer-19':{   
             id: 'domiContainer-19',
             hour: 19,
             domiIdItems: []
         },
         'domiContainer-20':{
             id: 'domiContainer-20',
             hour: 20,
             domiIdItems: []
         },
         'domiContainer-21':{   id: 'domiContainer-21',
             hour: 21,
             domiIdItems: []
         },
         'domiContainer-22':{
             id: 'domiContainer-22',
             hour: 22,
             domiIdItems: []
         },
         'domiContainer-23':{
             id: 'domiContainer-23',
             hour: 23,
             domiIdItems: []
         },
         'domiContainer-24':{   id: 'domiContainer-24',
             hour: 24,
             domiIdItems: []
         },

     },
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
    todoList: {
        id: 'todoList',
        todoIds: []
    },

    
    user:{
        username : '',
        img: '',
        accessToken: '',
        enter: false,
        loading : true,
        tutorial: false,
        progress: [],
        domiIds: [],
        domiDivIds: [
        'domiContainer-1',
        'domiContainer-2',
        'domiContainer-3',
        'domiContainer-4',
        'domiContainer-5',
        'domiContainer-6',
        'domiContainer-7',
        'domiContainer-8',
        'domiContainer-9',
        'domiContainer-10',
        'domiContainer-11',
        'domiContainer-12',
        'domiContainer-13',
        'domiContainer-14',
        'domiContainer-15',
        'domiContainer-16',
        'domiContainer-17',
        'domiContainer-18',
        'domiContainer-19',
        'domiContainer-20',
        'domiContainer-21',
        'domiContainer-22',
        'domiContainer-23',
        
           ],
        
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
       
    },
   

}

export default initialData;