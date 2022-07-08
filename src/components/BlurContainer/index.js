import React from 'react';
import { SecondaryContainer } from './styles';

const BlurContainer = ({ children, UsersPage }) => {
    console.log(children, UsersPage);
    return <SecondaryContainer isBlur={UsersPage}>{children}</SecondaryContainer>;
};

export default BlurContainer;
