import styled from 'styled-components';
import React from 'react';
import AddIconSrc from '../Svg/add-outline.svg';
import CheveronRightSrc from '../Svg/cheveron-right.svg';
import CheveronLeftSrc from '../Svg/cheveron-left.svg'
import EditPencilSrc from '../Svg/edit-pencil.svg';
import UserSquareSrc from '../Svg/user-solid-square.svg';
import MenuSrc from '../Svg/menu.svg';
import CalendarSrc from '../Svg/calendar.svg';


function AddIcon (props) {
    return <img src={AddIconSrc} style={{width: props.width || '1em', height: props.height || '1em'}}></img>
}

function CheveronRight (props) {
    return  <img src={CheveronRightSrc} style={{width: props.width || '1em', height: props.height || '1em'}}></img>
}

function CheveronLeft (props) {
    return <img src={CheveronLeftSrc} style={{width: props.width || '1em', height: props.height || '1em'}}></img>
}

function EditPencil (props) {
    return <img src={EditPencilSrc} style={{width: props.width || '1em', height: props.height || '1em'}}></img>
}

function UserSquare (props){
    return <img src={UserSquareSrc} style={{width: props.width || '1em', height: props.height || '1em'}}></img>

}

function Menu (props){
    return <img src={MenuSrc} style={{width: props.width || '1em', height: props.height || '1em'}}></img>

}

function Calendar(props){
    return <img src={CalendarSrc} style={{width: props.width || '1em', height: props.height || '1em'}}></img>

}










export {AddIcon, CheveronRight, CheveronLeft,EditPencil, UserSquare, Menu, Calendar};