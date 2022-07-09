import styled from 'styled-components';
import Background1 from '../../assets/background2.svg';

export const MainContainer = styled.main`
    background: url('${Background1}') no-repeat fixed center center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    padding-top: 30px;
    min-height: 100vh;
`;

export const TalkingImage = styled.img`
    width: 80vw;
    max-width: 800px;
`;

export const UsersList = styled.ul`
    list-style-type: none;
    width: 80%;
    max-width: 380px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

export const UserItem = styled.li`
    list-style-type: none;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 15px 25px;
    width: 100%;
    height: 48px;
    font-size: 16px;
    color: whitesmoke;
    display: flex;
    align-items: center;
    justify-content: space-around;

    p {
        font-size: 16px;
    }

    button {
        background: none;

        box-icon {
            cursor: pointer;
        }
    }
`;
