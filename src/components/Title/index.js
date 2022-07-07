import React from 'react';
import { H1 } from './styles';

const Title = props => {
    console.log(props);
    return <H1>{props.children}</H1>;
};

export default Title;
