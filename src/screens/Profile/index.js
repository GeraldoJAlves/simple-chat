import React, {useState} from 'react';
import {Text} from 'react-native';

import {Container, ButtonLogout} from './styles';

import {getCurrentUserInfo, signOut} from '../../services/authGoogle';

const Profile = () => {
  const [user, setUser] = useState({});

  getCurrentUserInfo().then((userInfo) => {
    setUser(userInfo.user);
  });

  return (
    <Container>
      <Text>{user.email}</Text>
      <ButtonLogout
        onPress={() => {
          signOut().then(() => {
            console.log('deslogado');
          });
        }}>
        <Text>Sair</Text>
      </ButtonLogout>
    </Container>
  );
};

export default Profile;
