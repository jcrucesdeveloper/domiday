import React from 'react';
import LeftCore from './LeftCore';
import MiddleCore from './MiddleCore';
import RightCore from './RightCore';
import '../ComponentsCss/core.css';

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
            habits: '',
            objective: '',
            goals: '',
            
        }
    }
    
    render(){
        return(
            <div className="core">
                <LeftCore />
                <MiddleCore activities={this.state.activities}/>
                <RightCore/>
            </div>
        )
    }


}

export default Core;