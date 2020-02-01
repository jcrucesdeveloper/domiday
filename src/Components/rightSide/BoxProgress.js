import React from 'react'
import BoxItem from './BoxItem'


class BoxProgress extends React.Component {
    render(){
        const { color, name, list} = this.props.info;
        const handleCreateItem = () => {
            this.props.createItem(name);
        }
 
        return(
            <div className="box">
                <div className="tittle"> 
                    <span className="tittleType">{name}</span>
                    <button onClick={handleCreateItem}>+</button>
                    <button>-</button>
                </div>

            <ul className="boxprogress_container">
              {list.map((item) => 
                <BoxItem key={item.id} id={item.id} />)}
            </ul>
      
            </div>
        )
    }


}

export default BoxProgress;