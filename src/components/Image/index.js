import React from 'react';
import { Image as Img } from './styles';
import TalkingImage from '../../assets/talkingImg.svg';
import TalkingImage2 from '../../assets/talkingImg2.svg';

const Image = ({ isImg1, ...props }) => {
    return <Img src={isImg1 ? TalkingImage : TalkingImage2} {...props} />;
};

export default Image;
