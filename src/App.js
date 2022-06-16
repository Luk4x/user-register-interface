import { MainContainer, TalkingImage, SecondaryContainer, H1, Label, Input, Button } from './styles';

const App = () => {
    return (
        <MainContainer>
            <TalkingImage />
            <SecondaryContainer>
                <H1>Yo!</H1>
                <Label>
                    Name:
                    <Input placeholder="Name..."></Input>
                </Label>
                <Label>
                    Age:
                    <Input placeholder="Age..."></Input>
                </Label>
                <Button>Register</Button>
            </SecondaryContainer>
        </MainContainer>
    );
};

export default App;
