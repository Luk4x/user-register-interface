import styled from 'styled-components';

export const SecondaryContainer = styled.section`
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    border-radius: 10px 10px 0px 0px;
    padding: 50px 40px;
    width: 100%;
    max-width: 420px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    ${props =>
        props.isBlur &&
        `
            backdrop-filter: blur(45px);
        `}
`;
