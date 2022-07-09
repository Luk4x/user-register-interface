import styled from 'styled-components';

export const Button = styled.button`
    background: ${props => (props.isWhiteButton ? 'rgba(255, 255, 255, 0.01)' : 'rgba(0, 0, 0, 0.8)')};
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

    ${props =>
        props.isWhiteButton &&
        `
        border: 1px solid whitesmoke;
        flex-direction: row-reverse;
    `}
`;
