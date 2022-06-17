import { MainContainer, TalkingImage, SecondaryContainer, H1, Label, P, Input, Button } from './styles';
import TalkingImageSVG from './assets/talkingImg.svg';
import 'boxicons';

const App = () => {
    return (
        <MainContainer>
            <TalkingImage src={TalkingImageSVG} alt="people talking image" />
            <SecondaryContainer>
                <H1>Yo!</H1>
                <Label>
                    <P>Name:</P>
                    <Input placeholder="Lucas"></Input>
                </Label>
                <Label>
                    <P>Age:</P>
                    <Input placeholder="18"></Input>
                </Label>
                <Button>
                    Register
                    <box-icon type="solid" name="chevron-right" color="white" animation="flashing"></box-icon>
                </Button>
            </SecondaryContainer>
        </MainContainer>
    );
};

export default App;
