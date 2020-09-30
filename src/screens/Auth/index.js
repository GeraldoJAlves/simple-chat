import React from 'react';
import {Text} from 'react-native';

import {GoogleSigninButton} from '@react-native-community/google-signin';

import {Container} from './styles';

import {signIn} from '../../services/authGoogle';

const Auth = () => {
  return (
    <Container>
      <Text>Auth</Text>
      <GoogleSigninButton
        onPress={() => {
          signIn()
            .then((userInfo) => {
              console.log(userInfo.user);
            })
            .catch((e) => console.log(e));
        }}
      />
    </Container>
  );
};

export default Auth;
