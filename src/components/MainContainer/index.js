import { MainContainer as Main } from './styles';

const MainContainer = ({ children, ...props }) => {
    return <Main {...props}>{children}</Main>;
};

export default MainContainer;
