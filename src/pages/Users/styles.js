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

export const SecondaryContainer = styled.section`
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    backdrop-filter: blur(45px);
    border-radius: 10px 10px 0px 0px;
    padding: 50px 40px;
    width: 100%;
    max-width: 420px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

export const H1 = styled.h1`
    font-weight: 500;
    font-size: 40px;
    line-height: 40px;
    color: whitesmoke;
    margin-bottom: 15px;
    background: linear-gradient(45deg, #6317a9, #c89bf1);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    text-shadow: 1px 1px 4px #6317a9bb;
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

export const Button = styled.button`
    background: rgba(255, 255, 255, 0.01);
    color: whitesmoke;
    border-radius: 5px;
    border: 1px solid whitesmoke;
    width: 80%;
    max-width: 380px;
    height: 60px;
    margin-top: 20px;
    cursor: pointer;
    font-size: 17px;
    font-weight: 300;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    gap: 6px;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: translateY(3px);
        opacity: 0.95;
    }
`;
