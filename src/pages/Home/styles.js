import styled from 'styled-components';

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
