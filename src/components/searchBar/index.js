import React, {useState} from 'react';

import {
  Container,
  ContainerSearch,
  TextTitleApp,
  InputSearch,
  Button,
  SearchIcon,
  OptionsIcon,
  BackIcon,
} from './styles';

const searchBar = ({hideTabBar, showTabBar}) => {
  const [showInputSearch, setShowInputSearch] = useState(false);

  if (showInputSearch) {
    return (
      <SearchItem
        setShowInputSearch={setShowInputSearch}
        showTabBar={showTabBar}
      />
    );
  }

  return (
    <Container>
      <TextTitleApp>SimpleChat</TextTitleApp>
      <Button
        onPress={() => {
          hideTabBar();
          setShowInputSearch(true);
        }}>
        <SearchIcon name="search" size={22} />
      </Button>
      <Button>
        <OptionsIcon name="dots-vertical" size={25} />
      </Button>
    </Container>
  );
};

const SearchItem = ({showTabBar, setShowInputSearch}) => {
  return (
    <ContainerSearch>
      <Button
        onPress={() => {
          showTabBar();
          setShowInputSearch(false);
        }}>
        <BackIcon name="arrow-left" size={22} />
      </Button>
      <InputSearch autoFocus={true} placeholder="Search..." />
    </ContainerSearch>
  );
};

export default searchBar;
