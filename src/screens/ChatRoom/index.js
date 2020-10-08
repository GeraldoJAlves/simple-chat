import React from 'react';

import Avatar from '../../components/Avatar';

import {
  Container,
  Header,
  BackIcon,
  Name,
  Status,
  OptionsIcon,
  WrapperInfo,
  WrapperMessage,
  WrapperBottom,
  WrapperAudio,
  ButtonBack,
  InputText,
  EmojiIcon,
  ClipIcon,
  CameraIcon,
  MicrophoneIcon,
} from './styles';

const ChatRoom = ({navigation}) => {
  return (
    <Container>
      <Header>
        <ButtonBack
          onPress={() => {
            navigation.goBack();
          }}>
          <BackIcon name="arrow-left" size={30} />
        </ButtonBack>
        <Avatar size={40} color="light" />
        <WrapperInfo>
          <Name>Teste</Name>
          <Status>offline</Status>
        </WrapperInfo>
        <OptionsIcon name="dots-vertical" size={30} />
      </Header>
      <WrapperMessage></WrapperMessage>
      <WrapperBottom>
        <EmojiIcon />
        <InputText />
        <ClipIcon />
        <CameraIcon />
        <WrapperAudio>
          <MicrophoneIcon />
        </WrapperAudio>
      </WrapperBottom>
    </Container>
  );
};

export default ChatRoom;
