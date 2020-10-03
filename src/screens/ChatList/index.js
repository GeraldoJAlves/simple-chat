import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {useDispatch} from 'react-redux';

import firestore from '@react-native-firebase/firestore';

import {Container} from './styles';

import {setMessage} from '../../store/actions/message';

const ChatList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const subscriber = firestore()
      .collection('teste')
      .onSnapshot((documentSnapshot) => {
        if (documentSnapshot.docs.length) {
          const {message} = documentSnapshot.docs[0].data();
          console.log('User data: ', message);
          dispatch(setMessage(message));
        }
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, []);

  return (
    <Container>
      <Text>ChatList</Text>
    </Container>
  );
};

export default ChatList;
