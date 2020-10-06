import React from 'react';

import {Container, UserIcon, Image} from './styles';

const Avatar = ({uri, size}) => {
  let defaultSize = 20;

  if (!size) {
    size = defaultSize;
  }

  return (
    <Container>
      {uri ? (
        <Image source={{uri: uri}} style={{width: size, height: size}} />
      ) : (
        <UserIcon name="user-circle" size={size} />
      )}
    </Container>
  );
};

export default Avatar;
