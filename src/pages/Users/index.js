import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { MainContainer, TalkingImage, UsersList, UserItem } from './styles';
import H1 from '../../components/Title';
import SecondaryContainer from '../../components/BlurContainer';
import Button from '../../components/Button';
import TalkingImageSVG from '../../assets/talkingImg2.svg';
import 'boxicons';
import axios from 'axios';

const Users = () => {
    const [users, setUsers] = useState([]);
    const history = useHistory();

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3001/users/${id}`);
        const newUsers = users.filter(user => user.id !== id);
        setUsers(newUsers);
    };

    useEffect(() => {
        // fetchingUsers
        (async () => {
            const { data: usersList } = await axios.get('http://localhost:3001/users');
            console.log(usersList);
            setUsers(usersList);
        })();
    }, []);

    return (
        <MainContainer>
            <TalkingImage src={TalkingImageSVG} alt="people talking image" />
            <SecondaryContainer UsersPage={true}>
                <H1>Users</H1>
                <UsersList>
                    {users.map(user => (
                        <UserItem key={user.id}>
                            <p>{user.name}</p>
                            <p>{user.age}</p>
                            <button>
                                <box-icon onClick={() => deleteUser(user.id)} type="solid" name="trash" color="red" animation="tada-hover"></box-icon>
                            </button>
                        </UserItem>
                    ))}
                </UsersList>
                <Button onClick={() => history.push('/')} isWhiteButton={true}>
                    <p>Back</p>
                    <box-icon type="solid" name="chevron-left" color="white" animation="flashing"></box-icon>
                </Button>
            </SecondaryContainer>
        </MainContainer>
    );
};

export default Users;
