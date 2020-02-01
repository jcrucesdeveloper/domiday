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

    
   createItem = (name) => {

        //Create the item
        let emptyItem = {};
       
      
        if(name === 'habits'){
            const newId = this.state.habits.list.length + 1;
            emptyItem = {
                id : newId,
                info : '',
                progress: 0
            }           
            
        //Add to the state
        this.setState({
            habits: {
                name: this.state.habits.name,
                color: this.state.habits.color,
                list: [...this.state.habits.list, emptyItem]
                    }
            });



        }
        
        
        if(name=== 'objectives'){
            const newId = this.state.objectives.list.length +1;
            emptyItem = {
                id : newId,
                info : '',
                progress: 0
            }

          //Add to the state
          this.setState({
            objectives: {
                name: this.state.objectives.name,
                color: this.state.objectives.color,
                list: [...this.state.objectives.list, emptyItem]
                    }
            });

        }   
        if(name === 'goals'){
            const newId = this.state.goals.list.length +1;

            emptyItem = {
                id : newId,
                info : '',
                progress: 0
            }

        //Add to the state
        this.setState({
            goals: {
                name: this.state.goals.name,
                color: this.state.goals.color,
                list: [...this.state.goals.list, emptyItem]
                    }
            });

        }

     
      
   }
     
    render(){

       

        return(
            <div className="core">
                <LeftCore />
                <MiddleCore activities={this.state.activities}/>
                <RightCore 
                habits={this.state.habits} 
                objectives={this.state.objectives} 
                goals={this.state.goals}
                createItem={this.createItem}
                />
            </div>
        )
    }


}

export default Core;