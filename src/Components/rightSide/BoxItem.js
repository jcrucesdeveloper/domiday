import React from 'react'


class BoxItem extends React.Component {


    show = () =>{
        console.log(this.props.id);
    }
    render(){ 
        return(
            <li className="boxItem">
                <input></input>
                <button onClick={this.show}>x</button>
            </li>
        )
    }


}

export default BoxItem;