import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 13px 20px;
    border: 0;
    border-radius: 5px;
    text-align: center;
    transition: .3s;
    font-size: .9rem;

    &:hover {
        filter: brightness(110%);
    }
`;

const Button = (props) => {
    return ( 
        <Btn 
            value={props.value}
            style={{color: props.color, backgroundColor: props.bg}}
            onClick={props.handleClick}> 
            
            {props.children}
        </Btn>
    );
}

export default Button;