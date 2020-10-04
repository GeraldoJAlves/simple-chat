import React from 'react';

import {Container, TextTitleApp, SearchIcon, OptionsIcon} from './styles';

const searchBar = () => {
  return (
    <Container>
      <TextTitleApp>SimpleChat</TextTitleApp>
      <SearchIcon />
      <OptionsIcon />
    </Container>
  );
};

export default searchBar;
