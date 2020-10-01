import React from 'react';

import {useDispatch} from 'react-redux';

import {GoogleSigninButton} from '@react-native-community/google-signin';

import {Container} from './styles';

import {loginGoogle} from '../../store/actions/user';

const Auth = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <GoogleSigninButton
        onPress={() => {
          dispatch(loginGoogle());
        }}
      />
    </Container>
  );
};

export default Auth;
