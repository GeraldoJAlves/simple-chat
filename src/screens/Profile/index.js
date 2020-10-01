import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Text} from 'react-native';

import {Container, ButtonLogout} from './styles';

import {
  getCurrentUserInfo,
  isSignedIn,
  signOut,
} from '../../services/authGoogle';

const Profile = () => {
  //const [user, setUser] = useState({});

  const user = useSelector((state) => state.user);

  console.log(user);

  return (
    <Container>
      <Text>{user.email}</Text>
      <ButtonLogout
        onPress={async () => {
          await signOut();
        }}>
        <Text>Sair</Text>
      </ButtonLogout>
    </Container>
  );
};

export default Profile;
