import styled from 'styled-components';

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
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        width: 80%;
        font-size: 18px;
        color: whitesmoke;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    button {
        background: none;

        box-icon {
            cursor: pointer;
        }
    }
`;
