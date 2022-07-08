import styled from 'styled-components';
import Background1 from '../../assets/background1.svg';

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

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 80%;
    max-width: 380px;
`;

export const P = styled.p`
    padding-left: 5px;
    font-size: 17px;
    letter-spacing: -0.408px;
    color: whitesmoke;
`;

export const Input = styled.input`
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 15px 0 15px 25px;
    width: 100%;
    height: 48px;
    font-size: 16px;
    color: whitesmoke;
    transition: all 0.2s ease-in-out;

    &:hover,
    &:focus {
        transform: translateY(1.5px);
    }

    &::placeholder {
        font-style: italic;
    }
`;

export const Button = styled.button`
    background: rgba(0, 0, 0, 0.8);
    color: whitesmoke;
    border-radius: 5px;
    width: 80%;
    max-width: 380px;
    height: 60px;
    margin-top: 20px;
    cursor: pointer;
    font-size: 17.5px;
    font-weight: 300;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: translateY(3px);
        opacity: 0.95;
    }
`;
