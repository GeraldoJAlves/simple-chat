import React from 'react';

import {
  Container,
  TextTitleApp,
  Button,
  SearchIcon,
  OptionsIcon,
} from './styles';

const searchBar = () => {
  return (
    <Container>
      <TextTitleApp>SimpleChat</TextTitleApp>
      <Button>
        <SearchIcon name="search" size={22} />
      </Button>
      <Button>
        <OptionsIcon name="dots-vertical" size={25} />
      </Button>
    </Container>
  );
};

export default searchBar;
