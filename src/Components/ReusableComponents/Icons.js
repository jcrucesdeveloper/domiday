import styled from 'styled-components';
import React from 'react';
import AddIconSrc from '../Svg/add-outline.svg';
import CheveronRightSrc from '../Svg/cheveron-right.svg';
import CheveronLeftSrc from '../Svg/cheveron-left.svg'
import EditPencilSrc from '../Svg/edit-pencil.svg';


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












export {AddIcon, CheveronRight, CheveronLeft,EditPencil};