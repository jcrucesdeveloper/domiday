import React from 'react'


class BoxProgress extends React.Component {
    render(){
        return(
            <div className="box">
                <div className="tittle"> 
                    <span>TITTLE</span>
                    <button>+</button>
                    <button>-</button>
                </div>
            <div className="boxprogress_container">
            </div>
      
            </div>
        )
    }


}

export default BoxProgress;