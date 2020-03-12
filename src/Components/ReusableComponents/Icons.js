
import React from 'react';
import AddIconSrc from '../Svg/add-outline.svg';
import CheveronRightSrc from '../Svg/cheveron-right.svg';
import CheveronLeftSrc from '../Svg/cheveron-left.svg'
import EditPencilSrc from '../Svg/edit-pencil.svg';
import UserSquareSrc from '../Svg/user-solid-square.svg';
import MenuSrc from '../Svg/menu.svg';
import CalendarSrc from '../Svg/calendar.svg';
import ArrowUpSrc from '../Svg/arrow-thin-up.svg';


function AddIcon (props) {
    return <img src={AddIconSrc} alt="icon" style={{width: props.width || '1em', height: props.height || '1em'}}></img>
}

function CheveronRight (props) {
    return  <img src={CheveronRightSrc} alt="icon" style={{width: props.width || '1em', height: props.height || '1em'}}></img>
}

function CheveronLeft (props) {
    return <img src={CheveronLeftSrc} alt="icon" style={{width: props.width || '1em', height: props.height || '1em'}}></img>
}

function EditPencil (props) {
    return <img src={EditPencilSrc} alt="icon" style={{width: props.width || '1em', height: props.height || '1em'}}></img>
}

function UserSquare (props){
    return <img src={UserSquareSrc} alt="icon"  style={{width: props.width || '1em', height: props.height || '1em'}}></img>

}

function Menu (props){
    return <img src={MenuSrc}  alt="icon" style={{width: props.width || '1em', height: props.height || '1em'}}></img>

}

function Calendar(props){
    return <img src={CalendarSrc} alt="icon" style={{width: props.width || '1em', height: props.height || '1em'}}></img>

}


function ArrowUp(props){
    return <img src={ArrowUpSrc} style={{width: props.width || '1em', height: props.height || '1em'}}></img>

}







export {AddIcon, CheveronRight, CheveronLeft,EditPencil, UserSquare, Menu, Calendar, ArrowUp};