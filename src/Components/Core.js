import React from 'react';
import LeftCore from './leftSide/LeftCore';
import MiddleCore from './middleSide/MiddleCore';
import RightCore from './rightSide/RightCore';
import './coreCss/core.css';

class Core extends React.Component {

    constructor(props){
        super(props);

        

        this.state = {
            activities: [
                
                { 
                    id: 1,
                    hour: '01:00',
                    activity: '',
                    important: false

                },
                { 
                    id: 2,
                    hour: '02:00',
                    activity: '',
                    important: false

                },
                { 
                    id: 3,
                    hour: '03:00',
                    activity: '',
                    important: false

                },
                { 
                    id: 4,
                    hour: '04:00',
                    activity: '',
                    important: false

                },
                { 
                    id: 5,
                    hour: '05:00',
                    activity: '',
                    important: false

                },
                { 
                    id: 6,
                    hour: '06:00',
                    activity: '',
                    important: false

                },
                { 
                    id: 7,
                    hour: '07:00',
                    activity: '',
                    important: false

                },
                { 
                    id: 8,
                    hour: '08:00',
                    activity: '',
                    important: false

                },
                { 
                    id: 9,
                    hour: '09:00',
                    activity: '',
                    important: false

                },
                { 
                    id: 10,
                    hour: '10:00',
                    activity: '',
                    important: false

                },
                { 
                    id: 11,
                    hour: '11:00',
                    activity: '',
                    important: false

                },
                { 
                    id: 12,
                    hour: '12:00',
                    activity: '',
                    important: false

                },
                { 
                    id: 13,
                    hour: '13:00',
                    activity: '',
                    important: false

                },
                { 
                    id: 14,
                    hour: '14:00',
                    activity: '',
                    important: false

                },
                { 
                    id: 15,
                    hour: '15:00',
                    activity: '',
                    important: false

                },
                { 
                    id: 16,
                    hour: '16:00',
                    activity: '',
                    important: false

                },
                { 
                    id: 17,
                    hour: '17:00',
                    activity: '',
                    important: false

                },
                { 
                    id: 18,
                    hour: '18:00',
                    activity: '',
                    important: false

                },
                { 
                    id: 19,
                    hour: '19:00',
                    activity: '',
                    important: false

                },
                { 
                    id: 20,
                    hour: '20:00',
                    activity: '',
                    important: false

                },
                { 
                    id: 21,
                    hour: '21:00',
                    activity: '',
                    important: false

                },
                { 
                    id: 22,
                    hour: '22:00',
                    activity: '',
                    important: false

                },
                { 
                    id: 23,
                    hour: '23:00',
                    activity: '',
                    important: false

                },
                { 
                    id: 24,
                    hour: '24:00',
                    activity: '',
                    important: false

                },
               
                
           
            ],
            habits: {
                name: 'habits',
                color: 'default',
                list: [
                    {
                        id: 1,
                        info: 'Read',
                        progress: 2
                    
                    }

                ]
            },
            objectives: {
                name: 'objectives',
                color: 'default',
                list: [
                    {
                        id: 1,
                        info: 'Read',
                        progress: 2
                    
                    }

                ]
            },
            goals: {
                name: 'goals',
                color: 'default',
                list: [
                    {
                        id: 1,
                        info: 'Read',
                        progress: 2
                    
                    }

                ]
            },
            
        }
    }

    
    

// MIDDLE CORE 
changeActivityValue = (id,message) => {

    this.setState(prevState => ({
        activities: prevState.activities.map(domi => domi.id === id ? {
            ...domi, activity : message} : domi)
    }))
}




// RIGH CORE



changeItemValue = (category,id,message) => {

    if(category === 'habits'){
        this.setState(prevState => ({
            habits: {
            ...this.state.habits,
            list: prevState.habits.list.map(item => item.id === id ?  {...item, info: message} : item)

            }

        }))
    }
    if(category === 'objectives'){

        this.setState(prevState => ({
            objectives: {
            ...this.state.objectives,
            list: prevState.objectives.list.map(item => item.id === id ?  {...item, info: message} : item)

            }

        }))
    

    }
    if(category === 'goals'){
        
        this.setState(prevState => ({
            goals: {
            ...this.state.goals,
            list: prevState.goals.list.map(item => item.id === id ?  {...item, info: message} : item)

            }

        }))

    }

}




//I can improve this code later
   createItem = (category) => {

        //Create the item
        let emptyItem = {};
       
      
        if(category === 'habits'){
            const newId = this.state.habits.list.length + 1;
            emptyItem = {
                id : newId,
                info : '',
                progress: 0
            }           
            
        //Add to the state
        this.setState({
            habits: {
              ...this.state.habits,
                list: [...this.state.habits.list, emptyItem]
                    }
            });



        }
        
        
        if(category=== 'objectives'){
            const newId = this.state.objectives.list.length +1;
            emptyItem = {
                id : newId,
                info : '',
                progress: 0
            }

          //Add to the state
          this.setState({
            objectives: {
                ...this.state.objectives,
                list: [...this.state.objectives.list, emptyItem]
                    }
            });

        }   
        if(category === 'goals'){
            const newId = this.state.goals.list.length +1;

            emptyItem = {
                id : newId,
                info : '',
                progress: 0
            }

        //Add to the state
        this.setState({
            goals: {
              ...this.state.goals,
                list: [...this.state.goals.list, emptyItem]
                    }
            });

        }

     
      
   }

   deleteItem = (category,id) => {

    if(category === 'habits'){

           //Delete state
           this.setState({
            habits: {
                name: this.state.habits.name,
                color: this.state.habits.color,
                list: this.state.habits.list.filter((x) => x.id !== id)
            }
            });

    }
    if(category === 'objectives'){

          //DeleteState
          this.setState({
            objectives: {
                name: this.state.objectives.name,
                color: this.state.objectives.color,
                list: this.state.objectives.list.filter((x) => x.id !== id)
            }
            });

    }
    if(category === 'goals'){

           //Delete state
           this.setState({
            goals: {
                name: this.state.goals.name,
                color: this.state.goals.color,
                list: this.state.goals.list.filter((x) => x.id !== id)
            }
            });

    }
    
       
   }


   



     
    render(){

       

        return(
            <div className="core">
                <LeftCore />
                <MiddleCore 
                activities={this.state.activities}
                changeActivityValue={this.changeActivityValue}
                    
                />
                <RightCore 
                habits={this.state.habits} 
                objectives={this.state.objectives} 
                goals={this.state.goals}
                changeItemValue={this.changeItemValue}
                createItem={this.createItem}
                deleteItem={this.deleteItem}
                />
            </div>
        )
    }


}

export default Core;