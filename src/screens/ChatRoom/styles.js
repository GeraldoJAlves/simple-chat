import styled from 'styled-components/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../../styles/colors';

export const Container = styled.View``;

export const Header = styled.View`
  height: 60px;
  background: ${colors.primary};
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const ButtonBack = styled.TouchableOpacity`
  margin-right: 10px;
`;

export const BackIcon = styled(MaterialCommunityIcons)`
  color: ${colors.font};
`;
export const Name = styled.Text`
  color: ${colors.font};
  font-weight: bold;
`;
export const Status = styled.Text`
  color: ${colors.font};
`;

export const OptionsIcon = styled(MaterialCommunityIcons)`
  color: ${colors.font};
`;
export const WrapperInfo = styled.View`
  margin-left: 10px;
  flex: 1;
  justify-content: space-around;
`;
export const WrapperMessage = styled.View``;
export const WrapperBottom = styled.View``;
export const WrapperAudio = styled.View``;
export const InputText = styled.View``;
export const EmojiIcon = styled.View``;
export const ClipIcon = styled.View``;
export const CameraIcon = styled.View``;
export const MicrophoneIcon = styled.View``;
