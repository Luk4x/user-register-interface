import styled from 'styled-components';
import Background1 from '../../assets/background1.svg';
import Background2 from '../../assets/background2.svg';

export const MainContainer = styled.main`
    background: ${props => (props.isBg1 ? `url('${Background1}')` : `url('${Background2}')`)} repeat fixed center center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    padding-top: 30px;
    min-height: 100vh;
`;
