import React from 'react';
import LeftCore from './LeftCore';
import MiddleCore from './MiddleCore';
import RightCore from './RightCore';
import '../ComponentsCss/core.css';

class Core extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            hours: [
                
                { 
                    hour: '01:00',
                    activity: '',
                    important: false

                },
                { 
                    hour: '02:00',
                    activity: '',
                    important: false

                },
                { 
                    hour: '03:00',
                    activity: '',
                    important: false

                },
                { 
                    hour: '04:00',
                    activity: '',
                    important: false

                },
                { 
                    hour: '05:00',
                    activity: '',
                    important: false

                },
                { 
                    hour: '06:00',
                    activity: '',
                    important: false

                },
                { 
                    hour: '07:00',
                    activity: '',
                    important: false

                },
                { 
                    hour: '08:00',
                    activity: '',
                    important: false

                },
                { 
                    hour: '09:00',
                    activity: '',
                    important: false

                },
                { 
                    hour: '10:00',
                    activity: '',
                    important: false

                },
                { 
                    hour: '11:00',
                    activity: '',
                    important: false

                },
                { 
                    hour: '12:00',
                    activity: '',
                    important: false

                },
                { 
                    hour: '12:00',
                    activity: '',
                    important: false

                },
                { 
                    hour: '13:00',
                    activity: '',
                    important: false

                },
                { 
                    hour: '14:00',
                    activity: '',
                    important: false

                },
                { 
                    hour: '15:00',
                    activity: '',
                    important: false

                },
                { 
                    hour: '16:00',
                    activity: '',
                    important: false

                },
                { 
                    hour: '17:00',
                    activity: '',
                    important: false

                },
                { 
                    hour: '18:00',
                    activity: '',
                    important: false

                },
                { 
                    hour: '19:00',
                    activity: '',
                    important: false

                },
                { 
                    hour: '20:00',
                    activity: '',
                    important: false

                },
                { 
                    hour: '21:00',
                    activity: '',
                    important: false

                },
                { 
                    hour: '22:00',
                    activity: '',
                    important: false

                },
                { 
                    hour: '23:00',
                    activity: '',
                    important: false

                },
                { 
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
                <MiddleCore/>
                <RightCore/>
            </div>
        )
    }


}

export default Core;