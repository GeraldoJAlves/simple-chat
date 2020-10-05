import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../../styles/colors';

export const Container = styled.View`
  background-color: ${colors.primary};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const TextTitleApp = styled.Text`
  flex: 1;
  color: ${colors.font};
  font-size: 20px;
  font-weight: bold;
`;
export const Button = styled.TouchableOpacity`
  margin-left: 15px;
`;

export const SearchIcon = styled(Icon)`
  color: ${colors.font};
`;

export const OptionsIcon = styled(MaterialCommunityIcons)`
  color: ${colors.font};
`;
