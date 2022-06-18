import React, { useState } from 'react';
import { MainContainer, TalkingImage, SecondaryContainer, H1, Label, P, Input, Button, UsersList, UserItem } from './styles';
import TalkingImageSVG from './assets/talkingImg.svg';
import 'boxicons';

const App = () => {
    const [users, setUsers] = useState([]);

    const registerUser = () => {
        setUsers([{ id: Math.random(), name: 'Akame', age: 16 }]);
    };

    return (
        <MainContainer>
            <TalkingImage src={TalkingImageSVG} alt="people talking image" />
            <SecondaryContainer>
                <H1>Yo!</H1>
                <Label>
                    <P>Name:</P>
                    <Input placeholder="Lucas"></Input>
                </Label>
                <Label>
                    <P>Age:</P>
                    <Input placeholder="18"></Input>
                </Label>
                <Button onClick={registerUser}>
                    <p>Register</p>
                    <box-icon type="solid" name="chevron-right" color="white" animation="flashing"></box-icon>
                </Button>
            </SecondaryContainer>

            <UsersList>
                {users.map(user => (
                    <UserItem key={user.id}>
                        <p>{user.name}</p>
                        <p>{user.age}</p>
                        <box-icon type="solid" name="trash" color="red" animation="tada-hover"></box-icon>
                    </UserItem>
                ))}
            </UsersList>
        </MainContainer>
    );
};

export default App;
