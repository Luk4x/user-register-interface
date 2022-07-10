import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { UsersList, UserItem } from './styles';
import MainContainer from '../../components/MainContainer';
import Image from '../../components/Image';
import H1 from '../../components/Title';
import SecondaryContainer from '../../components/BlurContainer';
import Button from '../../components/Button';
import 'boxicons';
import axios from 'axios';

const Users = () => {
    const [users, setUsers] = useState([]);
    const history = useHistory();

    const deleteUser = async id => {
        await axios.delete(`${process.env.REACT_APP_API_URL}/users/${id}`);
        const newUsers = users.filter(user => user.id !== id);
        setUsers(newUsers);
    };

    useEffect(() => {
        // fetchingUsers
        (async () => {
            const { data: usersList } = await axios.get(`${process.env.REACT_APP_API_URL}/users`);
            console.log(usersList);
            setUsers(usersList);
        })();
    }, []);

    return (
        <MainContainer>
            <Image alt="avatars image" />
            <SecondaryContainer UsersPage={true}>
                <H1>Users</H1>
                <UsersList>
                    {users.map(user => (
                        <UserItem key={user.id}>
                            <div>
                                <p>{user.name}</p>
                                <p>{user.age}</p>
                            </div>
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
