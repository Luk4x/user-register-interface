import React from 'react';
import { Button as Btn } from './styles';

const Button = props => {
    console.log(props);
    return (
        <Btn isWhiteButton={props.isWhiteButton} onClick={props.onClick}>
            {props.children}
        </Btn>
    );
};

export default Button;
