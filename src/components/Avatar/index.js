import React from 'react';
import colors from '../../styles/colors';

import {Container, UserIcon, Image} from './styles';

const Avatar = ({uri, size, color}) => {
  let defaultSize = 20;
  let defaultColor = 'black';
  if (!size) {
    size = defaultSize;
  }

  if (color === 'light') {
    color = colors.white;
  } else {
    color = defaultColor;
  }

  return (
    <Container>
      {uri ? (
        <Image source={{uri: uri}} style={{width: size, height: size}} />
      ) : (
        <UserIcon name="user-circle" size={size} color={color} />
      )}
    </Container>
  );
};

export default Avatar;
