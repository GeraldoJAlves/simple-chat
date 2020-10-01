import React from 'react';

import {Alert} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import {GoogleSigninButton} from '@react-native-community/google-signin';

import {Container} from './styles';

import {login} from '../../store/actions/user';
import {setMessage} from '../../store/actions/message';

const Auth = () => {
  const user = useSelector((state) => state.user);
  const message = useSelector((state) => state.message);

  const dispatch = useDispatch();

  console.log(message);

  if (message.title && message.text) {
    Alert.alert(message.title, message.text);
    dispatch(setMessage({title: '', text: ''}));
  }

  return (
    <Container>
      <GoogleSigninButton
        onPress={() => {
          dispatch(login());
        }}
      />
    </Container>
  );
};

export default Auth;
