import { Container, H1 } from './styles.js';

const App = () => {
    const hello = 'Yo!';
    return (
        <Container>
            <H1>{hello}</H1>
        </Container>
    );
};

export default App;
