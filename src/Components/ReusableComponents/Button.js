import styled from 'styled-components';

const Button = styled.button`
    border: none;
    color: #4D3252;
    border-radius: 8px;
    background: linear-gradient(145deg, #e6e6e6, #ffffff);
    box-shadow:  1px 2px 1px #a3a3a3, 
                -5px -5px 3px #ffffff;
    font-size: 0.7em;
    overflow: hidden;
    position: relative;
    text-transform: uppercase;

  
    &:hover:after{
        opacity: 1;
        top: 0;
        left: 0;
        transform: translateX(0);
        transition-property: transform, opacity;
        transition-duration: 0.7s, 0.15s;
        transition-timing-function: ease;
    }

    &:active {
        opacity: 1;
        border: 1px solid #D8D8D8;
        box-shadow: inset 2px 3px 5px #949494, 
                    inset -3px -3px 5px #ffffff;
    }

    &:focus{
        outline: none;
    }

    &:after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 200%;
        height: 100%;
        
        transform: translateX(-100%);
        
        background: rgba(255, 255, 255, 0.13);
        background: linear-gradient(
        to right, 
        rgba(255, 255, 255, 0.13) 0%,
        rgba(255, 255, 255, 0.13) 77%,
        rgba(255, 255, 255, 0.5) 92%,
        rgba(255, 255, 255, 0.3) 100%
        );
    }




`;

export default Button;