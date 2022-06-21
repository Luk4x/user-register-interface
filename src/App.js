import React, { useState } from 'react';
import { MainContainer, TalkingImage, SecondaryContainer, H1, Label, P, Input, Button, UsersList, UserItem } from './styles';
import TalkingImageSVG from './assets/talkingImg.svg';
import 'boxicons';

const App = () => {
    const [users, setUsers] = useState([]);
    const [userName, setUserName] = useState();
    const [userAge, setUserAge] = useState();
    const [redNameInput, setRedNameInput] = useState();
    const [redAgeInput, setRedAgeInput] = useState();

    const verifyUserName = name => {
        if (name) return true;
        else {
            setRedNameInput(true);
            return false;
        }
    };

    const verifyUserAge = age => {
        if (age > 0) return true;
        else {
            setRedAgeInput(true);
            return false;
        }
    };

    const registerUser = () => {
        if (verifyUserName(userName) && verifyUserAge(userAge)) setUsers([...users, { id: Math.random(), name: userName, age: userAge }]);
    };

    const setName = event => {
        setUserName(event.target.value);
        setRedNameInput(false);
    };

    const setAge = event => {
        setUserAge(event.target.value);
        setRedAgeInput(false);
    };

    return (
        <MainContainer>
            <TalkingImage src={TalkingImageSVG} alt="people talking image" />
            <SecondaryContainer>
                <H1>Yo!</H1>
                <Label>
                    <P>Name:</P>
                    <Input
                        onChange={setName}
                        placeholder="Lucas"
                        style={{
                            backgroundColor: redNameInput ? 'rgba(255, 110, 110, 0.25)' : 'rgba(255, 255, 255, 0.25)'
                        }}
                    ></Input>
                </Label>
                <Label>
                    <P>Age:</P>
                    <Input
                        onChange={setAge}
                        placeholder="18"
                        style={{
                            backgroundColor: redAgeInput ? 'rgba(255, 110, 110, 0.25)' : 'rgba(255, 255, 255, 0.25)'
                        }}
                    ></Input>
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
