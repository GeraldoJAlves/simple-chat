import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
`;

export const ContainerItem = styled.TouchableOpacity`
  flex-direction: row;
  margin: 7px 10px;
`;

export const WrapperInfo = styled.View`
  margin-left: 10px;
  flex: 1;
  justify-content: space-evenly;
  border-bottom-color: #ddd;
  border-bottom-width: 1px;
`;

export const TitleChat = styled.Text`
  font-weight: bold;
`;

export const LastMessage = styled.Text`
  color: gray;
`;

export const TimeText = styled.Text`
  color: gray;
`;
