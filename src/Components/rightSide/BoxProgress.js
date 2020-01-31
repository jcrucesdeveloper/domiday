import React from 'react'
import BoxItem from './BoxItem'


class BoxProgress extends React.Component {
    render(){
        const { color, name, list} = this.props.info;

        return(
            <div className="box">
                <div className="tittle"> 
                    <span className="tittleType">{name}</span>
                    <button>+</button>
                    <button>-</button>
                </div>

            <ul className="boxprogress_container">
              {list.map((item) => 
                <BoxItem key={item.id}/>)}
            </ul>
      
            </div>
        )
    }


}

export default BoxProgress;