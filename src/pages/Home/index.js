import React, { useRef, useState } from 'react';
import { MainContainer, TalkingImage, SecondaryContainer, H1, Label, P, Input, Button } from './styles';
import TalkingImageSVG from '../../assets/talkingImg.svg';
import axios from 'axios';
import 'boxicons';

const Home = () => {
    const [users, setUsers] = useState([]);

    const nameInput = useRef();
    const ageInput = useRef();

    const verifyUserName = name => {
        if (name) return true;
        else {
            nameInput.current.style.backgroundColor = 'rgba(255, 110, 110, 0.25)';
            return false;
        }
    };

    const verifyUserAge = age => {
        if (age > 0) return true;
        else {
            ageInput.current.style.backgroundColor = 'rgba(255, 110, 110, 0.25)';
            return false;
        }
    };

    const registerUser = async () => {
        const name = nameInput.current.value;
        const age = ageInput.current.value;

        if (verifyUserName(name) && verifyUserAge(age)) {
            const { data: newUser } = await axios.post('http://localhost:3001/users', { name, age });
            console.log(newUser);
            setUsers([...users, newUser]);
        }
    };

    return (
        <MainContainer>
            <TalkingImage src={TalkingImageSVG} alt="people talking image" />
            <SecondaryContainer>
                <H1>Yo!</H1>
                <Label>
                    <P>Name:</P>
                    <Input
                        placeholder="Lucas"
                        ref={nameInput}
                        onFocus={() => {
                            // resetting input background color on focus
                            nameInput.current.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
                        }}
                    ></Input>
                </Label>
                <Label>
                    <P>Age:</P>
                    <Input
                        placeholder="18"
                        ref={ageInput}
                        onFocus={() => {
                            // resetting input background color on focus
                            ageInput.current.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
                        }}
                    ></Input>
                </Label>
                <Button onClick={registerUser}>
                    <p>Register</p>
                    <box-icon type="solid" name="chevron-right" color="white" animation="flashing"></box-icon>
                </Button>
            </SecondaryContainer>
        </MainContainer>
    );
};

export default Home;